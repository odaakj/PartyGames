import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function SplashScreen() {
    return (
        <View style={styles.container}>
                <Text style={styles.text}>Snusboksa</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a9c6e3'
    },
    text: {
        marginTop: 20,
        fontSize: 60,
        fontWeight: 'bold',
        
    },
});