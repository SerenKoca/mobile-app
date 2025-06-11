import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import AdoptionCard from '../components/AdoptionCard'; // pas pad aan als nodig
import { useNavigation } from '@react-navigation/native';

const AdoptionScreen = () => {
  const [adoptions, setAdoptions] = useState([]);
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const { webflowAdoptionApiUrl, webflowAdoptionApiToken } = Constants.expoConfig.extra;

    if (!webflowAdoptionApiUrl || !webflowAdoptionApiToken) {
      setError(true);
      return;
    }

    fetch(webflowAdoptionApiUrl, {
      headers: {
        Authorization: `Bearer ${webflowAdoptionApiToken}`,
        accept: 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.items) {
          const mapped = data.items.map((item) => ({
            id: item.id,
            name: item.fieldData?.name || 'Naam onbekend',
            animal: item.fieldData?.animal || 'Dier onbekend',
            dateOfBirth: item.fieldData?.['date-of-birth'] || null,
            image: item.fieldData?.image?.url || null,
            description: item.fieldData?.description || '',
          }));

          setAdoptions(mapped);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Er is iets misgegaan bij het laden van adopties.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerTitle}>Onze beschikbare vriendjes</Text>
    <Text style={styles.Subtitle}>Kijk en maak kennis met onze schattige huisdieren die op een nieuw thuis wachten!</Text>
      {adoptions.length === 0 ? (
        <Text style={styles.center}>Geen adopties gevonden.</Text>
      ) : (
        <View style={styles.grid}>
          {adoptions.map((pet) => (
            <AdoptionCard
              key={pet.id}
              name={pet.name}
              animal={pet.animal}
              dateOfBirth={pet.dateOfBirth}
              image={pet.image}
              onPress={() =>
                navigation.navigate('AdoptionDetail', {
                  name: pet.name,
                  animal: pet.animal,
                  dateOfBirth: pet.dateOfBirth,
                  image: pet.image,
                  description: pet.description,
                })
              }
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 40,
    backgroundColor: '#91c98c',
    flexGrow: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    marginTop: 20,
    textAlign: 'center',
  },
  Subtitle: {
    fontSize: 18,
    color: 'white',
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
    textAlign: 'center',
    marginTop: 40,
  },
});

export default AdoptionScreen;
