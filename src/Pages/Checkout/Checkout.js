import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Checkout = () => {
    const {title,_id,price} = useLoaderData();
    const {user} = useContext(AuthContext);

      const handleOrders = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstname.value} ${form.lastname.value}`;
      const phone = form.phone.value;
        const email = form.email.value;
        const message = form.messages.value;
    

        const order = {
            service:_id,
            serviceName:title,
            price,
            customer:name,
            phone,
             message,
             email
        }

        // post api
         
        fetch('http://localhost:5000/orders',{
            method:"POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data=>{
            if(data.acknowledged){
                form.reset()
                alert('Orders successful')
            }
            console.log(data)
        })
        .catch(err=>console.error(err));


      }

    return (
      <form onSubmit={handleOrders}  className='bg-gray-200 pt-9 sm:pr-6
      sm:pl-6 lg:pr-24 lg:pl-24 '>
          <div className='grid lg:grid-cols-2 gap-8'>
           
           <input type="text" name='firstname' placeholder="First Name" className="input input-bordered w-full " />
           <input type="text" name='lastname' placeholder="Last Name" className="input input-bordered w-full " />
           <input type="number" name='phone' placeholder="Phone" className="input input-bordered w-full " />
           <input type="email" placeholder="Your Email" defaultValue={user?.email} readOnly name='email' className="input input-bordered w-full " />
       </div>
          <div className=' my-8'>
          <textarea  name='messages' className="textarea pt-9 w-full " placeholder="Message"></textarea>
          <button type='submit' className="btn my-9 bg-orange-600 w-full">Order Confirm</button>
          </div>
      </form>
    );
};

export default Checkout;