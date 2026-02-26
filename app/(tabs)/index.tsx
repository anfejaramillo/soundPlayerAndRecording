import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Fonts } from '@/constants/theme';

import { AudioPlayingPlayer } from '@/components/audio-playing-player';
import { AudioRecording } from '@/components/audio-recording';

export default function AudioPlayerScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Recording and Playing Sounds page test
        </ThemedText>
      </ThemedView>
      <ThemedText>
        This page is for testing the recording and playing sounds features of Expo.
      </ThemedText>
      <ThemedView style={styles.stepContainer}>
        <ThemedText >Playing sound:</ThemedText>
        <AudioPlayingPlayer />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText >Recording and playback Steps to test:</ThemedText>
        <AudioRecording />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
