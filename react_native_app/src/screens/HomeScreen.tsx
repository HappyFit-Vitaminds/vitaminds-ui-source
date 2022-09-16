import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    {/* <Header>VITAMINDS</Header> */}
    <Paragraph>
      The path to a healthier mind.
    </Paragraph>
    <Button mode="outlined" onPress={() => navigation.navigate('LoginScreen')} color = '#B5D5A7' >
      Login
    </Button>
    <Button mode="outlined" onPress={() => navigation.navigate('RegisterScreen')} color = '#B5D5A7'>
      Sign Up
    </Button>
  </Background>
);

export default memo(HomeScreen);
