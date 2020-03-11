import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class JobType extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  ID?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<JobType>) {
    super(data);
  }
}

export interface JobTypeRelations {
  // describe navigational properties here
}

export type JobTypeWithRelations = JobType & JobTypeRelations;
