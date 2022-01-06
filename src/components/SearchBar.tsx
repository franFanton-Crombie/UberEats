import React, {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

// export type HeaderButtonProps = {
//   text: string;
//   textColor: string;
//   backgroundText: string;
//   activeTab: string;
//   setActiveTab: () => void;
// };

function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: 'white',
              padding: 9,
              alignItems: 'center',
              borderRadius: 30,
            }}>
            <AntDesign name="clockcircle" size={11} style={{marginRight: 6}} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

// const HeaderButton: React.FC<HeaderButtonProps> = ({
//   text,
//   textColor,
//   backgroundColor,
//   activeTab,
//   setActiveTab,
// }) => {
//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => setActiveTab(text)}
//         style={[
//           styles.button,
//           {backgroundColor: activeTab === text ? 'black' : 'white'},
//         ]}>
//         <Text
//           style={[
//             styles.text,
//             {color: activeTab === text ? 'white' : 'black'},
//           ]}>
//           {text}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
