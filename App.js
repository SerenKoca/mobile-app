import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./screens/Homescreen";
import BlogScreen from "./screens/BlogScreen"; 
import ProductDetail from "./screens/ProductDetail";
import BlogDetailScreen from "./screens/BlogDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
