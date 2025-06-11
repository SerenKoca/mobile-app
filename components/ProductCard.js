import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ title, price, image, onPress }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>

      <Text style={styles.price}>€ {price.toFixed(2)}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: 'gray',
    marginTop: 4,
    marginBottom: 6,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#91c98c',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ProductCard;
