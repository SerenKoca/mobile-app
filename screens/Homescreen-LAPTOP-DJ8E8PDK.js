import React, { useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import ProductCard from '../components/ProductCard.js';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.webflow.com/v2/sites/67b1fd7718675f6820294134/products",
      {
        headers: {
          Authorization:
            "Bearer f70aa941d1c2fdafbc3dac609c31a1b9f55a09bcf85e32b37c250972e25d2a7c"
        },
      }
  )
    .then((res) => res.json())
    .then((data) => 
      setProducts(
        data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          subtitle: item.product.fieldData.description,
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: { uri: item.skus[0]?.fieldData["main-image"]?.url },
        }))
    )
  )
  .catch((err) => console.error("Error: ", err));
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onze Katjes!</Text>

      <ScrollView contentContainerStyle={styles.cardContainer}>
       
       <View style={styles.row}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            image={product.image}
            onPress={() => navigation.navigate("Details", product)}
          />
        ))}
        
        </View>
      </ScrollView>
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
