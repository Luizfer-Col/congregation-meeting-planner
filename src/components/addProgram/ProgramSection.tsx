import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProgramSection = () => {
  return (
    <View
      style={{
        height: 35,
      }}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text
          style={{
            fontSize: hp(1.6),
            color: 'black',
            fontWeight: '400',
            textAlignVertical: 'center',
          }}>
          VIDA Y MINISTERIO CRISTIANOS
        </Text>
      </View>

      {/* separator */}
      <View
        style={{
          height: hp(0.1),
          backgroundColor: 'gray',
          marginHorizontal: hp(-2),
        }}
      />
    </View>
  );
};

export default ProgramSection;

const styles = StyleSheet.create({});
