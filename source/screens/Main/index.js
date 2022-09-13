import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import StatusTab from './components/StatusTab';
import SavedStatusTab from './components/SavedStatusTab';

const Tab = createMaterialTopTabNavigator();

const Main = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Status" component={StatusTab} />
      <Tab.Screen name="Salvos" component={SavedStatusTab} />
    </Tab.Navigator>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});

export default Main;
