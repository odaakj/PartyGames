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
                <GameButton label="Rygg Mot Rygg." route="/RyggMotRygg" />
                <GameButton label="Gjett temaet" route="/GuessTheme" />
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
        fontSize: 24,
        fontFamily: 'BebasNeue',
        color: '#000',
        marginBottom: 20, // Adjust margin as needed
    }
});