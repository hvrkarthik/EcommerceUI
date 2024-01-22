import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ShoppingCart: React.FC = () => {
  const [quantity, setQuantity] = useState(5);
  const navigation = useNavigation();


  const handleQuantityChange = (change: number) => {
    setQuantity((prevQuantity) => Math.max(0, prevQuantity + change));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{backgroundColor:'#dcdcdc', height:40, width:40, borderRadius:50}}>
        <Image source={require('../assets/images/back.png')} style={styles.backImage} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Shopping Cart ({quantity})</Text>
      </View>

      {[...Array(5)].map((_, index) => (
        <View key={index} style={styles.productRow}>
          <Image source={require('../assets/images/back.png')} style={styles.productImage} />
          <View style={styles.productDetails}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'column' }}>
                <Text>Product Name</Text>
                <Text>Amount: $9.99</Text>
              </View>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={() => handleQuantityChange(-1)} style={styles.circle}>
                  <Text style={styles.addRemove}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity onPress={() => handleQuantityChange(1)}style={styles.circle}>
                  <Text style={styles.addRemove}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      ))}
      <View style={styles.card}>
       <View style={{flexDirection: 'row', left: 50, position:'absolute', top: 0}}>
       <View style={{flexDirection:'column',alignItems:'center',alignSelf:'center', }}>
          <Text style={styles.name}>Subtotal:</Text>
          <Text style={styles.name}>Delivery:</Text>
          <Text style={styles.name}>Total:</Text>
          </View>
         <View style={{flexDirection:'column',left: 100,  alignItems:'center',alignSelf:'center'}}>
          <Text style={styles.value}>$45.00</Text>
          <Text style={styles.value}>$5.00</Text>
          <Text style={styles.value}>$50.00</Text>
          </View>
          </View>
      <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => console.log('Proceed to Checkout')}
        >
          <Text style={styles.proceedButtonText}>Proceed To Checkout</Text>
        </TouchableOpacity>
      </View>
         

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
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    marginLeft: 10,
  },
  productRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderBottomWidth: 1, 
    borderBottomColor: '#8B4513', 
    paddingBottom: 10, 
  },
  productImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#dcdcdc', 
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    position:'absolute',
    borderRadius: 25,
    bottom: 0,
    alignSelf:'center'
  },
  proceedButton: {
    backgroundColor: '#2a4ba0', 
    borderRadius: 15,
    height: 50,
    width: 350,
    alignSelf:'center',
    justifyContent:'center',
    left: '5%' ,
    top: 50
  },
  proceedButtonText: {
    color: '#ffffff', 
    textAlign: 'center',
  },
  backImage:{
    height: 30,
    width: 30,
    position:'absolute',
    alignSelf:'center',
    marginTop: 5
  },
  circle:{
    backgroundColor: '#dcdcdc', height:30, width:30,borderRadius:50, alignItems:'center', justifyContent: 'center'
  },
  addRemove:{
    fontSize:25, color:'#000000', position:'absolute'
  },
  quantity:{
    fontSize: 20,
    padding: 10
  },
  proceedView:{
    flexDirection:'column'
  },
  name:{
    fontSize:18, paddingVertical: 5
  },
  value:{
    fontSize: 16, fontWeight:'bold', paddingVertical:5
  }
});

export default ShoppingCart;
