import React from "react";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";


interface ChildProps {
  text: string;
}
// child component
const Message = React.memo(({ text }: ChildProps) => {
    console.log("Message component rendered");
    return <Text style={{ color: "blue", alignSelf: "center", fontSize: 18, marginTop: 40 }}>{text}</Text>;
});

// parent component
const ParentChildMemoization = () => {

const [text, setText] = useState("");
const [count, setCount] = useState(0);

return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 120 }} value={text} onChangeText={setText} />
      <Button title="Increment" onPress={() => setCount(count + 1)} />
      <Text>Count: {count}</Text>
      <Message text={text} />
    </View>
  );
}

export default ParentChildMemoization;