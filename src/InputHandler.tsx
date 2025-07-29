import { useRef, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native";


const InputHandler = () => {
    const [name, setName] = useState("");
    const nameRef = useRef('');

const handlePress = () => {
    setName(nameRef.current);
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
            <Text style={styles.label}>Hi! {name}</Text>
        </View>
    );
}

export default InputHandler;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3EDF0',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    input: {
    height: 44,
    width: 200,
    borderColor: '#999',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 20,
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
    }
});