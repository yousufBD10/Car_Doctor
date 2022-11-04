import React, { useEffect, useState } from 'react';

const OrdersRow = ({ord,handleDelete,handleUpdate}) => {
    const {serviceName,_id,price,service,status,email} = ord;
        
    const [ordersService,setOrderService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderService(data))
    },[service])


     

    return (
        <tr>
        <th>
          <label>
          <button onClick={()=>handleDelete(_id)} className='btn btn-ghost hover:bg-red-700 '>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
              
               {
                 ordersService?.img &&
                <img src={ordersService?.img} alt="" />
               }
              
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
         $ {price}
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{email}</td>
        <th>
          <button onClick={handleUpdate} className="btn btn-ghost btn-xs">{status ? status : 'Pending'}</button>
        </th>
      </tr>
    );
};

export default OrdersRow;