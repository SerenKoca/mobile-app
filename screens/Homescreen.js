import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function MyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} style={{ width: '100%' }}>

        <View style={styles.imageContainer}>
          <Image
            source={require('../images/cover.jpeg')}
            style={styles.topImage}
            resizeMode="cover"
          />
          <Text style={styles.titleOverlay}>Nieuwe vriendjes</Text>
          <Text style={styles.descOverlay}>
            Op zoek naar een trouwe vriend? We helpen jou het perfecte adoptiedier te vinden. Van schattige kittens tot speelse honden en lieve knaagdieren
          </Text>
        </View>


        <Text style={styles.title}>Ontdek onze app!</Text>


        <View style={styles.card}>
          <View style={styles.rowContent}>
            <Image
              source={require('../images/blog.jpg')}
              style={styles.cardImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Naar de Blog</Text>
              <Text style={styles.cardDescription}>Lees onze laatste artikelen</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => navigation.navigate("Blog")}
          >
            <Text style={styles.buttonText}>Open Blog</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.card}>
          <View style={styles.rowContent}>
            <Image
              source={require('../images/adopt.jpg')}
              style={styles.cardImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Naar de Adoptie</Text>
              <Text style={styles.cardDescription}>Vind jouw nieuwe huisdier</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => navigation.navigate("Adoption")}
          >
            <Text style={styles.buttonText}>Open Adoptie</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.card}>
          <View style={styles.rowContent}>
            <Image
              source={require('../images/toy.jpg')}
              style={styles.cardImage}
            />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Naar de Producten</Text>
              <Text style={styles.cardDescription}>Bekijk onze producten</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => navigation.navigate("Product")}
          >
            <Text style={styles.buttonText}>Open Producten</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
    alignItems: 'center',
  },
  scrollContent: { 
    paddingBottom: 16,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: screenWidth,
    height: 200,
    marginBottom: 20,
  },
  topImage: {
    width: '100%',
    height: '100%',
  },
  titleOverlay: {
    position: 'absolute',
    top: 30,
    left: 10,
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.7)', 
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  descOverlay: {
    position: 'absolute',
    top: 70,
    left: 10,
    width: '60%',
    color: 'white',
    fontSize: 16,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  title: {
    color: '#164723',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  card: {
    width: '90%',
    backgroundColor: '#91c98c',
    borderRadius: 10,
    padding: 15,
    paddingTop: 15,
    marginBottom: 10,
  },
  rowContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  cardDescription: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  cardButton: {
    backgroundColor: '#ec5c38',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
