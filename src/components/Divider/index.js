// @flow
import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  divider: {
    marginHorizontal: 16,
    height: 1,
    backgroundColor: 'gray',
  },
});

const Divider = () => <View style={styles.divider} />;

export default Divider;
