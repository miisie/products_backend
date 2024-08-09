import { Module } from '@nestjs/common';
import * as redis from 'redis';
import * as dotenv from 'dotenv';
import { REDIS_CLIENT } from '../../Commons/Constants/constants';
dotenv.config();

@Module({
  providers: [
    {
      provide: REDIS_CLIENT,
      useFactory: async () => {
        const client = redis.createClient({
          socket: {
            host: process.env.REDIS_HOST,
            port: Number(process.env.REDIS_PORT),
          },
          password: process.env.REDIS_PASSWORD,
        });

        client.on('error', (err) => {
          console.error('Redis client error:', err);
        });

        // Wait for the client to connect
        try {
          await client.connect();
          console.log('Connected to Redis!')
          return client;
        } catch {
          console.log('Failed to connect Redis')
        }

      },
    },
  ],
  exports: [REDIS_CLIENT],
})
export class RedisModule {}
