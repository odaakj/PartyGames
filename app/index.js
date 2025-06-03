import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { signUp, signIn } from '../firebase/authService';

export default function Index() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
      try {
        await signUp(email, password);
        router.push('/home');
      } catch (error) {
        console.error('Sign up error:', error);
        Alert.alert('Sign Up Failed', 'Please check your email and password.');
      }
    };

    const handleSignIn = async () => {
      try {
        await signIn(email, password);
        router.push('/home');
      } catch (error) {
        console.error('Sign in error:', error);
        Alert.alert('Sign In Failed', 'Please check your email and password.');
      }
    };

    const guestMode = async () => {
      router.push('/home');
    }

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Velkommen</Text>

          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />

          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <View style={styles.loginButtons}>

            {/* Sign In button */}
            <TouchableOpacity style={styles.signInUp} onPress={handleSignIn}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Sign Up button */}
            <TouchableOpacity style={styles.signInUp} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          {/* Continue as Guest */}
          <TouchableOpacity onPress={guestMode}>
              <Text style={styles.textButton}>Continue as guest</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#89CFF0',
      padding: 20,
    },
    title: {
      fontSize: 32,
      fontFamily: 'BebasNeue',
      marginBottom: 20,
    },
    input: {
      width: '80%',
      borderWidth: 1.5,
      borderColor: '#000',
      backgroundColor: '#fff',
      padding: 10,
      marginBottom: 10,
      fontSize: 16,
    },
    signInUp: {
      backgroundColor: '#FFFFFF',
      alignItems: 'center', // Center horizontally
      justifyContent: 'center', // Center vertically
      alignItems: 'center',
      width: "45%",
      height: 40,
      borderRadius: 2,
      //Shadow for iOS
      shadowColor: '#000',
      shadowOffset: {width: 4, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 4,
      // shadow for Android
      elevation: 5,
    },
    loginButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between', // Add space between buttons
      width: '80%',
      marginTop: 10,
      marginBottom: 30,
    },
    textButton: {
      color: "#000",
      fontWeight: '500',
      fontSize: 16,
    }
});
