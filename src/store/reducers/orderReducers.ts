import { createSlice } from "@reduxjs/toolkit";
import {IOrderDescription} from "../../models/order";


const initialState: IOrderDescription = {
    departure:
        {
            airport: 'Шереметьево',
            city: 'Москва',
            date: '12.05.2055'
        },
    arrival:
        {
            airport: 'Шарль де Голь',
            city: 'Париж',
        },
    amount:
        {
            amount: 9000,
            currency: 'Рубль'
        }

};

const apiSlice = createSlice({
    name: "order",
    initialState,
    reducers: {}
});

export default apiSlice.reducer;
