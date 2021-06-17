// @flow
import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Avatar from '../../../components/Avatar';
import Divider from '../../../components/Divider';
import InfoRow from '../../../components/InfoRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

type Props = {
  route: Object,
};

const UserScreen = ({route}: Props) => {
  if (!route.params?.item) {
    return null;
  }
  const {
    id,
    email,
    avatar,
    first_name: name,
    last_name: lastName,
  } = route.params.item;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.avatarContainer}>
          <Avatar uri={avatar} size={80} text={name} />
        </View>
        <InfoRow label={'id'} description={id} />
        <Divider />
        <InfoRow label={'Имя'} description={name} />
        <Divider />
        <InfoRow label={'Фамилия'} description={lastName} />
        <Divider />
        <InfoRow label={'Email'} description={email} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;
