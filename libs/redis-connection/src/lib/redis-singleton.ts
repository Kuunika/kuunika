
import * as redis from 'redis';

export class RedisSingleton {
    private static redisStoreInstance: redis.RedisClient;

    private constructor() { }

    static getInstance(port = 6379, host = '0.0.0.0'): redis.RedisClient {
        if (!RedisSingleton.redisStoreInstance) {
            RedisSingleton.redisStoreInstance = redis.createClient(port, host);
            
            RedisSingleton.redisStoreInstance.on('connect', () => console.log('Connection to Redis is successful'));
            this.redisStoreInstance.on('error', (err)=> {
                console.log('Redis is OFFLINE, now using appropriate contingencies');
            });
        }
        
        return RedisSingleton.redisStoreInstance;
    }

    private static async hvals(key: string) {
        return new Promise<string[]>((resolve, reject) => {
            try {
                this.getInstance().hvals(key, (err: Error, reply: string[]) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(reply);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    private static async hget(key: string, field: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
                this.getInstance().hget(key, field, (err: Error, reply: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(reply);
                });
        });
    }

    private static convertCacheResultToType<T>(cacheResultString: string): T {
        return JSON.parse(cacheResultString);
    }

    private static convertCacheResultToArrayOfType<T>(cacheResultStrings: string[]): T[] {
        return cacheResultStrings.map(cacheResult => {
            return this.convertCacheResultToType<T>(cacheResult);
        });
    }

    static async convertHgetToObject<T>(key: string, field: string): Promise<T> {
        return this.convertCacheResultToType<T>(await this.hget(key, field));
    }

    static async convertHvalsToArrayOfObjects<T>(key: string): Promise<T[]> {
        return this.convertCacheResultToArrayOfType<T>(await this.hvals(key));
    }

    static async hsetStoreApiResult(key: string, field: string, value: {} | any[]) {
        return new Promise<number>((resolve, reject)=> {
            try {
                this.getInstance().hset(key, field, JSON.stringify(value), (err: Error, reply: number) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(reply);
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    static async flushAll(){
        this.getInstance().flushall();
    }

}
