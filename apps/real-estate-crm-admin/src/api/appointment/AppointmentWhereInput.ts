import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AppointmentWhereInput = {
  agent?: AgentWhereUniqueInput;
  client?: ClientWhereUniqueInput;
  datetime?: DateTimeNullableFilter;
  id?: StringFilter;
  property?: PropertyWhereUniqueInput;
  remarks?: StringNullableFilter;
};
