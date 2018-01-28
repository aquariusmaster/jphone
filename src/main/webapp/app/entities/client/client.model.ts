import { BaseEntity } from './../../shared';

export class Client implements BaseEntity {
    constructor(
        public id?: number,
        public fullName?: string,
        public email?: string,
        public phoneNumber?: string,
    ) {
    }
}
