import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const BlogScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { webflowBlogApiUrl, webflowBlogApiToken } = Constants.expoConfig.extra;

    if (!webflowBlogApiUrl || !webflowBlogApiToken) {
      console.error("❌ Missing Webflow Blog API credentials!");
      setError(true);
      return;
    }

    fetch(webflowBlogApiUrl, {
      headers: {
        Authorization: `Bearer ${webflowBlogApiToken}`,  // hier nieuwe variabele
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.items) {
          const blogs = data.items.map((item) => ({
            title: item.fieldData?.name || 'Geen titel',
            date: item.fieldData?.['publish-date'] || 'Geen datum',
            image: item.fieldData?.['thumbnail-image']?.url || null,
            content: item.fieldData?.['blog-content'] || 'Geen inhoud beschikbaar',
          }));
          setBlogs(blogs);
        } else {
          console.error('Geen items gevonden in de response');
          setError(true);
        }
      })
      .catch((err) => {
        console.error("Fout bij ophalen van data:", err);
        setError(true);
      });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('nl-NL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#91c98c', paddingTop: 16 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16, color: 'white' }}>
          Onze Blog
        </Text>
        {error ? (
          <Text style={{ color: 'red' }}>Er is een fout opgetreden bij het laden van de blogs.</Text>
        ) : blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <TouchableOpacity
              key={index}
              style={styles.blogCard}
              onPress={() =>
                navigation.navigate("BlogDetail", {
                  title: blog.title,
                  date: blog.date,
                  content: blog.content,
                  image: blog.image,
                })
              }
            >
              {blog.image && (
                <Image source={{ uri: blog.image }} style={styles.image} />
              )}
              <Text style={styles.blogTitle}>{blog.title}</Text>
              <Text style={styles.blogDate}>{formatDate(blog.date)}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={{ color: '#333', textAlign: 'center', marginTop: 20 }}>
            Geen blogs beschikbaar
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  blogCard: {
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
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  blogDate: {
    fontSize: 14,
    color: '#666',
  },
});

export default BlogScreen;
