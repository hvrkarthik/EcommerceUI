import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductDetails: React.FC = ({ route }) => {
  const navigation = useNavigation();
  const { product } = route.params;

  const handleAddToCart = () => {
    navigation.navigate('ShoppingCart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/images/back.png')} style={styles.backImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/Cart.png')} style={styles.cartImage} />
        </TouchableOpacity>
      </View>

      <Text style={styles.productName}>{product.title}</Text>

      <Text style={styles.reviews}>4.5 (150 reviews)</Text>

      <Image source={{ uri: product.image_url }} style={styles.productImage} />

      <View style={styles.amountOfferContainer}>
        <Text style={styles.amount}>{`$${product.price}/KG`}</Text>
        <View style={styles.offerCard}>
          <Text style={styles.offer}>{`${product.discount}% off`}</Text>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.addText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyNowButton}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.detailsHeading}>Details</Text>

      <Text style={styles.productDetails}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reviews: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 16,
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  amountOfferContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color:'#2a4ba0'
  },
  offer: {
    fontSize: 14,
    alignSelf:'center',
    color: '#ffffff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    justifyContent:'center',
  },
  detailsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productDetails: {
    fontSize: 16,
    color: 'gray',
  },
  backImage:{
    height: 30,
    width: 30
  },
  cartImage:{
    height:25,
    width:25
  },
  offerCard:{
    backgroundColor: '#2a4ba0', 
    borderRadius: 10, 
    marginHorizontal:15,
    height:20,
    width:105
  },
  buyNowText: {
    color:'white',
    height: 100,
    alignSelf:'center',
    borderRadius: 8,
    marginTop: 15
  },
  addText: {
    color:'#2a4ba0',
    height: 100,
    alignSelf:'center',
    borderRadius: 8,
    marginTop: 15
  },
  addToCartButton:{
    height: 50,
    width: 160,
    backgroundColor: '#ffffff',
    borderColor:'#2a4ba0',
    borderWidth: 1,
    borderRadius: 17,
    marginHorizontal: 15
  },
  buyNowButton:{
    height: 50,
    width: 160,
    backgroundColor: '#2a4ba0',
    borderRadius: 17,
    marginHorizontal: 15
  }
});

export default ProductDetails;
