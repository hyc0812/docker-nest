import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            //host: 'localhost',
            host: 'host.docker.internal',
            //host: 'mysql8',
            port: 3305,
            username: 'root',
            password: 'password',
            database: 'docker_nest',
            autoLoadEntities: true,
            synchronize: true,
          }),
    ]
})
export class DatabaseModule {}
