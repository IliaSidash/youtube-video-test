import React from 'react';
import styled from 'styled-components';
import { Grid, Row } from 'react-flexbox-grid';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

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

  :hover {
    border-color: #c6c6c6;
    background-color: #f0f0f0;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  }
`;

const SearchBarComponent = ({ store }) => {
  const { onSearchBtn, onSearchValue } = store;
  return (
    <SearchBar>
      <Grid>
        <Row>
          <Input placeholder="Введите запрос" onChange={onSearchValue} />
          <Button onClick={onSearchBtn}>Поиск</Button>
        </Row>
      </Grid>
    </SearchBar>
  );
};

SearchBarComponent.propTypes = {
  store: PropTypes.shape({
    onSearchBtn: PropTypes.func,
    onSearchValue: PropTypes.func,
  }).isRequired,
};

export default inject('store')(observer(SearchBarComponent));
