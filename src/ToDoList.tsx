import { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";


const ToDoList = () => {

    const [names, setNames] = useState<string[]>([]);
    const nameRef = useRef('');

    const handlePress = () => {
        setNames([...names, nameRef.current]);
    }

    const handleTextChange = (text: string) => {
        nameRef.current = text;
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Type name..." onChangeText={handleTextChange} />
            <TouchableOpacity style={styles.button} onPress={handlePress} >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <FlatList
                data={names}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Text style={styles.assignmentText}>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    );
}

export default ToDoList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3EDF0',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: 30,
    },
    input: {
        height: 44,
        width: 200,
        borderColor: '#999',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderRadius: 6,
        marginBottom: 20,
        alignSelf: 'center',
    },
    label: {
        fontSize: 50,
        color: "#BBBBBB",
        fontWeight: "condensedBold",
        marginTop: 50
    },
    button: {
        width: 120,
        height: 50,
        backgroundColor: '#338833',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0,
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "condensedBold",
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
    },
});