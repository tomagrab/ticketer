import { Text, View, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SafeAreaView } from 'react-native';
import { TicketType } from '@/lib/Types/TicketType/TicketType';

type CreateTicketScreenProps = {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  tickets: TicketType[];
  setTickets: (tickets: TicketType[]) => void;
};

const createTicketSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: 'Title must be at least 3 characters long',
    })
    .max(100, {
      message: 'Title must not exceed 100 characters',
    }),
  description: z
    .string()
    .min(10, {
      message: 'Description must be at least 10 characters long',
    })
    .max(500, {
      message: 'Description must not exceed 500 characters',
    }),
  status: z.string().min(3).max(100),
  priority: z.string().min(3).max(100),
});

export default function CreateTicketScreen({
  modalVisible,
  setModalVisible,
  tickets,
  setTickets,
}: CreateTicketScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof createTicketSchema>>({
    resolver: zodResolver(createTicketSchema),
    defaultValues: {
      title: '',
      description: '',
      status: 'open',
      priority: 'low',
    },
  });

  const onSubmit = (data: z.infer<typeof createTicketSchema>) => {
    const newTicket: TicketType = {
      id: String(tickets.length + 1),
      ...data,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };
    setTickets([...tickets, newTicket]);

    if (modalVisible) {
      setModalVisible(false);
    }

    Alert.alert('Success', 'Ticket created successfully');
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <View className="flex-row justify-between px-4">
        <Text className="mb-4 text-xl font-bold">Create Ticket</Text>
        <Button title="Close" onPress={() => setModalVisible(false)} />
      </View>
      <View>
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Title"
              className="mb-2 rounded border border-gray-300 p-2"
            />
          )}
        />
        {errors.title && (
          <Text className="text-red-500">{errors.title.message}</Text>
        )}

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Description"
              className="mb-2 rounded border border-gray-300 p-2"
              multiline
            />
          )}
        />
        {errors.description && (
          <Text className="text-red-500">{errors.description.message}</Text>
        )}

        <Controller
          control={control}
          name="status"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Status"
              className="mb-2 rounded border border-gray-300 p-2"
            />
          )}
        />
        {errors.status && (
          <Text className="text-red-500">{errors.status.message}</Text>
        )}

        <Controller
          control={control}
          name="priority"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Priority"
              className="mb-4 rounded border border-gray-300 p-2"
            />
          )}
        />
        {errors.priority && (
          <Text className="text-red-500">{errors.priority.message}</Text>
        )}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
}
