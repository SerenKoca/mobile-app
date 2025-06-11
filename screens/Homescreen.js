import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import ProductCard from '../components/ProductCard.js';
import { Picker } from '@react-native-picker/picker';

const categoryNames = {
  "": "Alle categorieën",
  "67dec50905ee85ebb5a62183": "Honden",
  "67bf15c3f8eceddc0007b196": "Katten",
  "67dec546050dd1d08868f781": "Knaagdieren",
  "67dec5567152b7b46a832c24": "Vogels",
  "67dec54e9813cb129f15a5ef": "Vissen",
};

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
  const { webflowApiUrl, webflowApiToken } =
    Constants.expoConfig?.extra || Constants.manifest?.extra || {};

  if (!webflowApiUrl || !webflowApiToken) {
    console.error("❌ Missing Webflow API credentials!");
    return;
  }

  fetch(webflowApiUrl, {
    headers: {
      Authorization: `Bearer ${webflowApiToken}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setProducts(
        (data.items || []).map((item) => {
          const product = item.product || {};
          const fieldData = product.fieldData || {};
          const sku = item.skus?.[0]?.fieldData || {};

          return {
            id: product.id,
            title: fieldData.name,
            subtitle: fieldData.description,
            price: (sku.price?.value || 0) / 100,
            image: { uri: sku["main-image"]?.url },
            category: categoryNames[fieldData.category?.[0]],
          };
        })
      );
    })
    .catch((err) => console.error("Error: ", err));
}, []);


  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

      <TouchableOpacity
          style={styles.blogButton}
          onPress={() => navigation.navigate("Blog")}  // Navigeer naar de Blogpagina
        >
          <Text style={styles.buttonText}>Naar de Blog</Text>
        </TouchableOpacity>

      <Text style={styles.title}>Onze producten</Text>

      

      <TextInput
        style={styles.searchInput}
        placeholder="Zoek een model..."
        placeholderTextColor="#666"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={styles.picker}
        >
          <Picker.Item label="Alle categorieën" value="" />
          {[...new Set(products.map((p) => p.category))].map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
          style={styles.picker}
        >
          <Picker.Item label="Prijs (laag-hoog)" value="price-asc" />
          <Picker.Item label="Prijs (hoog-laag)" value="price-desc" />
          <Picker.Item label="Naam (A-Z)" value="name-asc" />
          <Picker.Item label="Naam (Z-A)" value="name-desc" />
        </Picker>
      </View>
      
        <View style={styles.cardContainer}>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              image={product.image}
              onPress={() => navigation.navigate("ProductDetail", product)}
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
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignSelf: 'stretch', 
  },
  
  searchInput: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: '#333',
    alignSelf: 'stretch',
  },
  
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 16,
  },
  blogButton: {
    backgroundColor: '#ec5c38',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default HomeScreen;
