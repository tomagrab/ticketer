import { HomeStackParamListType } from '@/lib/Types/HomeStackParamListType/HomeStackParamListType';
import { TicketType } from '@/lib/Types/TicketType/TicketType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import {
  Button,
  FlatList,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CreateTicketScreen from '@/screens/CreateTicketScreen/CreateTicketScreen';

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
];

type HomeScreenProps = NativeStackScreenProps<HomeStackParamListType, 'Home'>;

export default function HomeScreen({ navigation, route }: HomeScreenProps) {
  const [tickets, setTickets] = useState<TicketType[]>(ticketsData);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <View className="flex-row items-center">
        <View></View>
        <Text className="flex-1 text-center text-2xl font-bold">Tickets</Text>
        <Button title="Create Ticket" onPress={() => setModalVisible(true)} />
        <Modal animationType="slide" visible={modalVisible}>
          <CreateTicketScreen
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            tickets={tickets}
            setTickets={setTickets}
          />
        </Modal>
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
