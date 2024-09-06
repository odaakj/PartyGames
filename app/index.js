import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GameButton from '../Components/GameButton';


export default function HomeScreen() {
    
    useEffect(() => {
        console.log('Home Screen Loaded');
      }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Velg en drikkelek</Text>
            <View style={styles.buttonContainer}>
                <GameButton label="Snusboksen" route="/Snusboksa" />
                <Text>Flere drikkeleker kommer...</Text>
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
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 300, 
    },
    text: {
        fontSize: 42,
        fontFamily: 'BebasNeue',
        color: '#000',
        margin: 10, // Adjust margin as needed
    }
});