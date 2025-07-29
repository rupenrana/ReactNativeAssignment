
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const cards = [
    { title: 'Hello, World!', message: 'Welcome to the Greeting Card!' },
    { title: 'Happy Birthday!', message: 'Wishing you a wonderful day!' },
    { title: 'Congratulations!', message: 'You did it!' },
    { title: 'Multiline Message', message: 'This is a test for multiline message' },
    { title: 'React Native', message: 'Building mobile apps with React Native' },
    { title: 'Responsive Design', message: 'Making apps look good on all devices'}
];

const ResponsiveCardGrid = () => {
    return (
        <View style={styles.container}>
            {cards.map((card) => (
                <View style={styles.card}>
                    <Text style={styles.title}>{card.title}</Text>
                    <Text style={styles.description}>{card.message}</Text>
                </View>
            ))}
        </View>
    )
}

export default ResponsiveCardGrid;

const screenWidth = Dimensions.get('window').width;
const CARD_WIDTH = screenWidth / 2 - 30;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 20,
    gap: 20,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#BA8E23',
    padding: 16,
    marginBottom: 0,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});
