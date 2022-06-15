import { DataSource } from 'typeorm'
import dotenv from 'dotenv'

dotenv.config()

export default function getDatasource(env: string = 'production'): DataSource {
  if (env === 'production') {
    return new DataSource(
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
  }

  return new DataSource(
    {
      name: 'test',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'surveys_test',
      entities: ['src/infra/db/typeorm/entities/*.entity.ts'],
      migrations: ['src/infra/db/typeorm/migrations/*.ts']
    }
  )
}
