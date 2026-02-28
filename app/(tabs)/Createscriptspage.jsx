import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'expo-router'
import { useScriptStore } from '../../store/scriptsStore';
import Themedview from '../../components/Themedview'
import Colors from '../../constants/Colors'
import { scriptListColors } from '../../constants/scriptColors';
import dashBoardcolors from '../../constants/dashboardColors';
import Header from '../../components/header';
import { useFonts, PermanentMarker_400Regular } from '@expo-google-fonts/permanent-marker';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';




const createscriptspage = () => {

  const [fontsLoaded] = useFonts({
    PermanentMarker_400Regular,
  });

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const createScript = useScriptStore(state => state.createScript);
  const router = useRouter();

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) return;

    await createScript(title, content);

    router.back(); // navigate back after save
  };


  return (
    <Themedview>
      <Header style={{
        justifyContent:'space-between',
      }}>
        <View style={{
          display:'flex',
          flexDirection:'row',
          gap:10
        }}>
          <Pressable href=''><Ionicons name="chevron-back" size={24} color="white" /></Pressable>
            <Text style={{
            color:scriptListColors.text.heading,
            fontSize:20,
            fontWeight:600,
            fontFamily: 'PermanentMarker_400Regular'
          }}>SCRIPT EDITOR</Text>
        </View>
        <Pressable style={{
          marginLeft:130,
        }}
        onPress={handleSave}
        >
           <Feather name="save" size={24} color="white" />
        </Pressable>  
        
        <Pressable style={{
          
        }}
        // onPress={handleSave}
        >
          <Feather name="play" size={24} color="white" />
        </Pressable>  
      </Header>
      <View style={
        { flex: 1, 
          padding: 20
          }}>
        <TextInput style={{
          marginTop:20,
          height:50,
          borderBlockColor:dashBoardcolors.border.divider,
          borderRadius:8,
          border:'none',
          backgroundColor:'#42454b',
          paddingLeft:10,
          color:'#f5f5f5'
        }}
          placeholder="Title..."
          placeholderTextColor={scriptListColors.text.meta}
          value={title}
          onChangeText={setTitle}
        />

        <TextInput
          placeholder="Content"
          placeholderTextColor={scriptListColors.text.meta}
          value={content}
          onChangeText={setContent}
          multiline
          style={{ 
            marginTop: 20, 
            flex: 1,
            borderBlockColor:dashBoardcolors.border.divider,
            borderRadius:8,
            marginBottom:20,
            backgroundColor:'#42454b',
            textAlignVertical: 'top',
            padding:10,
            fontSize:16,
            color:'#f5f5f5'
            
          }}
        />

      <Pressable
          onPress={handleSave}
          style={({ pressed }) => ({
          borderRadius: 8,
          paddingVertical: 14,
          alignItems: "center",
          backgroundColor: pressed ? scriptListColors.accent.pressed: scriptListColors.accent.primary,
          })}
        >
        <Text style={{ color: "#fff", fontWeight: "800", fontSize:17}}>
          Save Script
        </Text>
      </Pressable>
      </View>
    </Themedview>

  )
}

export default createscriptspage;

const styles = StyleSheet.create({})