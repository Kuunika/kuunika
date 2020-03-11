
import { Injectable } from '@nestjs/common';
import { DataElement } from '@kuunika/product-master-interfaces';
import { RedisSingleton } from '@kuunika/redis-connection';

@Injectable()
export class DataElementsService {
    async getAllDataElements(): Promise<DataElement[]>{
        return RedisSingleton.convertHvalsToArrayOfObjects<DataElement>('dhis2DataElement')
    }
}
