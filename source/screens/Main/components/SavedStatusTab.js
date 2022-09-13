import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SavedStatusTab = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Salvos</Text>
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});

export default SavedStatusTab;
