// @flow
import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loader = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default Loader;
