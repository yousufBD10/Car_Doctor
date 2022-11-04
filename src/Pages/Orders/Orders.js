import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import OrdersRow from './OrdersRow';

const Orders = () => {
const {user,logOut} = useContext(AuthContext);

const [order,setOrder] = useState([])


   
    useEffect(()=>{
    fetch(`http://localhost:5000/orders?email=${user?.email}`,{
      headers: {
        authorizaton: `Bearer ${localStorage.getItem("Car_Doctor_token")}`
      }
    })
    .then(res =>{
      if(res.status === 401 || res.status === 403){
        return logOut();
      }
      return res.json();
    
      
    
  })
    .then(data=>{
      setOrder(data)
    })
    },[user?.email,logOut])

    const handleDelete = id =>{
      const proceed = window.confirm("are sure delete this item");
      if(proceed){
          fetch(`http://localhost:5000/orders/${id}`,{
              method:'DELETE'
          })
          .then(res=>res.json())
          .then(data =>{
              console.log(data);
              if(data.deletedCount){
                const remaining = order.filter(odr => odr._id !== id);
                setOrder(remaining);
              }
          })
      }
   }

   const handleUpdate = id =>{
    fetch(`http://localhost:5000/orders/${id}`,{
      method: "PATCH",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({status:'Approved'})
    })
    .then(res=>res.json())
    .then(data =>{
      console.log(data);
      if(data.modifiedCount){
        const remaining = order.filter(odr => odr._id !== id);
        
        const approving = order.find(odr => odr._id === id);
        approving.status= "Approving"
        const newOrders = [approving,...remaining];
        setOrder(newOrders);


      }
    })
   }

    return (
        <div>
            <h2 className='text-center'>your orders: {order.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
 
    <thead>
      <tr>
        <th>
          Delete
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Address</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  
     {
      order.map(ord => <OrdersRow
      key={ord._id}
      ord={ord}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      ></OrdersRow>)
     }
    </tbody>

    
  </table>
</div>
        </div>
    );
};

export default Orders;