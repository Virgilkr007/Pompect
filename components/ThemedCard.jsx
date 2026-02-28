import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ThemedCard = ({style, ...props}) => {
  return (
    <View style={[
      {
        width:'90%',
        height:150,
        backgroundColor:'#1e2128',
        margin:20,
        
       
      
      },style
      ]} {...props}>
    </View>
  )
}

export default ThemedCard

const styles = StyleSheet.create({})