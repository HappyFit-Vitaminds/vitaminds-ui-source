import React, { memo, useEffect, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Card from '../components/Card';
import Button from '../components/Button';
import { View, SectionList, SafeAreaView, Image, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Navigation } from '../types';
import QuizScreen from './QuizScreen';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { theme } from '../core/theme';
import BackButton from '../components/BackButton';


type Props = {
  navigation: Navigation;
};


const PlaylistScreen = ({ navigation }: Props) => (
  <Background >
    <AudioPlayer style={{margin:15}}
      src ="https://storage.googleapis.com/happyfit/react_native_app_src_assets_Session%204_003GP5.mp3"
      onPlay={e => console.log("onPlay")}
    />
    <Paragraph>
      Listen to the audio and note how well you can vividly imagine the scenario
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>Logout</Button>
    <View style={styles.container}>
      
      <StatusBar style="light" />
      <QuizScreen navigation= {navigation} index= {0}/>
    </View>
    <BackButton goBack={() => navigation.navigate('Dashboard')} />
  </Background>

)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
    minHeight:"40px"
  },
});



export default memo(PlaylistScreen);
