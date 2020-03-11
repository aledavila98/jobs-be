import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {JobType} from '../models';
import {JobTypeRepository} from '../repositories';

export class JobTypeController {
  constructor(
    @repository(JobTypeRepository)
    public jobTypeRepository : JobTypeRepository,
  ) {}

  @post('/job-types', {
    responses: {
      '200': {
        description: 'JobType model instance',
        content: {'application/json': {schema: getModelSchemaRef(JobType)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JobType, {
            title: 'NewJobType',
            
          }),
        },
      },
    })
    jobType: JobType,
  ): Promise<JobType> {
    return this.jobTypeRepository.create(jobType);
  }

  @get('/job-types/count', {
    responses: {
      '200': {
        description: 'JobType model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(JobType) where?: Where<JobType>,
  ): Promise<Count> {
    return this.jobTypeRepository.count(where);
  }

  @get('/job-types', {
    responses: {
      '200': {
        description: 'Array of JobType model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(JobType, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(JobType) filter?: Filter<JobType>,
  ): Promise<JobType[]> {
    return this.jobTypeRepository.find(filter);
  }

  @patch('/job-types', {
    responses: {
      '200': {
        description: 'JobType PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JobType, {partial: true}),
        },
      },
    })
    jobType: JobType,
    @param.where(JobType) where?: Where<JobType>,
  ): Promise<Count> {
    return this.jobTypeRepository.updateAll(jobType, where);
  }

  @get('/job-types/{id}', {
    responses: {
      '200': {
        description: 'JobType model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(JobType, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(JobType, {exclude: 'where'}) filter?: FilterExcludingWhere<JobType>
  ): Promise<JobType> {
    return this.jobTypeRepository.findById(id, filter);
  }

  @patch('/job-types/{id}', {
    responses: {
      '204': {
        description: 'JobType PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(JobType, {partial: true}),
        },
      },
    })
    jobType: JobType,
  ): Promise<void> {
    await this.jobTypeRepository.updateById(id, jobType);
  }

  @put('/job-types/{id}', {
    responses: {
      '204': {
        description: 'JobType PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() jobType: JobType,
  ): Promise<void> {
    await this.jobTypeRepository.replaceById(id, jobType);
  }

  @del('/job-types/{id}', {
    responses: {
      '204': {
        description: 'JobType DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.jobTypeRepository.deleteById(id);
  }
}
