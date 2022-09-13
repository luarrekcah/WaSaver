import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import RNFS from 'react-native-fs';

const StatusTab = ({navigation}) => {
  const [files, setFiles] = React.useState([]);
  const [data, setData] = React.useState();

  const getStatuses = async path => {
    RNFS.readDir(
      RNFS.ExternalStorageDirectoryPath +
        '/Android/media/com.whatsapp.w4b/Whatsapp Business/Media/.Statuses',
    ).then(results => {
      const filter = results.filter(item => {
        if (item.path.includes('nomedia')) {
          return;
        }
        return item;
      });
      setFiles(filter);
      const arr = [];
      results.forEach(item => {
        if (item.path.includes('.nomedia')) {
          return;
        }
        arr.push({uri: 'file://' + item.path});
      });
      setData(arr);
    });
  };

  useEffect(() => {
    getStatuses();
  }, []);

  const renderItem = ({item, indexx}) => {
    return (
      <View style={styles.statusContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ViewStatus', {data: item.path});
          }}>
          <Image
            style={styles.imageSize}
            source={{
              uri: 'file://' + item.path,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={files}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusContainer: {
    flex: 1,
    margin: 20,
    width: '50%',
  },
  imageSize: {
    width: 150,
    height: 150,
  },
});

export default StatusTab;
