import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, ScrollView} from 'react-native';
import Categories from '../../components/Categories';
import HeaderTabs from '../../components/HeaderTabs';
import RestaurantItems, {
  localRestaurants,
} from '../../components/RestaurantItems';
import SearchBar from '../../components/SearchBar';

// YELP FUSION
const YELP_API_KEY =
  'amKL3VWawojHMX54Pq9JqOK1gZTayALtM1MGy-hxsXVbHiZZ5ah30pppRjDpeo9uEsNzvnZfOVlUp2lKqHHxeD_T8j85xwPujuapf25izaLtdLdBG9iLq7faY2PYYXYx';
const HomeScreen = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(json =>
        // setRestaurantData(
        //   json.businesses.filter((business) =>
        //     business.transactions.includes(activeTab.toLowerCase())
        //   )
        // )
        setRestaurantData(json.business),
      );
  };
  console.log('DATA: ', restaurantData);

  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <ScrollView showVerticalScrollIndicator={false}>
        <RestaurantItems restaurantData={localRestaurants} />
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
