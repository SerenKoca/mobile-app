import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductCard from '../components/ProductCard.js';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onze Katjes!</Text>

      {/* Container voor de kaarten */}
      <View style={styles.cardContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91c98c',
    alignItems: 'center',
    justifyContent: 'flex-start',  // Verander naar flex-start zodat het niet volledig in het midden staat
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 16,
    color: 'white',
  },
  cardContainer: {
    flexDirection: 'row',  // Zorgt ervoor dat de kaarten naast elkaar staan
    flexWrap: 'wrap',  // Zorgt ervoor dat ze naar de volgende rij gaan als er geen ruimte meer is
    justifyContent: 'space-evenly',  // Verdeel de kaarten gelijkmatig
    width: '100%',  // Zorgt ervoor dat de container de volledige breedte van het scherm heeft
    paddingHorizontal: 16,  // Voeg wat ruimte toe aan de zijkanten
  },
  
});

export default HomeScreen;
