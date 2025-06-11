import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AdoptionCard = ({ name, animal, dateOfBirth, image, onPress }) => {
  const calculateAge = (dob) => {
    if (!dob) return null;
    const birthDate = new Date(dob);
    const diffMs = Date.now() - birthDate.getTime();
    const ageDt = new Date(diffMs);
    return Math.abs(ageDt.getUTCFullYear() - 1970);
  };

  const age = calculateAge(dateOfBirth);

  return (
    <View style={styles.card}>
      <ImageContainer image={image} />

      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.animal}>{animal || 'Dier onbekend'}</Text>
        <Text style={styles.age}>{age !== null ? `${age} jaar` : 'Leeftijd onbekend'}</Text>

        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Leren kennen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ImageContainer = ({ image }) => (
  <View style={styles.imageContainer}>
    {image ? (
      <Image style={styles.image} source={{ uri: image }} resizeMode="cover" />
    ) : (
      <View style={[styles.image, styles.placeholder]}>
        <Text style={styles.placeholderText}>Geen foto</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    width: '80%',            // Kaart breedte
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    elevation: 2,
    alignItems: 'center',
    marginHorizontal: 8,     // Zorgt wat ruimte tussen kaarten in de grid
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginRight: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#999',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: 120,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#164723',
  },
  animal: {
    fontSize: 16,
    color: '#164723',
  },
  age: {
    fontSize: 16,
    color: '#164723',
    fontWeight: 'bold',
    marginTop: 2,
  },
  button: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#ec5c38',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default AdoptionCard;
