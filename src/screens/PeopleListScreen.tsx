import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PeopleListScreen = () => {
    const person = {
        'edad': 12,
        'nombre': 'Luis'
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personas</Text>
    </View>
  )
}

export default PeopleListScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color: 'black'
    }
})