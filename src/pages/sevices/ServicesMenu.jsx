import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesData } from './servicesData';

const ServicesMenu = () => {
  const location = useLocation();

  return (
    <li>
      <a href="#">Services <i className="fa-solid fa-angle-down"></i></a>
      <ul className="dropdown-padding">
        {servicesData.map((service) => (
          <li key={service.id}>
            <Link 
              to={`/services/${service.id}`} 
              className={location.pathname === `/services/${service.id}` ? 'active' : ''}
            >
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ServicesMenu;