import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { WebView } from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}
      >
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const avatarImageUrl =
    'https://pbs.twimg.com/profile_images/1700926578794876928/_WNwKWn5_400x400.jpg';

  const githubUrl = 'https://github.com/TiReni-01';

  const [showWebView, setShowWebView] = useState(false);

  const toggleWebView = () => {
    setShowWebView(!showWebView); // Toggle the showWebView state
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          {/* Circular Avatar with Image from URL */}
          <Avatar
            rounded
            size="xlarge"
            source={{ uri: avatarImageUrl }}
            containerStyle={{ alignSelf: 'center', marginTop: 20 }}
          />

          <Section title="Hello  👋">
            I'm <Text style={styles.highlight}>TiRENI AGBOOLA</Text> by name
          </Section>

          {/* Button to toggle GitHub WebView */}
          <Button
            title={showWebView ? 'Close GitHub' : "Open GitHub"}
            onPress={toggleWebView}
            containerStyle={{ marginTop: 20, alignSelf: 'center' }}
          />

          {/* Conditionally render the WebView based on showWebView state */}
          {showWebView && (
            <WebView
              source={{ uri: githubUrl }}
              style={{ height: 300, marginTop: 20 }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
