import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AdoptionDetailScreen = ({ route }) => {
  const { name, animal, dateOfBirth, image, description } = route.params;

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

      <View style={styles.infoBox}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.age}>{age !== null ? `${age} jaar` : 'Leeftijd onbekend'}</Text>
          </View>

          <View style={styles.animalBadge}>
            <Text style={styles.animalText}>{animal || 'Soort onbekend'}</Text>
          </View>
        </View>

        <Text style={styles.description}>{description || 'Geen beschrijving beschikbaar.'}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flex: 1,
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
  infoBox: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',  
    marginBottom: 12,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#164723',
  },
  age: {
    fontSize: 18,
    color: '#164723',
    marginTop: 4,
  },
  animalBadge: {
    backgroundColor: '#ec5c38',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  animalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    fontSize: 18,
    lineHeight: 22,
    color: '#164723',
  },
});

export default AdoptionDetailScreen;
