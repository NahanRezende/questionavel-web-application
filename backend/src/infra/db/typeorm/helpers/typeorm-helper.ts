import { DataSource, EntityTarget, Repository } from 'typeorm'
import getDatasource from '../datasource'

class TypeormHelper {
  private datasource = getDatasource()

  changeEnv(env: string): void {
    this.datasource = getDatasource(env)
  }

  async connect (): Promise<void> {
    await this.datasource.initialize()
  }

  async getConnection (): Promise<DataSource> {
    return this.datasource
  }

  async getRepository<E>(entity: EntityTarget<E>): Promise<Repository<E>> {
    return this.datasource.getRepository(entity)
  }

  async disconnect (): Promise<void> {
    if (this.datasource.isInitialized) {
      await this.datasource.destroy()
    }
  }
}

export default new TypeormHelper()
