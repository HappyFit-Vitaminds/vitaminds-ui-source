import React, { memo,useEffect, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Card from '../components/Card';
import Button from '../components/Button';
import { Navigation } from '../types';
import { View, SectionList,SafeAreaView, Image, StyleSheet,Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';



type Props = {
  navigation: Navigation;
};

let today = new Date();
let todayDate = today.toString().substring(0, 16);

const Dashboard = ({ navigation }: Props) => {
  const ListItem = ({ item }) => {
    return (
      <View>
        <h4 style={styles.item}>{item.text}</h4>
        <Image
          source={{ uri: item.uri, }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
        <Button mode="contained" onPress={_onSectionPressed}> GO</Button>
      </View>
    );
  };
  const _onSectionPressed = () => {
    navigation.navigate('PlaylistScreen');
  };
  return (
    
  <Background>
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <Header>{section.title + "\n(" + todayDate + ")" + "\n\nSession One:"}</Header>
          )}
          renderItem={({ item, section }) => {
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  </Background>)
};
const SECTIONS = [
  {
    title: 'Welcome Back!',
    data: [
      {
        key: '1',
        text: 'Scenerio 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Scenerio 2',
        uri: 'https://picsum.photos/id/10/200',
      },
      {
        key: '3',
        text: 'Scenerio 3',
        uri: 'https://picsum.photos/id/10/200',
      },
      {
        key: '4',
        text: 'Scenerio 4',
        uri: 'https://picsum.photos/id/10/200',
      },
      {
        key: '5',
        text: 'Scenerio 5',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '6',
        text: 'Scenerio 6',
        uri: 'https://picsum.photos/id/10/200',
      },
      {
        key: '12',
        text: 'Scenerio 12',
        uri: 'https://picsum.photos/id/10/200',
      },
    ]}
];  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: '#B5D5A7',
    marginTop: 15,
    marginBottom: 5,
  },
  item: {
    margin: 8,
    fontWeight: '600',
    fontSize: 16,
    color: '#B5D5A7'
  },
  itemPhoto: {
    width: 300,
    height: 150,
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: '#9DC3E6'

  },
  itemText: {
    color: 'rgba(255, 255, 255, 0.5)',
    marginTop: 5,
  },

});


export default memo(Dashboard);
