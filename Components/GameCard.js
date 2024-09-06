import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";



export default function GameCard({ question }) {

    // Function to format the question by splitting at periods and joining with new lines
    const formatQuestion = (question) => {
        if (!question) {
            return "";  // Return an empty string if question is undefined
        }
        return question.replace(/([.?!])\s*/g, '$1\n\n');   // Keep the original punctuation
    };
    
    return (
        <View styles={styles.Container}>
            <View style={styles.CardContainer}>
                <Text style={styles.text}>{formatQuestion(question)}</Text>
            </View>  
        </View>  
    );
}

const styles = StyleSheet.create({
    Container: {
        margin: 20,
        alignContent: 'center',
        alignItems: 'center',
    },
    CardContainer: {
        margin: 50,
        padding: 19,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        //Size
        height: 200,
        width: 300,
        // Border
        borderRadius: 10,
        //Shadow for iOS
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // shadow for Android
        elevation: 5,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
})