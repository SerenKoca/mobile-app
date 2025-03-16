import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Correcte hook

const ProductCard = ({ title, subtitle, price, image, onPress}) => {
    const navigation = useNavigation(); // Correcte hook gebruiken

    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{subtitle}</Text>

            <TouchableOpacity style={styles.button} onPress={onPress} >
                <Text style={styles.buttonText}>Bekijk product</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 16,
        alignItems: 'center',
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
