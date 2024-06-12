import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {programasAvailable} from '../../mocks';
import {ProgramAvailable, RootStackParamList, TypeProgram} from '../../types';
import SelectableItem from '../commons/SelectableItem';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

interface CreateProgramProps {
  setProgramSelected: (month: string) => void;
  programSelected: string;
}

const CreateProgram: React.FC<CreateProgramProps> = ({
  setProgramSelected,
  programSelected,
}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [typeProgram, setTypeProgram] = useState<TypeProgram>('Mensual');
  const [downloadProgram, setDownloadProgram] = useState<boolean>(true);
  const [showSelectorprogram, setShowSelectorprogram] =
    useState<boolean>(false);

  const monthlySelected: boolean = typeProgram === 'Mensual';
  const bimonthlySelected: boolean = typeProgram === 'Bimensual';

  const monthString = (array: ProgramAvailable[]): string[] => {
    const arr: string[] = [];
    array.map((p, i) => {
      arr.push(p.month);
    });
    return arr;
  };

  useEffect(() => {
    setProgramSelected(programasAvailable[0].month);
  }, []);

  const toggleSwitch = () =>
    setDownloadProgram(previousState => !downloadProgram);

  return (
    <>
      {/* title */}
      <Text
        style={{
          fontSize: hp(2),
          color: 'black',
          fontWeight: '600',
          marginBottom: hp(2),
        }}>
        Selecciona el mes
      </Text>

      <View style={styles.divider} />

      {/* Month Selector */}
      {programasAvailable.map((item, index) => (
        <SelectableItem
          key={index}
          text={item.month}
          isSelected={item.month === programSelected}
          onPress={() => {
            setProgramSelected(item.month);
          }}
          dotSelectorStyle={{marginRight: 10}}
        />
      ))}

      {/* Check Downloader */}
      {/* <ToggleSwitch
        value={downloadProgram}
        onValueChange={toggleSwitch}
        label="Descargar Asignaciones"
      /> */}

      {/* typeProgramSelector */}

      {/* <View>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: '#EBEBEC',
          }}>
          <TouchableOpacity
            onPress={() => setTypeProgram('Mensual')}
            style={{
              flex: 1,
              padding: hp(1),
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: hp(1.7)}}>Mensual</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTypeProgram('Bimensual')}
            style={{
              flex: 1,
              padding: hp(1),
              alignItems: 'center',
            }}>
            <Text style={{color: 'black', fontSize: hp(1.7)}}>Bimensual</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: hp(0.4),
            backgroundColor: 'red',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: monthlySelected ? '#597476' : '#EBEBEC',
            }}></View>
          <View
            style={{
              flex: 1,
              backgroundColor: bimonthlySelected ? '#597476' : '#EBEBEC',
            }}></View>
        </View>
      </View> */}

      {/* ProgramSelector */}
      {/* <View style={{flexDirection: 'row'}}> */}
      {/* Selector */}
      {/* <View
          style={{
            flex: 2,
            marginRight: hp(1),
            zIndex: 1,
          }}>
          <DropDown
            isOpen={showSelectorprogram}
            openClose={status => setShowSelectorprogram(status)}
            selectOption={option => setProgramSelected(option)}
            valueDefault={programSelected}
            placeholder={null}
            array={monthString(programasAvailable)}
          />
        </View> */}

      {/* ButtonStart */}
      {/* <TouchableOpacity
          onPress={() => navigation.navigate('NewWeekScreen')}
          style={{
            paddingVertical: hp(1),
            backgroundColor: '#597476',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            flex: 1,
            borderWidth: hp(0.08),
            borderColor: '#597476',
          }}>
          <Text
            style={{
              fontSize: hp(1.7),
              fontWeight: 'bold',
              textAlign: 'center',
              textAlignVertical: 'center',
            }}>
            Comenzar
          </Text>
        </TouchableOpacity> */}
      {/* </View> */}
    </>
  );
};

export default CreateProgram;

const styles = StyleSheet.create({
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#f1f1f1',
  },
});
