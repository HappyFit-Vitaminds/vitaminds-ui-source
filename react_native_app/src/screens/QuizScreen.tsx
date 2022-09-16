import React, { memo, useEffect, useState } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Card from '../components/Card';
import Button from '../components/Button';
import { View, ScrollView, Image, StyleSheet, Text } from 'react-native';
import { Navigation } from '../types';
import Option from '../components/Option';
import Questions from './questions.json';
import { theme } from '../core/theme';
type Props = {
  navigation: Navigation;
};

const QuizScreen = ({ navigation,index }) => {
  return(<Background><View>
    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
      <Text style={styles.questionNo}>
        {index + 1}/{Questions.questions.length}
      </Text>
    </View>
    <Text style={styles.Question}>{Questions.questions[index].question}</Text>
    {Questions.questions[index].answers.map((option, i) => (
      <Option
        value={option}
        navigation={navigation}
        optionIdx={i}
        qnIndex={index}
        key={i}
      />
    ))}
  </View></Background>)

}
const styles = StyleSheet.create({
  questionNo: {
  
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  Question: {
    color: theme.colors.secondary,
  },
  nextButton: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
export default memo(QuizScreen);
