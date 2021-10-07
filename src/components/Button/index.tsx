import React from 'react';
import { Link } from 'react-router-dom';

 import { Container } from './styles';

const Button: React.FC = () => {
  return (<>

   <Link to='/'>
  <div >click </div>
  </Link>
  
  </>);
}

export default Button;