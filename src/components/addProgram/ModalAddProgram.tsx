import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import {RootStackParamList} from '../../types';
import CustomModal from '../commons/CustomModal';
import CreateProgram from './CreateProgram';

interface ModalAddProgramProps {
  visible: boolean;
  onClose: () => void;
}

const ModalAddProgram = ({visible, onClose}: ModalAddProgramProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

const [programSelected, setProgramSelected] = useState<string>('')
  return (
    <View>
      <CustomModal
        title="Agregar Programa"
        visible={visible}
        onClose={onClose}
        mainButtonText="Comenzar"
        mainButtonDisabled={!programSelected}
        showSecondaryButton
        secondaryButtonText="Cancelar"
        onMainButtonPress={() => {
          navigation.navigate('NewWeekScreen');
          onClose();
        }}>
        <CreateProgram setProgramSelected={setProgramSelected} programSelected={programSelected}/>
      </CustomModal>
    </View>
  );
};

export default ModalAddProgram;

const styles = StyleSheet.create({});
