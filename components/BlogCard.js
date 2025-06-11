import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BlogCard = ({ title, date, image, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    alignSelf: 'stretch',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default BlogCard;
