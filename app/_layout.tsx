import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useEffect } from 'react'
import{useScriptStore} from '../store/scriptsStore'
import React from 'react'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'
import {Tabs} from 'expo-router'
import dashBoardcolors from '../constants/dashboardColors';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


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
        headerStyle: {
        backgroundColor: dashBoardcolors.background.primary,
        },
        
      }}
    >
    <Stack.Screen
      name="(tabs)"
      options={{
        title: "Library",
        headerShown: false,
      }}
    />
  </Stack>
  </>
  )
}

export default Rootlayout;

const styles = StyleSheet.create({})