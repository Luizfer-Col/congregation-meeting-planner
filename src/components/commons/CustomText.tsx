import {StyleSheet, Text } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface CustomTextProps {
  text: string;
}

const CustomText = ({text}: CustomTextProps) => {
  return (
    <Text maxFontSizeMultiplier={1} style={styles.text}>
      {text}
    </Text>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontSize: hp(2),
  },
});
