import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ title, price, image, onPress, onToggleWishlist, isInWishlist }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />

        <TouchableOpacity onPress={onToggleWishlist} style={styles.heartButton}>
          <Text style={styles.heartText}>{isInWishlist ? '❤️' : '🤍'}</Text>
        </TouchableOpacity>
      </View>

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
    width: '45%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 20,
    padding: 6,
  },
  heartText: {
    fontSize: 18,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#164723',
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
