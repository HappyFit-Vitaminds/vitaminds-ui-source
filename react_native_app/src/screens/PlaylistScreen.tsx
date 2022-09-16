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

type Props = {
  navigation: Navigation;
};


const PlaylistScreen = ({ navigation }: Props) => (
  <Background>
    <AudioPlayer
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
      onPlay={e => console.log("onPlay")}
    />
    <Paragraph>
      Your amazing app starts here. Open you favourite code editor and start
      editing this project.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>Logout</Button>
    <View style={styles.container}>
      
      <StatusBar style="light" />
      <QuizScreen navigation= {navigation} index= {0}/>
    </View>
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
