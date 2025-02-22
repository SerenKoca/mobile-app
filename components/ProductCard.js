import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Correcte hook

const ProductCard = () => {
    const navigation = useNavigation(); // Correcte hook gebruiken

    return (
        <View style={styles.card}>
            <Image 
                style={styles.image} 
                source={require('../images/bozeKat.jpg')} 
            />
            <Text style={styles.title}>Katje</Text>
            <Text style={styles.description}>Dit katje is heel lief!</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ProductDetail')} // Correcte navigatie
            >
                <Text style={styles.buttonText}>Bekijk</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 170,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
        alignItems: 'left',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        color: 'gray',
        marginTop: 8,
        marginBottom: 8,
    },
    button: {   
        backgroundColor: '#FF5733', 
        padding: 10,
        borderRadius: 8,
        marginTop: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ProductCard;
