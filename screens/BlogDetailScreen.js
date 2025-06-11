import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const BlogDetailScreen = ({ route }) => {
  const { title, date, content, image } = route.params; // Haal de blogdata op via de route params

  // Functie om de datum te formatteren naar een leesbaar formaat
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Functie om de HTML-tekst om te zetten naar gewone tekst en afbeeldingen
  const renderHtmlContent = (htmlContent) => {
    // Stap 1: Vervang <img> tags door een react-native <Image> component
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const imageMatches = [...htmlContent.matchAll(imgRegex)];

    // Stap 2: Vervang <p> tags en andere HTML tags door tekst en <Image> componenten
    let formattedContent = htmlContent.replace(imgRegex, (match, src) => {
      return `<Image src="${src}" />`;
    });

    // Stap 3: Verwijder de overige HTML tags, zodat je alleen de tekst overhoudt
    formattedContent = formattedContent.replace(/<[^>]+>/g, '');

    // Stap 4: Maak de string klaar om te renderen (bijvoorbeeld door 'Image' tags in een React Native Image component te vervangen)
    return formattedContent;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {image && (
          <Image
            source={{ uri: image }}
            style={styles.image}
          />
        )}

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.date}>{formatDate(date)}</Text>

        <Text style={styles.content}>{renderHtmlContent(content)}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91c98c',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    color: '#ddd',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: 'white',
    lineHeight: 24,
    marginBottom: 20,  // Ruimte aan de onderkant van de tekst
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
});

export default BlogDetailScreen;
