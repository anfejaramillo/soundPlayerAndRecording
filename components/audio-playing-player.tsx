import { useAudioPlayer } from 'expo-audio';
import { Button, StyleSheet, View } from 'react-native';

const audioSource = require('../assets/sounds/example_sound.mp3');


export function AudioPlayingPlayer() {
  const player = useAudioPlayer(audioSource);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={() => player.play()} />
      <Button title="Pause Sound" onPress={() => player.pause()} />
      <Button
        title="Replay Sound"
        onPress={() => {
          player.seekTo(0);
          player.play();
        }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});