import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MainDrawer from '@/routes/Drawer/Drawer';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { SafeAreaView } from 'react-native-safe-area-context';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import SignInWithOAuth from './screens/SignInWithOAth/SignInWithOAth';

export default function App() {
  return (
    <ClerkProvider
      publishableKey={`pk_test_ZnVubnkta2l3aS0zOC5jbGVyay5hY2NvdW50cy5kZXYk`}
    >
      <NavigationContainer>
        <SafeAreaView>
          <StatusBar style="auto" />
          <SignedIn>
            <MainDrawer />
          </SignedIn>
          <SignedOut>
            <SignInWithOAuth />
          </SignedOut>
        </SafeAreaView>
      </NavigationContainer>
    </ClerkProvider>
  );
}
