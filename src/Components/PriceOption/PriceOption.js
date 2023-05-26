import React from 'react';
import Feature from '../Features/Feature';


const PriceOption = ({Option}) => {
    const {features} = Option;
    return (
        <div  className=' bg-teal-300 m-3 rounded-md p-3'>
           <div>
            <h3>
                <span className='text-6xl font-extrabold  text-white'>{Option.price}</span>
                <span className='text-xl text-gray-400'>/mon</span>
            </h3>
                <p className='text-3xl my-2'>{Option.name}</p>
           </div>
           
           {
            features.map((feature , idx) => 
            <Feature key={idx} 
            feature ={feature}
            > </Feature>)
           }
           <button className='bg-green-500 font-bold text-white py-2 w-full mt-2 rounded'>Buy now</button>
        </div>
    );
};

export default PriceOption;