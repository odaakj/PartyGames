import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useRouter } from 'expo-router';


export default function GeneralButton({ label, onPress, route }) {
    const router = useRouter();

    // Handle button press based on whether route or onPress is provided
    const handlePress = () => {
        if (route) {
            // If a route is provided, navigate to that route
            router.push(route);
        } else if (onPress) {
            // If no route but an onPress is provided, use the onPress function
            onPress();
        } else {
            console.warn("No route or onPress provided for GeneralButton");
        }
    };

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 20,
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        width: 120,
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
    buttonLabel: {
        color: '#000000',
        fontSize: 25,
        fontFamily: 'BebasNeue',
        textAlign: 'center',
    },
});