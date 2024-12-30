import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { signUp, signIn } from '../firebase/authService';

export default function AuthScreen() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
          await signUp(email, password);
          router.push('/home');
        } catch (error) {
          console.error('Sign up error:', error);
        }
    };

    const handleSignIn = async () => {
        try {
          await signIn(email, password);
          router.push('/home');
        } catch (error) {
          console.error('Sign in error:', error);
        }
    };

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome</Text>

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

          {/* Sign Up button */}
          <Button
            title="Sign Up"
            onPress={handleSignUp}
          />

          {/* Sign In button */}
          <Button
            title="Sign In"
            onPress={handleSignIn}
          />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#89CFF0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    },
    title: {
    fontSize: 32,
    fontFamily: 'BebasNeue',
    marginBottom: 20,
    },
    input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    },
});
