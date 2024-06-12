import React from 'react';
import { View, StyleProp, ViewStyle, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface DotSelectorProps {
  selected: boolean;
  style?: StyleProp<ViewStyle>;
}

const DotSelector: React.FC<DotSelectorProps> = ({ selected, style }) => {
  return (
    <View style={[styles.container, selected && styles.selected, style]}>
      {selected && <View style={styles.innerCircle} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderWidth: hp(0.1),
    height: hp(2),
    width: hp(2),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    borderColor: '#597476',
  },
  innerCircle: {
    backgroundColor: '#597476',
    height: hp(1.2),
    width: hp(1.2),
    borderRadius: 50,
  },
});

export default DotSelector;
