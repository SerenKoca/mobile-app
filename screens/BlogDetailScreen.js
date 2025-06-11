import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

const BlogDetailScreen = ({ route }) => {
  const { title, date, content, image } = route.params;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const renderHtmlContent = (htmlContent) => {
    // Voor nu gewoon plain text, HTML parsing kan complex zijn in React Native
    return htmlContent.replace(/<[^>]+>/g, '');
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

        <View style={styles.contentBox}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{formatDate(date)}</Text>
          <Text style={styles.content}>{renderHtmlContent(content)}</Text>
        </View>
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  contentBox: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#164723',
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#164723',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: '#164723',
    lineHeight: 24,
  },
});

export default BlogDetailScreen;
