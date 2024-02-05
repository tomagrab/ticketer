import { HomeStackParamListType } from '@/lib/Types/HomeStackParamListType/HomeStackParamListType';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

type DetailsScreenProps = NativeStackScreenProps<
  HomeStackParamListType,
  'Details'
>;

export default function DetailsScreen({
  navigation,
  route,
}: DetailsScreenProps) {
  const id = route.params.ticket.id;
  const title = route.params.ticket.title;
  const description = route.params.ticket.description;
  const status = route.params.ticket.status;
  const priority = route.params.ticket.priority;
  const createdAt = route.params.ticket.createdAt;
  const updatedAt = route.params.ticket.updatedAt;

  return (
    <View className="flex-1 items-center justify-center bg-gray-100 p-4">
      <View className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <Text className="text-lg font-bold text-gray-800">{title}</Text>
        <Text className="mt-2 text-gray-600">{description}</Text>
        <View className="mt-4 flex-row justify-between">
          <View className="flex items-center">
            <Text className="text-sm font-semibold text-blue-600">
              Status:{' '}
            </Text>
            <Text className="text-sm text-gray-600">{status}</Text>
          </View>
          <View className="flex items-center">
            <Text className="text-sm font-semibold text-green-600">
              Priority:{' '}
            </Text>
            <Text className="text-sm text-gray-600">{priority}</Text>
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-xs text-gray-500">Created: {createdAt}</Text>
          <Text className="text-xs text-gray-500">Updated: {updatedAt}</Text>
        </View>
      </View>
    </View>
  );
}
