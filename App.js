import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./screens/Homescreen";
import BlogScreen from "./screens/BlogScreen";
import ProductScreen from "./screens/Productscreen";   
import ProductDetail from "./screens/ProductDetail";
import BlogDetailScreen from "./screens/BlogDetailScreen";
import WishlistScreen from "./screens/WishlistScreen";
import AdoptionScreen from "./screens/AdoptionScreen";
import AdoptionDetailScreen from "./screens/AdoptionDetailScreen"; // Zorg ervoor dat dit pad klopt


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
        <Stack.Screen name="Wishlist" component={WishlistScreen} />
        <Stack.Screen name="Adoption" component={AdoptionScreen} />
        <Stack.Screen name="AdoptionDetail" component={AdoptionDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
