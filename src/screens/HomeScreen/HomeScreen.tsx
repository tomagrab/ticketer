import { HomeStackParamListType } from '@/lib/Types/HomeStackParamListType/HomeStackParamListType';
import { TicketType } from '@/lib/Types/TicketType/TicketType';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button, FlatList, Text, TouchableOpacity, View } from 'react-native';

const ticketsData: TicketType[] = [
  {
    id: '1',
    title: 'First Ticket',
    description: 'This is the first ticket',
    status: 'Open',
    priority: 'High',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '2',
    title: 'Second Ticket',
    description: 'This is the second ticket',
    status: 'Closed',
    priority: 'Low',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '3',
    title: 'Third Ticket',
    description: 'This is the third ticket',
    status: 'Open',
    priority: 'Medium',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '4',
    title: 'Fourth Ticket',
    description: 'This is the fourth ticket',
    status: 'Open',
    priority: 'Low',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '5',
    title: 'Fifth Ticket',
    description: 'This is the fifth ticket',
    status: 'Closed',
    priority: 'High',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '6',
    title: 'Sixth Ticket',
    description: 'This is the sixth ticket',
    status: 'Open',
    priority: 'Low',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '7',
    title: 'Seventh Ticket',
    description: 'This is the seventh ticket',
    status: 'Open',
    priority: 'High',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '8',
    title: 'Eighth Ticket',
    description: 'This is the eighth ticket',
    status: 'Closed',
    priority: 'Medium',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '9',
    title: 'Ninth Ticket',
    description: 'This is the ninth ticket',
    status: 'Open',
    priority: 'Low',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '10',
    title: 'Tenth Ticket',
    description: 'This is the tenth ticket',
    status: 'Open',
    priority: 'High',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '11',
    title: 'Eleventh Ticket',
    description: 'This is the eleventh ticket',
    status: 'Closed',
    priority: 'Low',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
  {
    id: '12',
    title: 'Twelfth Ticket',
    description: 'This is the twelfth ticket',
    status: 'Open',
    priority: 'Medium',
    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  },
];

type HomeScreenProps = NativeStackScreenProps<HomeStackParamListType, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [tickets, setTickets] = useState<TicketType[]>(ticketsData);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row items-center">
        <View></View>
        <Text className="flex-1 text-center text-2xl font-bold">Tickets</Text>
        <Button
          title="Create Ticket"
          onPress={() => navigation.navigate('CreateTicket')}
        />
      </View>
      <View className="flex-1">
        <FlatList
          data={tickets}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="mb-2 rounded-lg bg-white p-4 shadow"
              onPress={() => navigation.navigate('Details', { ticket: item })}
            >
              <Text className="text-lg font-semibold">{item.title}</Text>
              <Text className="text-gray-600">{item.description}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
