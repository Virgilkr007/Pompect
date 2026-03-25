import { StyleSheet, Text, View ,FlatList, TouchableOpacity, TextInput, Pressable} from 'react-native'
import React from 'react';
import {useRouter} from 'expo-router'
import Themedview from '../../components/Themedview'
import { useScriptStore } from '../../store/scriptsStore'
import ThemedCard from '../../components/ThemedCard'
import { scriptListColors } from '../../constants/scriptColors'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts, PermanentMarker_400Regular } from '@expo-google-fonts/permanent-marker';




const ScriptHub = () => {
  const router= useRouter()

  const [fontsLoaded] = useFonts({
    PermanentMarker_400Regular,
  });

  const handleEdit = async () => {
    if (!title.trim() || !content.trim()) return;

    await updateScript(id, title, content);
    router.back();
  };

  const editscript= useScriptStore(state=>state.updateScript);
  const deleteScript = useScriptStore(state => state.deleteScript);
  const scripts = useScriptStore(state => state.scripts);

  const renderItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderRadius:8}}>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#eee', fontStyle:'italic', fontFamily:'PermanentMarker_400Regular' }}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={{
          color:'#ffffffa1',
          fontSize:14
          }}>
          {item.content}
        </Text>
      </View>
      
      <View style={{
        flexDirection:'row',
        marginTop:20,
        gap:10,
        justifyContent: 'flex-end'
      }}>
        <Pressable 
          onPress={() => {
          console.log("Deleting:", item.id);
          deleteScript(item.id);
          }}
          >
          <Entypo name="trash" size={24} color="#d10823c1" />
        </Pressable>

        <Pressable onPress={() => router.push(`/scripts/${item.id}`)}>
          <FontAwesome name="edit" size={24} color="#f5945c" />
        </Pressable>

        <Pressable
          onPress={() => {
            console.log('Editing script');
            router.push(`/teleprompter/${item.id}`)}}
        >
          <Entypo name="controller-play" size={25} color="#548af2" />
          
        </Pressable>
      </View>

    </View>
  );
  return (
    <Themedview style={{
      justifyContent:'center'
    }}>
      <TextInput style={{width:'90%', margin:10, borderRadius:6, height:40,backgroundColor:'#262a33', paddingLeft:10 }} placeholder='Search..' placeholderTextColor={scriptListColors.text.meta}></TextInput>
      <FlatList
        data={scripts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </Themedview>
  )
}

export default ScriptHub

const styles = StyleSheet.create({})