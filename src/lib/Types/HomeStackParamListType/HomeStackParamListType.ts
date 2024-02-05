import { TicketType } from '../TicketType/TicketType';

export type HomeStackParamListType = {
  Home: undefined;
  Details: {
    ticket: TicketType;
  };
  CreateTicket: undefined;
};
