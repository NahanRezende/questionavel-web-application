import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config()

export default new DataSource(
  {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'trabalhobd',
    entities: ['src/infra/db/typeorm/entities/*.entity.ts'],
    migrations: ['src/infra/db/typeorm/migrations/*.ts']
  }
)
