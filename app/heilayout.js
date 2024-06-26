import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot, usePathname } from 'expo-router';
import { useFonts } from 'expo-font';
import SplashScreen from './SplashScreen';


export default function Layout() {
  const [fontsLoaded] = useFonts({
    'BebasNeue': require('../assets/Fonts/BebasNeue-Regular.ttf'),
  });

  const [isSplashVisible, setIsSplashVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    console.log('Current pathname:', pathname);
  }, [pathname]);

  if (isSplashVisible) {
    console.log('Splash Screen is visible');
  }

  if (!fontsLoaded) {
    console.log('Fonts are not loaded yet');
  }

  if (isSplashVisible || !fontsLoaded) {
    return <SplashScreen />;
  }

  console.log('Rendering main layout');

  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});