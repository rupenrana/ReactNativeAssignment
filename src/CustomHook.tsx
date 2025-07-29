import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { View } from "react-native";


interface User {
    name: string;
}

const useFetch = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                console.log("Fetching data from:", url);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err) {
                console.log("Error fetching data:", err);
                setError("Error occurred while fetching data");
            } finally {
                console.log("Data fetched successfully");
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return { loading, error, data };
};


const CustomHook = () => {
    const { loading, error, data } = useFetch("https://jsonplaceholder.typicode.com/users");
    return (
        <View style={styles.container}>
            {loading && <Text>Loading...</Text>}
            {!loading && error && <Text>Error Occurred</Text>}
            {!loading && !error && data && <FlatList style={styles.assignmentItem}
                data={data}
                renderItem={({ item }) => (
                    <Text style={styles.assignmentText}>{item.name}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />}
        </View>
    )
};

export default CustomHook;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3EDF0',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    assignmentItem: {
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        width: '100%',
        alignSelf: 'stretch'

    },
    assignmentText: {
        fontSize: 20,
        marginBottom: 12,
        marginTop: 12,
        fontWeight: 500,
        marginLeft: 20,
    },
    separator: {
        height: 1,
        backgroundColor: '#CCCCCC',
        marginVertical: 4,
    }
});