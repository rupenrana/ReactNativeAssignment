import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCounter = () => {
       setCount(count + 1)
    }

    const decrementCounter = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <View style={styles.container}>
        <View style={styles.row}>
            <TouchableOpacity style={styles.button} onPress={incrementCounter}>
                <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <Text style={styles.label}>{count}</Text>
            <TouchableOpacity style={styles.button} onPress={decrementCounter}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFDA03',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 100,
        color: "#BBBBBB",
        fontWeight: "condensedBold"
    },
    button: {
        width: 60,
        height: 70,
        backgroundColor: 'clear',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 0
    },
    buttonText: {
        fontSize: 60,
        color: "#000000",
        fontWeight: "condensedBold",
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default Counter;