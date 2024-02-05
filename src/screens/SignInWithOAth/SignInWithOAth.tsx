import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Button, SafeAreaView } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '@/lib/Hookes/UseWarmUpBrowser/UseWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <SafeAreaView>
      <Button title="Sign in with Google" onPress={onPress} />
    </SafeAreaView>
  );
};
export default SignInWithOAuth;
