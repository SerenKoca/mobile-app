import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import ProductCard from '../components/ProductCard.js';
import { Picker} from '@react-native-picker/picker';

const categoryNames = {
  "" : "Alle categorieën",
  "67dec50905ee85ebb5a62183" : "Honden",
  "67bf15c3f8eceddc0007b196" : "Katten",
  "67dec546050dd1d08868f781" : "Knaagdieren",
  "67dec5567152b7b46a832c24" : "Vogels",
  "67dec54e9813cb129f15a5ef" : "Vissen",
};

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

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
          category:
            categoryNames[item.product.fieldData.category[0]] || "Onbekend",
        }))
    )
  )
  .catch((err) => console.error("Error: ", err));
  }, []);

  const filteredProducts = products.filter((p) =>
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
      <Text style={styles.title}>Onze producten!</Text>
      <ScrollView contentContainerStyle={styles.cardContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder = "Zoek een model..."
          placeholderTextColor = "#666"
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
       <View style={styles.row}>
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
    width: '90%',
    alignSelf: 'center',
  },
  searchInput: {
    height: 40,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: '#333',
  },
  picker: {
    height: 60,
    width: '100%',
    color: '#333',
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
