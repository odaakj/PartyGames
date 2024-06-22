import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import { useEffect, useState } from 'react';

export default function App() {
  
  const [isShowSplash, setIsShowSplash] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 10000);

    return () => clearTimeout(timer);

  }, []);

  return (
    /*<>
      <StatusBar style="auto" />
      {isShowSplash ? (<SplashScreen />) : (<HomeScreen />)}
    </>*/
    <SplashScreen />
  );
}

