export class EntityBase<T> {
    constructor(
        public count: number,
        public next: boolean,
        public previous: boolean,
        public results: T[],
    ) { }
}
