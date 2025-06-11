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
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.card}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} resizeMode="cover" />
        ) : (
          <View style={[styles.image, styles.placeholder]}>
            <Text style={styles.placeholderText}>Geen foto</Text>
          </View>
        )}
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.animal}>{animal || 'Dier onbekend'}</Text>
      <Text style={styles.age}>{age !== null ? `${age} jaar` : 'Leeftijd onbekend'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginBottom: 8,
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
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  animal: {
    fontSize: 14,
    color: '#444',
    marginTop: 2,
    textAlign: 'center',
  },
  age: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default AdoptionCard;
