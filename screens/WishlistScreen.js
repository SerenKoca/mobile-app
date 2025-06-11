import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const WishlistScreen = ({ route, navigation }) => {
  const { wishlist } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mijn Wishlist</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {wishlist.length === 0 ? (
          <Text style={styles.emptyText}>Je wishlist is nog leeg!</Text>
        ) : (
          wishlist.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              onPress={() => navigation.navigate("ProductDetail", product)}
            />
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#91c98c', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 16, alignSelf: 'center' },
  scrollContent: { flexGrow: 1 },
  emptyText: { color: 'white', fontSize: 18, textAlign: 'center', marginTop: 50 },
});

export default WishlistScreen;
