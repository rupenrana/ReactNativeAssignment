import { Text, View, StyleSheet } from "react-native";

interface GreetingCardProps {
    title: string;
    message: string;
}

const GreetingCard = () => {
    return (
        <View style={style.container}>
            <Greeting title="Hello, World!" message="Welcome to the Greeting Card!" />
            <Greeting title="Happy Birthday!" message="Wishing you a wonderful day!" />
            <Greeting title="Congratulations!" message="You did it! Lets test the multiline message if it is rendering correctly or not. Though it should." />
        </View>
    );
}

const Greeting = ({ title, message }: GreetingCardProps) => {
    return (
            <View style={style.card}>
                <Text style={style.title}>{title}</Text>
                <Text style={style.message}>{message}</Text>
            </View>
    );
};

export default GreetingCard;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    backgroundColor: '#f9f7fb',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 12,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignSelf: 'stretch'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    color: '#333',
  },
  message: {
    fontSize: 14,
    marginBottom: 8,
    color: '#666',
  }
});