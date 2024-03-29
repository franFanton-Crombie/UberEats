import React from 'react';
import {View, StyleSheet, Image, Text, ScrollView} from 'react-native';

const items = [
  {
    image: require('../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../assets/images/soft-drink.png'),
    text: 'Soft Drink',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../assets/images/coffee.png'),
    text: 'Coffee',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} style={{alignItems: 'center', marginRight: 30}}>
            <Image
              source={item.image}
              style={{width: 50, height: 40, resizeMode: 'contain'}}
            />
            <Text style={{fontSize: 13, fontWeight: '900'}}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingLeft: 20,
  },
});
