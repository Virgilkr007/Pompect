import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Spacer = ({style, ...props}) => {
  return (
    <View style={[styles.spacer, style]}{...props}>
    </View>
  )
}

export default Spacer

const styles = StyleSheet.create({
  spacer: {
    height: 40,
  }
})