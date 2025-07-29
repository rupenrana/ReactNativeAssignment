import { useEffect, useState } from "react";
import { Text } from "react-native";


const Timer = () => {
    const [timerSec, setTimerSec] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setTimerSec(prevTimerSec => prevTimerSec + 1);
  }, 1000);
  return () => {
    clearInterval(interval);
  };
}, []);


    return (
        <Text style={{ fontSize: 54, textAlign: 'center', marginTop: 150, color: '#000' }}>{timerSec}</Text>
    );
}


export default Timer;