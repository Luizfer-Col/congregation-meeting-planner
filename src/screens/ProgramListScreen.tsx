import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../components/commons/CustomHeader';
import ProgramSection from '../components/addProgram/ProgramSection';
import MyPrograms from '../components/addProgram/MyPrograms';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Programs} from '../mocks';
import CreateProgram from '../components/addProgram/CreateProgram';


const ProgramListScreen = () => {
  const [programsCreated, setProgramsCreated] = useState(Programs);
  const hasPrograms = programsCreated.length > 0;

  return (
    <View style={styles.container}>

      <CustomHeader title="Programación para las Reuniones" />

      <ProgramSection />

      <CreateProgram />

      <MyPrograms hasPrograms={hasPrograms} programsCreated={programsCreated} />
      
    </View>
  );
};

export default ProgramListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: hp(2),
  },
});
