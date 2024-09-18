import { StatusClient } from '../enums/status-client.enum';
import { ClientInterface } from '../interfaces/client-interface';

export class Client implements ClientInterface {
    id!: number;
    name!: string;
    totalCaHt = 0;
    tva = 20;
    state = StatusClient.INACTIVE;
    comment!: string;
    // Constructor merging the object passed as parameter with the current object.
    constructor(obj?: Partial<Client>) {
        if (obj) {
            Object.assign(this, obj);
        }
    }
}