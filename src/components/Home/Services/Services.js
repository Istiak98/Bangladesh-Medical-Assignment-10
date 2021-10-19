import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'
const Services = () => {
    const[services,setServices]=useState([])
    useEffect(()=>{
        fetch('./mediData.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    })
    return (
        <div id="services">
             <h4 className="text-primary mt-5">OUR <span className='delux'>DELUX OFFERS</span></h4>
            <div className="service-details">
            {
                services.slice(0,8).map(service=>
                    <ServiceCard 
                    service={service}
                    key={service.id}
                    ></ServiceCard>)
            }
        </div>
        </div>
    );
};

export default Services;