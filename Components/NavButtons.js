import React from "react";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useRouter } from 'expo-router';


export default function NavButton({ label, route }) {
    const router = useRouter();
    
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
        borderRadius: 5,
        overflow: 'hidden',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        alignItems: 'center',
        width: 200,
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
        fontSize: 20,
        fontFamily: 'BebasNeue',
        textAlign: 'center',
    },
});