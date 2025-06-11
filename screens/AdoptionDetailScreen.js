import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AdoptionDetailScreen = ({ route }) => {
  const { name, dateOfBirth, image, description } = route.params;

  const calculateAge = (dob) => {
    if (!dob) return null;
    const birthDate = new Date(dob);
    const diffMs = Date.now() - birthDate.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };

  const age = calculateAge(dateOfBirth);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <Text style={styles.placeholderText}>Geen foto beschikbaar</Text>
        </View>
      )}
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.age}>{age !== null ? `${age} jaar` : 'Leeftijd onbekend'}</Text>
      <Text style={styles.description}>{description || 'Geen beschrijving beschikbaar.'}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#91c98c',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 8,
    marginBottom: 16,
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  placeholderText: {
    color: '#999',
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  age: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});

export default AdoptionDetailScreen;
