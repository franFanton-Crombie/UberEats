import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import HeaderTabs from '../../components/HeaderTabs';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <HeaderTabs />
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
