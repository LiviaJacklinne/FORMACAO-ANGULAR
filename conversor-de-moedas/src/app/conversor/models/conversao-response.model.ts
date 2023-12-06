export class ConversaoResponse {
    constructor (
        public base: string,
        public date: string,
        public rates: any
    ){}
}

// {"base":"USD", "date":"2023-06-22", "rates":{"BRL":4.77}}