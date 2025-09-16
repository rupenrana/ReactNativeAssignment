
export interface NewsArticle { 
    title: string; 
    description: string; 
    urlToImage: string | null; 
    publishedAt: string; 
} 

export interface NewsApiResponse { 
    status: string; 
    totalResults: number; 
    articles: NewsArticle[]; 
}