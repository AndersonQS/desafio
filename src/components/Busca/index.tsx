import React, { useState } from 'react';

import { Container, Pesquisar } from './styles';

const Busca = ( prop:{changeText:any} ) => {
  const [search, setSearch] = useState('');
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <Container>
      <Pesquisar onSubmit={handleSubmit}>
        <input placeholder="Digite Album or Artist"
          value={search} onChange={event => {
            prop.changeText(event.target.value)
            setSearch(event.target.value)
          }} />
      </Pesquisar>
    </Container>
  );
}

export default Busca;