

import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const assignments = [
    { id: '1', title: 'Counter' },
    { id: '2', title: 'GreetingCard' },
    { id: '3', title: 'ToggleText' },
    { id: '4', title: 'Timer' },
    { id: '5', title: 'InputHandler' },
    { id: '6', title: 'ToDoList' },
    { id: '7', title: 'ParentChildMemoization' },
    { id: '8', title: 'CustomHook' },
    { id: '10', title: 'DarkMode' },
    { id: '11', title: 'ResponsiveCardGrid' },
]

import { NavigationProp } from '@react-navigation/native';

interface AssignmentListMenuProps {
    navigation: NavigationProp<any>;
}

const AssignmentListMenu = ({ navigation }: AssignmentListMenuProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Assignments</Text>
            <FlatList
                data={assignments}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate(item.title)}>
                        <Text style={styles.assignmentText}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
    },
    assignmentItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    assignmentText: {
        fontSize: 20,
        marginBottom: 12,
        marginTop: 12,
        fontWeight: 500,
    },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginVertical: 4,
  },
});

export default AssignmentListMenu;