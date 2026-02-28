import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import dashBoardcolors from '../constants/dashboardColors'
import fonts from '../constants/Typography'
import typography from '../constants/dashBoardfonts'

const Header = ({style, ...props}) => {
  return (
    <View style={[styles.container, style]}{...props}>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        height:60,
        gap:10,
        borderBottomColor:dashBoardcolors.border.divider,
        borderWidth:1,
        marginTop:40,
        paddingHorizontal:10,
    },
    

})