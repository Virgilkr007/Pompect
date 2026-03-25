import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router'
import { useScriptStore } from '../../store/scriptsStore'
import Themedview from '../../components/Themedview'
import { scriptListColors } from '../../constants/scriptColors';
import dashBoardcolors from '../../constants/dashboardColors';
import Header from '../../components/header';
import { useFonts, PermanentMarker_400Regular } from '@expo-google-fonts/permanent-marker';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

const ScriptPage = () => {

  const [fontsLoaded] = useFonts({
    PermanentMarker_400Regular,
  });

  const router = useRouter();
  const { id } = useLocalSearchParams();

  const scripts = useScriptStore(state => state.scripts);
  const createScript = useScriptStore(state => state.createScript);
  const updateScript = useScriptStore(state => state.updateScript);

  const isEditMode = id !== 'new';

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (isEditMode) {
      const existingScript = scripts.find(script => script.id === id);

      if (existingScript) {
        setTitle(existingScript.title);
        setContent(existingScript.content);
      }
    }
  }, [id, scripts]);

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) return;

    if (isEditMode) {
      await updateScript(id, title, content);
    } else {
      await createScript(title, content);
    }

    router.back();
  };

  return (
    <Themedview>
      <Header style={{ justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', gap: 10 }}>
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </Pressable>

          <Text
            style={{
              color: scriptListColors.text.heading,
              fontSize: 20,
              fontWeight: '600',
              fontFamily: 'PermanentMarker_400Regular'
            }}
          >
            {isEditMode ? "EDIT SCRIPT" : "SCRIPT EDITOR"}
          </Text>
        </View>

        <Pressable onPress={handleSave}>
          <Feather name="save" size={24} color="white" />
        </Pressable>
      </Header>

      <View style={{ flex: 1, padding: 20 }}>
        <TextInput
          style={{
            marginTop: 20,
            height: 50,
            borderRadius: 8,
            backgroundColor: '#42454b',
            paddingLeft: 10,
            color:"#ffffffec"
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
            borderRadius: 8,
            marginBottom: 20,
            backgroundColor: '#42454b',
            padding: 10,
            color:"#ffffffec"
          }}
        />

        <Pressable
          onPress={handleSave}
          style={({ pressed }) => ({
            borderRadius: 8,
            paddingVertical: 14,
            alignItems: "center",
            backgroundColor: pressed
              ? scriptListColors.accent.pressed
              : scriptListColors.accent.primary,
          })}
        >
          <Text style={{ color: "#fff", fontWeight: "800", fontSize: 17 }}>
            {isEditMode ? "Update Script" : "Save Script"}
          </Text>
        </Pressable>
      </View>
    </Themedview>
  )
}

export default ScriptPage;

const styles = StyleSheet.create({});