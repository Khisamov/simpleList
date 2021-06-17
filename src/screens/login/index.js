// @flow
import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {onLoggedIn} from '../../redux/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    textAlign: 'center',
  },
});

type Props = {
  next: () => void,
};

const helloText = `
  Привет!
  Это тестовое задание с выводом списка полученного из сети.
  Используется: redux-saga, react-navigation
  `;

const LoginScreen = ({next}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>{helloText}</Text>
        <Button onPress={next} title="Войти в приложение" />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => ({
  next: () => {
    dispatch(onLoggedIn());
  },
});

export default connect(null, mapDispatchToProps)(LoginScreen);
