import { ConfigModule } from '@nestjs/config';
import { databaseConfig } from './configuration/database.config';

export const ConfigurationModule = ConfigModule.forRoot({
  load: Array.of(databaseConfig),
});
