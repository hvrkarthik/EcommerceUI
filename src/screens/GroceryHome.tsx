import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

const Tab = createBottomTabNavigator();

const GroceryHome: React.FC = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const data = response.data;

        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid data format received:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const navigateToProductDetails = (product) => {
    navigation.navigate('ProductDetails', { product });
  };

  const renderOfferItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardText}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <View style={styles.header}>
          <Text style={styles.greetingText}>Hey Rahul</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products or store"
            placeholderTextColor="#B3B3B3"
          />
        </View>
        <View style={styles.deliveryInfoContainer}>
    <View style={styles.deliveryContainer}>
      <Text style={styles.deliveryText}>Deliver to</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>Your Address</Text>
      </View>
    </View>

    <View style={styles.deliveryTimeContainer}>
    <View style={styles.deliveryContainer}>
      <Text style={styles.deliveryText}>WITHIN</Text>
      <View style={styles.addressContainer}>
        <Text style={styles.addressText}>1 Hour</Text>
      </View>
    </View>
    </View>
  </View>
</View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.orangeScroll}>
        <View style={styles.card}>
          <Image source={require('../assets/images/offer.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Get flat 50% off on first 3 orders</Text>
        </View>

        <View style={styles.card}>
          <Image source={require('../assets/images/offer.jpg')} style={styles.cardImage} />
          <Text style={styles.cardText}>Get flat 50% off on first 3 orders</Text>
        </View>
      </ScrollView>

      <Text style={styles.recommendedText}>Recommended</Text>
      <ScrollView contentContainerStyle={styles.productGrid} showsVerticalScrollIndicator={false}>
        {products.map((product, index) => (
          <TouchableOpacity
            key={index}
            style={styles.productCard}
            onPress={() => navigateToProductDetails(product)}
          >
            <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
            <Text style={styles.productPrice}>{`$${product.price}`}</Text>
            <Text style={styles.productName}>{product.title}</Text>
            <View style={styles.heartIconContainer}>
              <Image
                source={require('../assets/images/filledheart.png')}
                style={styles.heartImage}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blueBackground: {
    backgroundColor: '#2a4ba0',
    height: 200,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#142d6d',
    borderRadius: 20,
    padding: 8,
    marginLeft: 8,
    color: '#333333',
  },
  orangeScroll: {
    backgroundColor: '#ffffff',
    height: '35 %',
    paddingVertical: 16,
    paddingLeft: 20,
    marginTop: 10,
  },
  card: {
    width: 200,
    marginRight: 16,
    height: 100,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#FFA500',
  },
  cardImage: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
  cardText: {
    padding: 8,
    textAlign: 'center',
    color: '#333333',
  },
  deliveryContainer: {
    marginTop: '5%'
  },
  deliveryText: {
    color: '#ffffff',
    fontSize: 16,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  addressText: {
    color: '#ffffff',
    fontSize: 14,
  },
  deliveryTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 20,
  },
  deliveryTimeText: {
    color: '#000000',
    fontSize: 16,
  },
  recommendedText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  productCard: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
  },
  productImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  productPrice: {
    padding: 8,
    color: '#333333',
  },
  productName: {
    padding: 8,
    fontWeight: 'bold',
    color: '#333333',
  },
  heartIconContainer: {
    position: 'absolute',
    top: 8,
    left: 8,
  },
  heartImage: {
    height: 20,
    width: 20,
  },
  deliveryInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },

});

export default GroceryHome;
