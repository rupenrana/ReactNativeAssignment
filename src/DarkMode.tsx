

import React, { useState } from "react";
import { StatusBar, Switch, Text, View } from "react-native";

const DarkMode = () => {

    const [isDarkMode, setDarkMode] = useState(false);
    const textStyle = {
    color: isDarkMode ? '#FFFFFF' : '#000000',
    fontSize: 24,
    marginBottom: 20,
  };

  const toggleSwitch = () => {
    setDarkMode(previousState => !previousState);
  };

    return (
        <View style={{ flex: 1, backgroundColor: isDarkMode ? '#000' : '#FFF' }}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <Text style={textStyle}>Dark Mode is {isDarkMode ? 'On' : 'Off'}</Text>
            <Switch value={isDarkMode} onValueChange={toggleSwitch} thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'} trackColor={{ false: '#767577', true: '#81b0ff' }}
      />
        </View>
    )
}

export default DarkMode