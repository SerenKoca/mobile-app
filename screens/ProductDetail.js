import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Katje Nelly</Text>
     <Image 
          style={styles.image} 
          source={require('../images/bozeKat.jpg')} 
          />
        <Text style={styles.subtitle}>Diersoort: Katje</Text>
        <Text style={styles.price}>Adoptie prijs: €150</Text>
    </View>
  );
}

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
});
export default DetailsScreen;