import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ProductCard from '../components/ProductCard.js';

import Katje1Image from '../images/bozeKat.jpg';
import Katje2Image from '../images/bozeKat.jpg';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onze Katjes!</Text>

      <ScrollView contentContainerStyle={styles.cardContainer}>
        <ProductCard
          title="Katje Nelly"
          subtitle="Diersoort: Katje"
          price="150"
          image={Katje1Image}
          onPress={() =>
            navigation.navigate('ProductDetail', {
              title: 'Katje Nelly',
              subtitle: 'Diersoort: Katje',
              price: '150',
              image: Katje1Image,
            })
          }
        />
        
        <ProductCard
          title="Katje Bella"
          subtitle="Diersoort: Katje"
          price="180"
          image={Katje2Image}
          onPress={() =>
            navigation.navigate('ProductDetail', {
              title: 'Katje Bella',
              subtitle: 'Diersoort: Katje',
              price: '180',
              image: Katje2Image,
            })
          }
        />
        
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91c98c',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
