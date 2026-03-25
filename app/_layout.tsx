import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect } from 'react'
import{useScriptStore} from '../store/scriptsStore'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import dashBoardcolors from '../constants/dashboardColors';



const Rootlayout = () => {
  const load= useScriptStore(state => state.load);

  useEffect(()=>{
    load();
  }, [])

  return (
    <>
    <StatusBar barStyle="light-content" />

    <Stack 
      screenOptions={{
        headerShown:false,
        headerStyle: {
        backgroundColor: dashBoardcolors.background.primary,
        } 
      }}
    >
  </Stack>
  </>
  )
}

export default Rootlayout;

const styles = StyleSheet.create({})