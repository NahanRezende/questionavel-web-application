import { DataSource } from 'typeorm'

export default new DataSource(
  {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'surveys',
    entities: ['src/infra/db/typeorm/entities/*.entity.ts'],
    migrations: ['src/infra/db/typeorm/migrations/*.ts']
  }
)
