import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, repository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Job, JobRelations, JobType} from '../models';
import {JobTypeRepository} from './job-type.repository';

export class JobRepository extends DefaultCrudRepository<
  Job,
  typeof Job.prototype.ID,
  JobRelations
  > {

  public readonly jobType: BelongsToAccessor<JobType, typeof Job.prototype.ID>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('JobTypeRepository') protected jobTypeRepositoryGetter: Getter<JobTypeRepository>,
  ) {
    super(Job, dataSource);
    this.jobType = this.createBelongsToAccessorFor('jobType', jobTypeRepositoryGetter);
    this.registerInclusionResolver('jobType', this.jobType.inclusionResolver);
  }
}
