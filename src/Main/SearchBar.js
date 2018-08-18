import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';

const SearchBar = styled.div`
  padding: 20px 0;

  background-color: #fff;
`;

const Input = styled.input`
  padding: 10px;
  max-width: 640px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px;

  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  border-radius: 0 2px 2px 0;

  cursor: pointer;
`;

const SearchBarComponent = () => (
  <SearchBar>
    <Grid>
      <Row>
        <Input placeholder="Введите запрос" />
        <Button>Поиск</Button>
      </Row>
    </Grid>
  </SearchBar>
);

export default SearchBarComponent;
