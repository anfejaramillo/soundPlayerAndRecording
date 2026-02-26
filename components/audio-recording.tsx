import { Recording } from '@/constants/recording';
import {
  AudioModule,
  setAudioModeAsync,
  useAudioPlayer,
  useAudioRecorder,
  useAudioRecorderState
} from 'expo-audio';
import { useEffect } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';



export function AudioRecording() {
  const audioRecorder = useAudioRecorder(Recording.RecordingPresets);
  const recorderState = useAudioRecorderState(audioRecorder);
  const player = useAudioPlayer(audioRecorder.uri);

  const record = async () => {
    await audioRecorder.prepareToRecordAsync();
    audioRecorder.record();
  };

  const stopRecording = async () => {
    // The recording will be available on `audioRecorder.uri`.
    await audioRecorder.stop();
  };

  useEffect(() => {
    (async () => {
      const status = await AudioModule.requestRecordingPermissionsAsync();
      if (!status.granted) {
        Alert.alert('Permission to access microphone was denied');
      }

      setAudioModeAsync({
        playsInSilentMode: true,
        allowsRecording: true,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title={recorderState.isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={recorderState.isRecording ? stopRecording : record}
      />
      <Button title="Play Recording" onPress={() => player.play()} />
      {/* <ThemedText id="recordingText">
      </ThemedText> */}
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