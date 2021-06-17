// @flow
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const NotFound = () => (
  <View style={styles.center}>
    <Text>Ничего не найдено</Text>
  </View>
);

export default NotFound;
