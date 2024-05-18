import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Program} from '../../types';

interface Props {
  hasPrograms: boolean;
  programsCreated: Program[];
}

const MyPrograms: React.FC<Props> = ({hasPrograms, programsCreated}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis programas</Text>
      <ScrollView>
        {hasPrograms &&
          programsCreated.map((program, index) => (
            <TouchableOpacity key={index} style={styles.itemContainer}>
              <Text style={styles.itemText}>{program.month}</Text>
              <Text style={styles.itemText}>...</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(2),
    paddingTop: hp(2),
  },
  title: {
    fontSize: hp(2),
    fontWeight: '600',
    color: 'black',
    marginBottom: hp(2),
  },
  itemContainer: {
    marginVertical: hp(0.5),
    paddingHorizontal: wp(3),
    paddingVertical: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EBEBEC',
  },
  itemText: {
    color: 'black',
    fontSize: hp(1.6),
    marginHorizontal: hp(1),
  },
});

export default MyPrograms;
