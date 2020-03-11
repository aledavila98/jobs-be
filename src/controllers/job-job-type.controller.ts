import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Job, JobType} from '../models';
import {JobRepository} from '../repositories';

export class JobJobTypeController {
  constructor(
    @repository(JobRepository)
    public jobRepository: JobRepository,
  ) {}

  @get('/jobs/{id}/job-type', {
    responses: {
      '200': {
        description: 'JobType belonging to Job',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(JobType)},
          },
        },
      },
    },
  })
  async getJobType(
    @param.path.number('id') id: typeof Job.prototype.ID,
  ): Promise<JobType> {
    return this.jobRepository.jobType(id);
  }
}
