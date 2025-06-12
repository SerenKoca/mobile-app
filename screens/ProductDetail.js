import React from 'react';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, subtitle, price, image } = route.params; // Haal de parameters op
  const [quantity, setQuantity] = React.useState(1); // Begin met 1 als hoeveelheid

  //Met + en - knoppen kun je het aantal veranderen (niet lager dan 1).
  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1){
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.containerProduct}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{uri: image.uri}} />
      <Text style={styles.price}>€{price}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      

      </View>

      <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity> 

          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.priceTotal}>Totaal: €{price * quantity}</Text>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91c98c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  containerProduct: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#164723',
  },
  image: {
    width: '50%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 20,
    elevation: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#164723',
    textAlign: 'center',
  },
  price: {
    fontSize: 25,
    color: '#164723',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF5733',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  
  buttonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  
  quantity: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#164723',
    marginHorizontal: 10,
    alignItems: 'center',
  },
    priceTotal: {
    fontSize: 28,
    color: '#164723',
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',  
    alignItems: 'center', 
    marginVertical: 16, 
  },
  
});

export default DetailsScreen;
