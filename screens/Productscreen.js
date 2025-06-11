import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
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

const ProductScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const { webflowApiUrl, webflowApiToken } = Constants.expoConfig?.extra || Constants.manifest?.extra || {};

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

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const isAlreadyInWishlist = prevWishlist.some((item) => item.id === product.id);
      if (isAlreadyInWishlist) {
        return prevWishlist.filter((item) => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

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
    <SafeAreaView style={styles.container}>
      {/* Sticky wishlist knop */}
      <TouchableOpacity
        style={styles.wishlistButton}
        onPress={() => navigation.navigate("Wishlist", { wishlist })}
      >
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{wishlist.length}</Text>
        </View>
        <Text style={styles.wishlistButtonText}>Wishlist</Text>
      </TouchableOpacity>

      {/* Scrollbare content */}
      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingTop: 80 }}>

        <Text style={styles.title}>Onze Producten</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Zoek een model..."
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <View style={styles.pickerContainer}>
          <Picker selectedValue={selectedCategory} onValueChange={setSelectedCategory} style={styles.picker}>
            <Picker.Item label="Alle categorieën" value="" />
            {[...new Set(products.map((p) => p.category))].map((category) => (
              <Picker.Item key={category} label={category} value={category} />
            ))}
          </Picker>
        </View>

        <View style={styles.pickerContainer}>
          <Picker selectedValue={sortOption} onValueChange={setSortOption} style={styles.picker}>
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
              onToggleWishlist={() => toggleWishlist(product)}
              isInWishlist={wishlist.some((item) => item.id === product.id)}
            />
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91c98c',
    paddingLeft: 20,
    paddingRight: 20,
  },
  scrollView: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    paddingHorizontal: 10,
  },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 5,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 16,
  },
  wishlistButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ec5c38',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    zIndex: 999,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  badge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },
  badgeText: {
    color: '#ec5c38',
    fontSize: 14,
    fontWeight: 'bold',
  },
  wishlistButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductScreen;
