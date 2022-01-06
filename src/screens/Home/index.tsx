import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import HeaderTabs from '../../components/HeaderTabs';
import SearchBar from '../../components/SearchBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <HeaderTabs />
        <SearchBar />
      </View>
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
