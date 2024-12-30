import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import GameButton from '../Components/GameButton';
import GeneralButton from '../Components/GeneralButton';
import { logout } from '../firebase/authService';
import { auth } from '../firebase/firebaseConfig';


export default function HomeScreen() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        console.log('Home Screen Loaded');

        // Monitor authentication state
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setIsLoggedIn(!!user); // Update state based on user presence
        });

        return () => unsubscribe(); // Cleanup listener
    }, []);

    const handleAuthButton = async () => {
        if (isLoggedIn) {
            try {
                await logout();
                router.replace('/');
            } catch (error) {
                console.error('Logout error:', error);
                Alert.alert('Logout Failed', 'There was an error logging you out. Please try again.');
            }
        } else {
            router.replace('/'); // Redirect to login page if not logged in
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>Velg en drikkelek</Text>
            </View>
            <View style={styles.mainContent}>
                <ScrollView contentContainerStyle={styles.buttonContainer}>
                    <GameButton label="Snusboksen" route="/Snusboksa" />
                </ScrollView>
            </View>
            <View style= {styles.navContainer} >
                <GeneralButton label={isLoggedIn ? 'Logg ut' : 'Logg inn'} onPress={handleAuthButton} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#89CFF0'
    },
    header: {
        marginTop: 50,
        alignItems: 'center',
        paddingVertical: 20,
    },
    mainContent: {
        width: '90%', // Adjust as needed for your design
        height: '60%', // Explicit height
        //backgroundColor: '#0c597d',
        borderRadius: 10,
        marginBottom: 30, // Space above the footer
        alignSelf: 'center', // Center horizontally in the container
        overflow: 'hidden',
    },
    buttonContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start', // Align content to the top
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 50,
        fontFamily: 'BebasNeue',
        color: '#000',
        margin: 10,
    },
    navContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '10%',
        alignItems: 'center',
        backgroundColor: '#89CFF0',
    }
});