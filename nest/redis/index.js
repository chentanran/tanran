import { createClient } from 'redis';

const client = createClient({
    socket: {
        host: 'localhost',
        port: 6379,
        
    },
    password: "123456"
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.hSet('guangguang1', '111', 'value111');
await client.hSet('guangguang1', '222', 'value222');
await client.hSet('guangguang1', '333', 'value333');

const value = await client.keys('*');

console.log(value);

await client.disconnect();
