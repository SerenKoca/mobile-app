import React from 'react';
import { View, Text, Image, StyleSheet, Touchable, TouchableOpacity } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, subtitle, price, image } = route.params;
  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1){
      setQuantity(quantity - 1);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={image} />
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.price}>€{price}</Text>

      <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity> 

          <Text style={styles.quantity}>{quantity}</Text>

          <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.price}>Totaal: €{price * quantity}</Text>
     
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
  },
  image: {
    width: '50%',
    height: 150,
    borderRadius: 8,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
  },
  price: {
    fontSize: 20,
    color: 'white',
  },
  button: {
    backgroundColor: '#FF5733',  // Oranje kleur
    padding: 10,
    borderRadius: 50,  // Ronde knoppen
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  
  quantity: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',  // Zet de items naast elkaar
    alignItems: 'center',  // Zorgt dat ze op dezelfde lijn blijven
    marginVertical: 16,  // Ruimte boven en onder
  },
  
});

export default DetailsScreen;
