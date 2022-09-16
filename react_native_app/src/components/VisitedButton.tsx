import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';


const VisitedButton = ({ mode, style, children, ...props }: Props) => (
    <PaperButton
      style={[
        visited_styles.button,
        mode === 'outlined' && { backgroundColor: '#D293B2' },
        style,
      ]}
      labelStyle={visited_styles.text}
      mode={mode}
      {...props}
    >
      {children}
    </PaperButton>
  );
  


const visited_styles = StyleSheet.create({
    button: {
      width: '100%',
      marginVertical: 10,
      backgroundColor: '#D293B2'
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
    },
  });

  export default memo(VisitedButton);
