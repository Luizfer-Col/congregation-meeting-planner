import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DotSelector from './DotSelector';
interface SelectableItemProps {
  text: string;
  isSelected: boolean;
  onPress: () => void;
  containerStyle?: object;
  textStyle?: object;
  dotSelectorStyle?: object;
}

const SelectableItem: React.FC<SelectableItemProps> = ({
  text,
  isSelected,
  onPress,
  containerStyle = {},
  textStyle = {},
  dotSelectorStyle = {},
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.container,
        containerStyle,
        {backgroundColor: pressed ? '#f0f0f0' : 'white'},
      ]}>
      <DotSelector selected={isSelected} style={dotSelectorStyle} />
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(1.3),
    padding: hp(0.5),
    marginVertical: hp(0.3),
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginLeft: hp(1.8),
    flex: 1,
  },
});

export default SelectableItem;
