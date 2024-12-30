import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GameCard from '../Components/GameCard';
import questions from '../Components/HundredQuestions';
import { useState } from 'react';
import GeneralButton from '../Components/GeneralButton';
import NavButton from '../Components/NavButtons';


export default function Snusboksa() {
    const [index, setIndex] = useState(0);

    const nextQuestion = () => {
        setIndex((prevIndex) => (prevIndex + 1) % questions.length);
    };

    const prevQuestion = () => {
        setIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
    };


    return (
        <View style={styles.container}>
                <Text style={styles.title}>SNUSBOKSA</Text>
                <GameCard question={questions[index] || "No question available"} />
                <View style={styles.helpButtonsContainer}>
                    {/* Conditionally render the "Back" button if not the first question */}
                    {index > 0 && (
                        <GeneralButton label='Tilbake' onPress={prevQuestion} />
                    )}

                    {/* Conditionally render the "Next" button if not the last question */}
                    {index < questions.length - 1 && (
                        <GeneralButton label='Neste' onPress={nextQuestion} />
                    )}
                </View>
                <View style={styles.navButtonContainer}>
                {/* Back to Menu button, always visible, styled and positioned independently */}
                <NavButton label='Tilbake til meny' route="/home" />
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#89CFF0',
        padding: 20,
    },
    title: {
        marginTop: 20,
        fontSize: 60,
        fontWeight: 'bold',
        fontFamily: 'BebasNeue',
    },
    helpButtonsContainer: {
        marginBottom: 10,
        width: 350,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navButtonContainer: {
        position: "absolute",
        bottom: 10,
        width: 350,
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'BebasNeue',
    },
});