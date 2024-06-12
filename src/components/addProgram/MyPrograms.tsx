import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Program} from '../../types';
import SvgAddProgramIcon from '../icons/AddIcon';
import ModalAddProgram from './ModalAddProgram';

interface Props {
  hasPrograms: boolean;
  programsCreated: Program[];
}

const MyPrograms: React.FC<Props> = ({hasPrograms, programsCreated}) => {
  const [showModalAddProgram, setShowModalAddProgram] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.title}>Mis programas</Text>
        <Pressable
          onPress={() => setShowModalAddProgram(true)}
          style={({pressed}) => ({
            opacity: pressed ? 0.5 : 1,
          })}>
          <SvgAddProgramIcon />
        </Pressable>
      </View>
      <ScrollView style={{marginTop: hp(2)}}>
        {hasPrograms ? (
          programsCreated.map((program, index) => (
            <TouchableOpacity key={index} style={styles.itemContainer}>
              <Text style={styles.itemText}>{program.month}</Text>
              <Text style={styles.itemText}>...</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={{color: 'black'}}>
            Aún no tienes ningún programa. Pulsa en el + para agregar uno.
          </Text>
        )}
      </ScrollView>

      <ModalAddProgram
        visible={showModalAddProgram}
        onClose={() => setShowModalAddProgram(false)}
      />
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
    fontWeight: '700',
    color: 'black',
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
