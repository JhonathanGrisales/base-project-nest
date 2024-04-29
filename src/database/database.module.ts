import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { Users } from "../users/entities/users.entity";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get("KATIA_PGHOST"),
        port: configService.get("KATIA_PGPORT"),
        username: configService.get("KATIA_PGUSER"),
        password: configService.get("KATIA_PGPASSWORD"),
        database: configService.get("KATIA_PGDATABASE"),
        entities: [Users],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}
