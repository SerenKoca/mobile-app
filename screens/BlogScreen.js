import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import BlogCard from '../components/BlogCard'; // pas het pad aan indien nodig

const BlogScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { webflowBlogApiUrl, webflowBlogApiToken } = Constants.expoConfig.extra;

    fetch(webflowBlogApiUrl, {
      headers: {
        Authorization: `Bearer ${webflowBlogApiToken}`,
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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Onze Blog</Text>

        {error ? (
          <Text style={styles.errorText}>
            Er is een fout opgetreden bij het laden van de blogs.
          </Text>
        ) : blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              date={formatDate(blog.date)}
              image={blog.image}
              onPress={() =>
                navigation.navigate("BlogDetail", {
                  title: blog.title,
                  date: blog.date,
                  content: blog.content,
                  image: blog.image,
                })
              }
            />
          ))
        ) : (
          <Text style={styles.noContent}>Geen blogs beschikbaar</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#91c98c',
    paddingTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'white',
    textAlign: 'center',
  },
  scrollContent: {
    paddingBottom: 16,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  noContent: {
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default BlogScreen;
