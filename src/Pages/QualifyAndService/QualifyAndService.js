import React from 'react';
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const QualifyAndService = () => {
    return (
        <div className=' hero my-40 '>
            <div  className='hero min-h-screen  lg:flex'>
            {/* <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row"> */}
                <div className='w-1/2 relative'>
                    <img className='w-4/5 h-full rounded-lg shadow-lg ' src={person} alt="" />
                    <img className='absolute w-3/5 right-5 top-2/4  shadow-2xl border-8 border-t-white border-l-white border  rounded-lg ' src={parts} alt="" />
                </div>

                {/* <div className='relative w-1/2'>
                    <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
                    <img src={parts}  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div> */}

                <div className='w-1/2 shadow-md p-5'>
                    <h3 className='text-orange-600 text-bold'>About Us</h3>
                    <h1 className='text-5xl text-bold'>We are qualified <br /> & of experience <br />
                     in this field</h1>
                     <p>
                     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                     </p>
                     <p className='my-5'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                     </p>
                     <button className="btn  bg-orange-600">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default QualifyAndService;