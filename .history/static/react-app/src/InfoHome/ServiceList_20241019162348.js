import React from 'react';

const ServiceList = ({ services }) => {
  return (
    <ul className="fs-4">
      {services.map((service, idx) => (
        <li key={idx}>{service}</li>
      ))}
    </ul>
  );
};

export default ServiceList;
