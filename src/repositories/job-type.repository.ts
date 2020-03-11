import {DefaultCrudRepository} from '@loopback/repository';
import {JobType, JobTypeRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class JobTypeRepository extends DefaultCrudRepository<
  JobType,
  typeof JobType.prototype.ID,
  JobTypeRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(JobType, dataSource);
  }
}
