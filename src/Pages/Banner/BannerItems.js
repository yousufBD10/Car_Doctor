import React from 'react';

const BannerItems = ({item}) => {
    const {image,id,prev,next} = item;
    return (
        <div id={`slide${id}`} className="carousel-item relative  text-white w-full">
        <div className='carosel-image  '>
        <img src={image} className="w-full rounded-xl" alt=''/>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle">❮</a> 
          <a  href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
        <div className="absolute flex justify-start gap-2 transform -translate-y-1/2 left-5 right-5 top-1/4 left-24">
         <h1 className='text-6xl  font-bold '>Affordabe <br />
         Price for Car <br />
         Servicing</h1>
        </div>
        <div className="absolute flex justify-start gap-2 transform -translate-y-1/2  lg:top-2/4 sm:bottom-1/4 left-24">
         <p className='w-1/2 text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="absolute flex justify-end lg: gap-2 transform -translate-y-1/2  pt-9 sm:bottom-0 lg:top-3/4 left-24">
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
        </div>
      </div> 
    );
};

export default BannerItems;