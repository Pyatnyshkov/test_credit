interface IObjectKeys {
    [key: string]: any;
}


export interface IOrderDescription extends IObjectKeys{
    departure?: IDeparture
    arrival?: IArrival
    amount?: IAmount
    timeout?: ITimeout
}

interface IDeparture {
    airport: string,
    city: string,
    date: number | string
}

interface IArrival {
    airport: string | number
    city: string
}


interface IAmount {
    amount: number | undefined
    currency: string | undefined
}

interface ITimeout {
    timeout: number
}