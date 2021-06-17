import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// @flow

import ListScreen from '../screens/main/list';
import UserScreen from '../screens/main/user';
import LoginScreen from '../screens/login';

const RootStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const TabStack1 = createStackNavigator();
const TabStack2 = createStackNavigator();

const firstTab = () => (
  <TabStack1.Navigator initialRouteName="list">
    <TabStack1.Screen
      name={'list'}
      component={ListScreen}
      options={{title: 'Список пользователей'}}
    />
    <TabStack1.Screen
      name={'user'}
      component={UserScreen}
      options={{title: 'Пользователь'}}
    />
  </TabStack1.Navigator>
);

const secondTab = () => (
  <TabStack2.Navigator>
    <TabStack2.Screen name={'Ещё возможный таб'} component={() => <View />} />
  </TabStack2.Navigator>
);

const MainScreen = () => (
  <BottomTab.Navigator
    initialRouteName={'firstTab'}
    tabBarOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'rgba(0, 0, 0, 0.6)',
    }}>
    <BottomTab.Screen
      name={'firstTab'}
      component={firstTab}
      options={{
        title: 'Первый таб',
      }}
    />
    <BottomTab.Screen
      name={'secondTab'}
      component={secondTab}
      options={{
        title: 'Второй таб',
      }}
    />
  </BottomTab.Navigator>
);

type Props = {
  isLoggedIn: Boolean,
};

const Navigation = ({isLoggedIn}: Props) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack.Navigator>
          {!isLoggedIn ? (
            <RootStack.Screen
              name={'LoginScreen'}
              component={LoginScreen}
              options={{headerShown: false}}
            />
          ) : (
            <RootStack.Screen
              name={'MainScreen'}
              component={MainScreen}
              options={{headerShown: false}}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(Navigation);
