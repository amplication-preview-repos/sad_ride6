/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AgentWhereUniqueInput } from "../../agent/base/AgentWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../../property/base/PropertyWhereUniqueInput";

@InputType()
class AppointmentCreateInput {
  @ApiProperty({
    required: false,
    type: () => AgentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AgentWhereUniqueInput)
  @IsOptional()
  @Field(() => AgentWhereUniqueInput, {
    nullable: true,
  })
  agent?: AgentWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  datetime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => PropertyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PropertyWhereUniqueInput)
  @IsOptional()
  @Field(() => PropertyWhereUniqueInput, {
    nullable: true,
  })
  property?: PropertyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  remarks?: string | null;
}

export { AppointmentCreateInput as AppointmentCreateInput };
