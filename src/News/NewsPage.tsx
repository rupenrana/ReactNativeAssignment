import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NewsAPI } from "../API/NewsAPI";
import { NewsArticle } from "../Models/NewsModel";
import { AppError } from "../Utils/AppError";

const PAGE_SIZE = 7; // Number of articles per page
type FetchParams = { page: number; refreshSeq: number };

const NewsPage = () => {

    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<AppError | null>(null);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [params, setParams] = useState<FetchParams>({ page: 1, refreshSeq: 0 });

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setIsLoading(true);
                let forceRefresh = false;
                // setError(null); // Clear previous errors
                if (params.page === 1 && params.refreshSeq > 0) {
                    console.log("Triggered by pull-to-refresh");
                    forceRefresh = true;
                } else if (params.page === 1 && params.refreshSeq === 0) {
                    console.log("Triggered by initial load");
                } else {
                    console.log("Triggered by pagination (scroll)");
                }
                // Call our clean API function!
                console.log('Fetching news for page:', params.page);
                const fetchedArticles = await NewsAPI.getTopNews('us', params.page, forceRefresh);
                console.log('Fetched Articles:', fetchedArticles);
                if (params.page === 1) {
                    setArticles(fetchedArticles);
                } else {
                    setArticles(prevArticles => [...prevArticles, ...fetchedArticles]);
                }
                setHasMore(fetchedArticles.length === PAGE_SIZE);
            } catch (err) {
                setError(err as AppError);
            } finally {
                // This runs whether the request succeeded or failed
                setIsLoading(false);
                setIsRefreshing(false);
            }
        };
    fetchNews();
  }, [params]);

const handleLoadMore = () => {
    console.log('Loading more articles...IDK');
    if (hasMore && !isLoading && articles.length > 0) {
        console.log('Fetching next page:', params.page + 1);
        setParams(prev => ({ ...prev, page: prev.page + 1 }));
    }
};

const onRefresh = () => {
    console.log('Refreshing articles...IDK');
    setIsRefreshing(true);
    setArticles([]); // Clear current articles
    setHasMore(true); // Reset hasMore flag
    setParams({ page: 1, refreshSeq: params.refreshSeq + 1 });
};

if (isLoading) {
    return <ActivityIndicator size="large" style={{ marginTop: 150 }} />;
  }
if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red', fontSize: 16 }}>{error.message}</Text>
      </View>
    );
  } 

return (
    <View style={styles.container}>
        <Text style={styles.title}>THE BINDU</Text>

        <FlatList
            data={articles}
                renderItem={({ item }) => (
                    <>
                    <Image source={{
          uri: item.urlToImage || 'https://via.placeholder.com/150',
        }} style={styles.logo} />
                    <Text style={styles.articleTitle}>{item.title}</Text>
                    <Text style={styles.articleSubTitle}>{item.description}</Text>
                    </>
                )}
                keyExtractor={(item) => item.publishedAt}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={isLoading ? <ActivityIndicator size="large" /> : null}
                refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    articleTitle: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 5,
        color: '#94B4D',
    },
    articleSubTitle: {
        fontSize: 13,
        marginBottom: 10,
        color: '#a6a9ab',
    },
    separator: {
    height: 1,
    backgroundColor: '#FFFFFF',
    marginVertical: 4,
  },
  logo: {
    height: 128,
    marginBottom: 10,
  },
});    

export default NewsPage;