import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Slot } from 'expo-router';
import { useFonts } from 'expo-font';
import SplashScreen from './SplashScreen';

export default function Layout() {
    const [fontsLoaded] = useFonts({
        'BebasNeue': require('../assets/Fonts/BebasNeue-Regular.ttf'),
    });

    const [isSplashVisible, setIsSplashVisible] = useState(true);

    useEffect(() => {
        if (fontsLoaded) {
        const timer = setTimeout(() => {
            setIsSplashVisible(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
        }
    }, [fontsLoaded]);

    if (isSplashVisible) {
        return <SplashScreen />;
    }


  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89CFF0',
  },
});