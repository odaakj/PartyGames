import React from "react";
import { Pressable } from "react-native";

export default function GameButton() {
    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('You have pushed the button')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}