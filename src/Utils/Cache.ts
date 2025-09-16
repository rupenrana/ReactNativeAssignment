import AsyncStorage from '@react-native-async-storage/async-storage';


const Cache = {

async saveData<T>(key: string, value: T): Promise<void> {
    const json = JSON.stringify(value);
    await AsyncStorage.setItem(key, json);
},

readData: async <T>(key: string): Promise<T | null> => {
    const json = await AsyncStorage.getItem(key);
    return json ? JSON.parse(json) as T : null;
},

async clearAllRecords(): Promise<void> {
    try {
        await AsyncStorage.clear();
        console.log('All cache records cleared.');
    } catch (error) {
        console.error('Error clearing cache:', error);
    }
}
};

export default Cache;