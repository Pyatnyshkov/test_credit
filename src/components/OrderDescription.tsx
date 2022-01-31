import React, {FC, useEffect, useState} from 'react';
import {IOrderDescription} from "../models/order";



const OrderDescription: FC<IOrderDescription> = (props) => {
    const {
        departure,
        arrival,
        amount,
        timeout
    } = props


    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const apiData: IOrderDescription = {
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
                currency: 'Рублей'
            }
    };

    useEffect(() => {

        const year = new Date().getFullYear()
        const target = new Date(`01/31/${year} 23:59:59`);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = target.getTime() - now.getTime();
            const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            setHours(h);
            const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            setMinutes(m);
            const s = Math.floor((difference % (1000 * 60)) / 1000);
            setSeconds(s);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div id='middle'>
            <div id="order_desc">
                <div className='block_info'>
                    <span className='order_desc_title'>{apiData.departure?.airport} &#8594; {apiData.arrival?.airport}</span>
                    <span className='order_desc_title'>{apiData.departure?.city} &#8594; {apiData.arrival?.city}</span>
                    <span className='order_desc_title'>{apiData.departure?.date}</span>
                    <span className='order_desc_title amount_title'>Сумма:</span>
                    <span className='order_desc_value'>{apiData.amount?.amount} {apiData.amount?.currency}</span>
                    <div></div>
                </div>
            </div>
            <div id="timer_block">
                <div className="block_info">
                    <span className="order_desc_title">Время на оплату:</span>
                    <span id="timer" className="order_desc_value">{hours}:{minutes}:{seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderDescription;