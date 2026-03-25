import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  cancelAnimation,
} from 'react-native-reanimated';
import { useLocalSearchParams } from 'expo-router';
import { useScriptStore } from '../../store/scriptsStore';
import Entypo from '@expo/vector-icons/Entypo';


export default function TeleprompterScreen() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const { id } = useLocalSearchParams();// route id

  const scripts = useScriptStore(state =>state.scripts);
  const script= scripts.find(s=>String(s.id)=== id)

  // Reanimated shared values (engine state)
  const translateY = useSharedValue(0);
  const speed = useSharedValue(50); // pixels per second

  // Animated style
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  })

const handlePlayPause = () => {
  console.log("Play button pressed");
  const distance = contentHeight - screenHeight;
  console.log("Screen Height:", screenHeight);
  console.log("Content Height:", contentHeight);
  console.log("Distance:", distance);
  console.log("Speed:", speed.value);
  const target = -distance;

  if (distance <= 0) return;

  if (isPlaying) {
    cancelAnimation(translateY);
    setIsPlaying(false);
    return;
  }

  // If already at bottom → reset
  if (translateY.value <= target) {
    translateY.value = 0;
  }

  const remainingDistance = Math.abs(target - translateY.value);
  const duration = (remainingDistance / speed) * 1000;

  translateY.value = withTiming(
    target,
    { duration },
    (finished) => {
      if (finished) {
        setIsPlaying(false);
      }
    }
  );

  setIsPlaying(true);
};




if (!script) {
  return (
    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      <Text style={{ color: 'white' }}>Loading script...</Text>
    </View>
  );
}

return (
  <View style={styles.container}>
    <View
      style={styles.viewport}
      onLayout={(e) =>
        setScreenHeight(e.nativeEvent.layout.height)
      }
    >
      <Animated.View
        style={animatedStyle}
        onLayout={(e) =>
          setContentHeight(e.nativeEvent.layout.height)
        }
      >
        <Text style={styles.text}>
          {script.content}
        </Text>
      </Animated.View>
    </View>

    <Pressable style={styles.button} onPress={handlePlayPause}>
      <Entypo name="controller-play" size={25} color="#000000" />
      <Text style={styles.buttonText}>
        {isPlaying ? 'Pause' : 'Play'}
      </Text>
    </Pressable>
  </View>
) ;

} 



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1010105d',
    padding:20
  },
  viewport: {
    flex: 1,
    overflow: 'hidden',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 24,
    lineHeight: 40,
  },
  button: {
    flexDirection:'row',
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius:8,
    justifyContent:'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});