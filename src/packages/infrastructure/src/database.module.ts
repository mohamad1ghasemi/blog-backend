import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigurationModule } from './configuration.module';
import { databaseConfig } from './configuration/database.config';
import { ConfigType } from '@nestjs/config';

export const DatabaseModule = TypeOrmModule.forRootAsync({
  imports: [ConfigurationModule],
  inject: [databaseConfig.KEY],
  useFactory(config: ConfigType<typeof databaseConfig>) {
    return {
      type: 'postgres',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      synchronize: false,
      entities: [],
      migrationsRun: true,
      migrationsTableName: 'migrations',
      subscribers: [],
    };
  },
});
