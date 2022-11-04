import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setService] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
      <div>
          <div className='text-center'>
            <p className="text-2xl font-bold text-orange-600 mt-5">Services</p>
            <h1 className="text-5xl font-bold">Our Services Area</h1>
            <p className="w-1/2 mx-auto text-xl my-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>  
           
            {
             services.map(service=> <ServiceCard
             key={service._id}
             service={service}
             ></ServiceCard>)
            }
         </div>

      </div>
        
        
    );
};

export default Services;