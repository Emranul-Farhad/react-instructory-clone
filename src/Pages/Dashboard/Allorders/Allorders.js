import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firekey/Firekey';
import Loading from '../../../Loading/Loading';
import Allordersprices from './Allordersprices';



const Allorders = () => {

    const [loading] = useAuthState(auth)
    if (loading) {
        <Loading></Loading>
    }

    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])


    //   calculating price
    const [price, setPrices] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/orders')
            .then(res => res.json())
            .then(data => {
                setPrices(data)
            })
    }, [])

    console.log(price);

    const [totalprice, setTotalprice] = useState(0)
    const [fee, setFee] = useState(0)
    const [courseprice, setPrice] = useState(0)

    // console.log(totalprice, 'get');

    useEffect(() => {
        if (orders.length > 0) {
            let prices = 0;
            let total = 0;
            let fee = 0;
            price.forEach(element => {
                total = +element.total + total;
                fee = +element.fee + fee
                prices = +element.price + prices
            })
            setTotalprice(total)
            setFee(fee)
            setPrice(prices)
            console.log(total, "total");
        }
    }, [price])



    return (
        <div className='bg-[#FbFbFb]'>

            <div className='flex justify-evenly'>
                <h6 className='text-1xl font-bold pt-5' > total Price : <span className='text-[#0076a3] font-extrabold'>{totalprice} </span> </h6>
                <h6 className='text-1xl font-bold pt-5' > total Fee : <span className='text-[#0076a3] font-extrabold' >{fee}</span> </h6>
                <h6 className='text-1xl font-bold pt-5' > total Profit : <span className='text-[#0076a3] font-extrabold' >{courseprice}</span> </h6>
            </div>

            <div>
                <div className='pt-5'>
                    <div class="overflow-x-auto mx-[17%] border-1">
                        <table class="table table-zebra w-full">


                            <thead>
                                <tr>
                                    <th>number</th>
                                    <th>Instructor Name</th>
                                    <th>Courses Name</th>
                                    <th>Price</th>
                                    <th>email</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    orders?.map((courses, index) =>

                                        <tr>
                                            <th> {index + 1} </th>
                                            <td> {courses.name} </td>
                                            <td> {courses.courseName} </td>
                                            <td> {courses.total} </td>
                                            <td> {courses.email}  </td>
                                        </tr>
                                    )
                                }

                            </tbody>


                        </table>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Allorders;