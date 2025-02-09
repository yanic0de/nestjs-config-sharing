import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

@ObjectType()
export class FileContent {
  @Field(() => GraphQLJSON)
  data: any;
}
