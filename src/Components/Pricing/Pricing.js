import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const PricingOptions =[
        {id:1, name: 'free', price: 0 , features: [
            'Super battery',
            'Super brightness',
            'super mla display',
            'extea charger',
            '48mp camera',
            'Extra brightness',
            'huge mobile data'
        ]},
        {id:2, name: 'platinum', price: 99.9, features: [
            'Everything on primium',
            'Super brightness',
            'super mla display',
            'extea charger',
            '48mp camera',
            'Extra brightness',
            'huge mobile data'
        ]},
        {id:3, name: 'Primium', price: 19.99, features: [
            'Everthing on platinum',
            'Super brightness',
            'super mla display',
            'extea charger',
            '48mp camera',
            'Extra brightness',
            'huge mobile data'
        ]},
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-400 p-12 text-white '>Best deal of The TOwn</h2>

            
            <div className='grid md:grid-cols-3 gap-3 mt-4 '>
            {
                PricingOptions.map(Option=> <PriceOption
                key={Option.id} Option={Option}>
                </PriceOption>)
            }
        
            </div>
        </div>
    );
};

export default Pricing;