import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  cancelAnimation,
} from 'react-native-reanimated';



export default function TeleprompterScreen() {
  const [screenHeight, setScreenHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

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
  const distance = contentHeight - screenHeight;
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
            Your teleprompter text goes here...
          </Text>
        </Animated.View>
      </View>

      <Pressable style={styles.button} onPress={handlePlayPause}>
        <Text style={styles.buttonText}>
          {isPlaying ? 'Pause' : 'Play'}
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewport: {
    flex: 1,
    overflow: 'hidden',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 28,
    lineHeight: 40,
  },
  button: {
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});