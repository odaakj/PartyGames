import React, { useEffect } from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useRouter } from 'expo-router';


export default function GameButton({ route, label }) {
    const router = useRouter();

    useEffect(() => {
        console.log(`GameButton for ${label} loaded`);
      }, []);

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => router.push(route)}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10,
        borderRadius: 20,
        overflow: 'hidden',
    },
    button: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        width: 300,
        height: 90,
        // Border
        borderRadius: 20,
        borderColor: '#000000', // Black border color
        borderWidth: 3, // Border width, adjust as needed
        //Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // shadow for Android
        elevation: 5,
    },
    buttonLabel: {
        color: '#000000',
        fontSize: 40,
        fontFamily: 'BebasNeue',
        textAlign: 'center',
    },
});