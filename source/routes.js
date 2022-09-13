import React from 'react';
import {TouchableOpacity, Linking} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from './screens/Main';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerShown: true,
        }}>
        <Stack.Screen
          name="Main"
          component={Main}
          options={({navigation}) => ({
            headerStyle: {backgroundColor: '#1A1A1A'},
            headerTransparent: false,
            headerTitle: 'WaSaver',
            headerTitleAlign: 'center',
            headerTitleStyle: {color: 'white'},
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL('https://geeknote.devluar.com/ajuda');
                }}>
                <Icon name="help" size={30} color="#fff" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Config');
                }}>
                <Icon name="settings" size={30} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
