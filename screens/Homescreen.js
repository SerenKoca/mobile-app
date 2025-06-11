import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
const HomeScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        <TouchableOpacity
          style={styles.blogButton}
          onPress={() => navigation.navigate("Blog")}
        >
          <Text style={styles.buttonText}>Naar de Blog</Text>
        </TouchableOpacity>

           <TouchableOpacity
          style={styles.blogButton}
          onPress={() => navigation.navigate("Adoption")}
        >
          <Text style={styles.buttonText}>Naar de Adoptie</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.blogButton}
          onPress={() => navigation.navigate("Product")}
        >
          <Text style={styles.buttonText}>Naar de Producten</Text>
        </TouchableOpacity>


        <Text style={styles.title}>Onze Producten</Text>


      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#91c98c', 
    alignItems: 'center', 
    paddingTop: 16 
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginTop: 30, 
    marginBottom: 16, 
    color: 'white' 
  },
  pickerContainer: { 
    backgroundColor: 'white', 
    borderRadius: 8, 
    padding: 5, 
    marginBottom: 20, 
    alignSelf: 'stretch' 
  },
  searchInput: { 
    height: 40, 
    backgroundColor: 'white', 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 20, 
    alignSelf: 'stretch' 
  },
  scrollContent: { 
    flexGrow: 1, 
    paddingBottom: 16 
  },
  cardContainer: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'space-evenly', 
    width: '100%', 
    marginBottom: 16 
  },
  blogButton: { 
    backgroundColor: '#ec5c38', 
    padding: 10, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20 
  },
  wishlistButton: { 
    backgroundColor: '#ffa500', 
    padding: 10, 
    borderRadius: 10, 
    alignItems: 'center', 
    marginBottom: 20 
  },
  buttonText: { 
    fontSize: 16, 
    color: 'white' 
  },
});

export default HomeScreen;
