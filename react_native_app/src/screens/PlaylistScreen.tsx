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
  <Background>
    <AudioPlayer style={{padding:2}}
      src="https://00f74ba44b43515f189402b358fd00ae563812a08b-apidata.googleusercontent.com/download/storage/v1/b/happyfit/o/react_native_app_src_assets_Session%204_003GP5.mp3?jk=AFshE3WKBG774Mm3djgyqZK-MslPaPP1MYZ56sy9-yF_0w0-ah6XxkQBtxW9e4Ju0qGbRmCxCtewzo8cJ7WJdpfgT31-g8868-LZBMS4mZLTIGxTw4ItTq4roVoo1o6UxmNPAoPRJsH7wvMkAjR2-rztWEeo_rEG6yquFd1WJZWWpJWA9Lbw7T01eW3wTXomaptFGxSVc7zN4WCnZYWWoKejeRBG_IH0kM9TISyHJKbvegFQUrP08QxFnsjyH2topCiZpK252nX2igUtIKn7pxJN-ULGG4a_gXHRIL0V0HBqrWMi1y776-nlu-klV_dhZ1D5tZOaWtMDjOjSzYI-8-z7F_imGkL6ti2n4YkkHqUg_IAgLegFtm7yaFF7rUVltQKHAeZp8TOJTuvoHt7n-t-lJVRuk3gpzvGjwOUA-2XO8ymj1GOnuzNoEv2ZLq_ck_DyYZDlrXP1gUhQpChjiDxPVAMrn49_3WQYGqu9U94JpjW1zXCtf7oXetcKY2QsuXubDHODmu4uPDFSimQ86Oy5c5j4_QuUO03uePC66b7sH9e37khp7yLtdjikAlnwXs0ZVavTy82oO4fiPyTlO4PYUnL4N29joY3068H8IVPfEarHdBvC3l1BusTd0ByfBFB50WDjUW46QgLeWnVFEzMGzf4IUSpv6UVZEkE9sRiTtPvrJwjcsuaNuQlrHwFMGZgYi-y0qioTR2BxO0-JYR1-_vkt5YSNhnAAsbQX2jLQFh4Vo-fDJq4V3QLGMbwqyBgDv42i6xG7b7o8IVLsw96q_znux-vxQfYYtf9hqZC2XRFmXqZcMZ-OlsyNC28A3-u_JzOBMV3EgDLkvU0kXc-5R8v1ffiK6IRUm38GOkG2WbrlMRdXAcbgPUee73LnqWPVv4Vrbi86QHIIDqy-Kkkis9_1o7tYE58swAwGl2YxlmkmN-jJ8CG2CRiEVa5DD3KF-YPZh_WKrlcaIctYmsVvKRnrz2acbHRWF83PSHmk1oJW8r6lCwIPM5M6wPI67R9xcskoIoRV0-3yLpq65Gg&isca=1"
      onPlay={e => console.log("onPlay")}
    />
    <Paragraph>
      Listen to the audio and note how you vividly you can imagine the scenario
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
