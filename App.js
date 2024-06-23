import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'BebasNeue': require('./assets/Fonts/BebasNeue-Regular.ttf'),
  });
};

export default function App() {
  
  const [isShowSplash, setIsShowSplash] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return (
    <>
      <StatusBar style="auto" />
      {isShowSplash ? (<SplashScreen />) : (<HomeScreen />)}
    </>
  );
}

