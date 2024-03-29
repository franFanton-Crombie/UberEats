import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type RestaurantInfoProps = {
  name: string;
  image_url: string;
  categories: Array<string>;
  price: string;
  reviews: number;
  rating: number;
};

export const localRestaurants = [
  {
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
];

function RestaurantItems(props) {
  console.log('PROPS: ', props);

  return (
    <View>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          activeOpacity={0.5}
          style={{marginBotton: 30}}
          index={index}>
          <View style={{marginTop: 10, padding: 15, backgroundColor: 'white'}}>
            <RestaurantInfo
              name={restaurant.name}
              image_url={restaurant.image_url}
              categories={restaurant.categories}
              price={restaurant.price}
              reviews={restaurant.reviews}
              rating={restaurant.rating}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
const RestaurantInfo: React.FC<RestaurantInfoProps> = ({
  name,
  image_url,
  categories,
  price,
  reviews,
  rating,
}) => (
  <View>
    <Image
      source={{
        uri: image_url,
      }}
      style={{width: '100%', height: 180}}
    />
    <TouchableOpacity style={{position: 'absolute', right: 20, top: 20}}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>{name}</Text>
        <Text style={{fontSize: 13, color: 'gray'}}>30-45 .min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}>
        <Text>{rating}</Text>
      </View>
    </View>
  </View>
);

export default RestaurantItems;

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingLeft: 20,
  },
});
