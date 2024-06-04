import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  agentId?: SortOrder;
  clientId?: SortOrder;
  createdAt?: SortOrder;
  datetime?: SortOrder;
  id?: SortOrder;
  propertyId?: SortOrder;
  remarks?: SortOrder;
  updatedAt?: SortOrder;
};
