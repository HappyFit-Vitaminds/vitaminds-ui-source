import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Questions from './../screens/questions.json';
import {useStateValue} from '../stateProvider';
import { theme } from '../core/theme';

const Option = props => {
  const updateScore = Score => {
  
  };
  let correctAnswerIdx = Questions.questions[props.qnIndex].correctIndex;
  // let handleValidation = () => {
  //   if (props.optionIdx === correctAnswerIdx) {
  //     console.log('Correct Answer');
  //     setOptioncolor({borderColor: 'green'});
  //   } else {
  //     console.log('Wrong Answer');
  //     setOptioncolor({borderColor: 'red'});
  //   }
  // };
  return (
    <TouchableOpacity
      onPress={() => {
        props.optionIdx === correctAnswerIdx ? updateScore(1) : updateScore(0);
        if (props.qnIndex + 1 >= Questions.questions.length) {
          console.log('End of Quiz');
          props.navigation.navigate('CongratsScreen');
        } else {
          props.navigation.navigate('QuestionScreen', {
            index: props.qnIndex + 1,
          });
        }
      }}>
      <View style={[styles.Option]}>
        <Text style={styles.OptionText}>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Option;

const styles = StyleSheet.create({
  Option: {
    
    borderWidth: 3,
    margin: 0,
    marginBottom: 20,
    borderRadius: 2,
    minHeight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.secondary,
  },
  OptionText: {
    fontSize: 26,
  },
});
