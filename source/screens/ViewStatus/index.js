import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageView from 'react-native-image-viewing';
import VideoPlayer from 'react-native-video-player';

const ViewStatus = ({navigation, route}) => {
  const {data} = route.params;

  console.log(data);

  return (
    <View style={styles.container}>
      {data.includes('.mp4') ? (
        <VideoPlayer
          autoplay
          video={{
            uri: data,
          }}
          videoWidth={1600}
          videoHeight={900}
        />
      ) : (
        <ImageView
          images={[{uri: data}]}
          imageIndex={0}
          visible={true}
          onRequestClose={() => navigation.goBack()}
        />
      )}
    </View>
  );
};

const styles = new StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
});

export default ViewStatus;
