import { NewsApiResponse, NewsArticle } from '../Models/NewsModel';
import { AppError } from '../Utils/AppError';
import Cache from '../Utils/Cache';
import apiClient from './NewsNetwork';

export const NewsAPI = {
  getTopNews: async (country: string = 'us', page: number, forceRefresh: boolean = false): Promise<NewsArticle[]> => {
console.log('Fetching top news for country:', country, 'page:', page, 'forceRefresh:', forceRefresh);
    if  (forceRefresh) {
      console.log('Forcing refresh, clearing cache for page:', page);
      await Cache.clearAllRecords();
    }
    
    const cacheKey = `news_${page}`;

    try {
      const cachedData = await Cache.readData<NewsArticle[]>(cacheKey);
      if (cachedData && cachedData.length > 0) {
        console.log(`Cache hit for page: ${page}`);
        return cachedData;
      }
    } catch (error) {
      console.error('Error reading from cache:', error);
    }
    // Network fetch (must throw on error)
    let articles: NewsArticle[] = [];
    try {
      const responseData = await apiClient.get<NewsApiResponse>('/everything', {
        params: { q: 'trump', page, pageSize: 7 },
      });
      console.log('Response Data:', responseData);
      articles = responseData.data.articles ?? [];
    } catch (err: any) {
      const message = err?.message || 'Failed to fetch news';
  const code = err?.code || '99';

  // Wrap into AppError safely
  const error = new AppError(message, code);
  throw error;
}

    // Try cache write
    try {
      await Cache.saveData<NewsArticle[]>(cacheKey, articles);
      console.log(`Saved page ${page} to cache.`);
    } catch (error) {
      console.error('Error saving to cache:', error);
    }

    return articles;
  },
};