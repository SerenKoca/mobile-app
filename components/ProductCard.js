import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = () => {
    return (
        <View style={styles.card}>
            <Image 
                style={styles.image} 
                source={require('../images/bozeKat.jpg')} 
            />
            <Text style={styles.title}>Katje</Text>
            <Text style={styles.description}>Dit katje is heel lief!</Text>

            {/* Button die geen actie doet */}
            <View style={styles.button}>
                <Text style={styles.buttonText}>Ontmoet</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  // Zet de kaarten naast elkaar
        flexWrap: 'wrap',  // Zorgt ervoor dat de kaarten op een nieuwe rij komen als er geen ruimte is
        justifyContent: 'space-evenly',  // Zorgt voor ruimte tussen de kaarten
    },
    card: {
        width: 170,  // Verklein de breedte van de kaarten
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