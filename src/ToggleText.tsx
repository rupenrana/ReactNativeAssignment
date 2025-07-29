import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";



const ToggleText = () => {
    const [visible, setVisible] = useState(true);

    const handlePress = () => {
        setVisible(!visible);
    }

    const title = visible ? "Hide Details" : "Show Details";

    return (
        <View style={style.container}>
            {visible && <Text style={style.title}> I am visible, press button to hide me!</Text>}
            <TouchableOpacity style={style.button} onPress={handlePress} >
                <Text style={style.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ToggleText;


const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: '#f9f7fb',
        paddingHorizontal: 20,
        paddingVertical: 80,
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#338833',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: "#FFFFFF",
        fontWeight: 'bold',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#333',
        marginBottom: 40
    },
    message: {
        fontSize: 14,
        marginBottom: 8,
        color: '#666',
  }
});