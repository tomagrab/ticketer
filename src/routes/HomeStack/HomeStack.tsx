import { HomeStackParamListType } from '@/lib/Types/HomeStackParamListType/HomeStackParamListType';
import CreateTicketScreen from '@/screens/CreateTicketScreen/CreateTicketScreen';
import DetailsScreen from '@/screens/DetailsScreen/DetailsScreen';
import HomeScreen from '@/screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<HomeStackParamListType>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Tickets' }}
      />
      <Stack.Screen
        name="CreateTicket"
        component={CreateTicketScreen}
        options={{ title: 'Create Ticket' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Details' }}
      />
    </Stack.Navigator>
  );
}
