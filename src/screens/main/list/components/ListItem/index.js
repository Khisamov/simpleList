// @flow
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Avatar from '../../../../../components/Avatar';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    flexDirection: 'row',
  },
  textContainer: {
    paddingLeft: 16,
    flexShrink: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
  },
});

type Props = {
  item: Object,
  onPress: () => void,
};

const ListItem = ({item, onPress}: Props) => {
  const {avatar, first_name: name, last_name: lastName, email} = item;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Avatar uri={avatar} text={name} />
        <View style={styles.textContainer}>
          <Text
            numberOfLines={1}
            style={styles.name}>{`${name} ${lastName}`}</Text>
          <Text numberOfLines={1}>{email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;
