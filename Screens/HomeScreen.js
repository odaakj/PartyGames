import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GameButton from '../Components/GameButton';


export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <GameButton label="Snusboksen" onPress={() => alert('Start Game pressed')} />
                <GameButton label="Jeg har aldri..." onPress={() => alert('Pause Game pressed')} />
                <GameButton label="Karaoke" onPress={() => alert('Reset Game pressed')} />
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
    }
});