import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Button: React.FC = () => {
  return (<>
<Container>
   <Link to='/'>
  <div >click </div>
  </Link>
  </Container>
  </>);
}

export default Button;