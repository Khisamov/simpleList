// @flow
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  constiner: {
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  label: {
    fontSize: 20,
    lineHeight: 22,
    fontWeight: '700',
  },
  description: {
    marginLeft: 16,
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '400',
    flexShrink: 1,
  },
});

type Props = {
  label: String,
  description: String,
};

const InfoRow = ({label, description}: Props) => (
  <View style={styles.constiner}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

export default InfoRow;
