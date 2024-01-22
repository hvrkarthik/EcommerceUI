import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroceryHome from '../screens/GroceryHome';
import ProductDetails from '../screens/ProductDetails';
import ShoppingCart from '../screens/ShoppingCart';
import EmptyScreen from '../screens/EmptyScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTabNavigator" headerMode="none">
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen
        name="GroceryHome"
        component={GroceryHome}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={GroceryHome} options={{ headerShown: false }} />
      <Tab.Screen name="Categories" component={EmptyScreen} />
      <Tab.Screen name="Favorites" component={EmptyScreen} />
      <Tab.Screen name="More" component={EmptyScreen} />
    </Tab.Navigator>
  );
};

export default MainStack;
