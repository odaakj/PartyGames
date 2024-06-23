import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import beerIcon from "../assets/Images/beer.png";

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={beerIcon} style={styles.image}/>
                <Text style={styles.text}>Drikk Opp</Text>
            </View>
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
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
    },
    text: {
        marginTop: 20,
        fontSize: 60,
        fontWeight: 'bold',
        
    },
});