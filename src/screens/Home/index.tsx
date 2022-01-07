import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import Categories from '../../components/Categories';
import HeaderTabs from '../../components/HeaderTabs';
import RestaurantItems, {
  localRestaurants,
} from '../../components/RestaurantItems';
import SearchBar from '../../components/SearchBar';

const HomeScreen = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    flex: 1,
  },
  view: {
    backgroundColor: 'white',
    padding: 15,
  },
});
