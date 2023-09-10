import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { useWindowDimensions } from 'react-native';

type Size = {
  width: number;
  height: number;
};

const responsive = 768;

const Home = () => {
  const size: Size = useWindowDimensions();

  const buildContent = (size: Size) => ( // Explicitly define the type for 'size'
    <>
      <Avatar
        size={size.width * 0.18}
        rounded
        source={require('./assets/images/ryan.png')}
        overlayContainerStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
      />
      <View style={{ width: size.width * 0.0427 }} />
      <ScrollView style={{ flex: 1 }}>
        <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
          <Text style={{ fontSize: 20, fontWeight: '400', color: 'rgba(255, 255, 255, 0.7)' }}>
            Mobile Developer (Android and iOS)
          </Text>
          <View style={{ height: size.height * 0.04 }} />
          <Text style={{ fontSize: 40, fontWeight: '700', color: 'white' }}>
            Ryan Egbejule-jalla
          </Text>
          <View style={{ height: size.height * 0.08 }} />
          <Text style={{ fontSize: 18, fontWeight: '400', color: 'white' }}>
            Experienced Flutter Developer and Technical Lead
            with a strong background in developing and deploying
            high-quality mobile applications for Android and iOS.

            Proven expertise in Flutter, Dart, and mobile app architecture and
            skilled in leading development teams and ensuring project success.
            Proficient in Node.js and AWS Lambda for backend development.

            Committed to delivering innovative solutions and
            exceeding client expectations.
          </Text>
        </View>
      </ScrollView>
    </>
  );

  return (
    size.width > responsive
      ? (
        <View style={{ flexDirection: 'row' }}>
          {buildContent(size)}
        </View>
      )
      : (
        <View style={{ paddingHorizontal: 20 }}>
          {buildContent(size)}
        </View>
      )
  );
};

export default Home;
