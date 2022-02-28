import { HttpClient } from '@angular/common/http';

export abstract class ServiceBase<T> {

    protected abstract readonly PATH: string;

    constructor(protected httpClient: HttpClient) { }

}
