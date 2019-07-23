import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CardStyle } from './Card';
import { clearfix } from '../../style/mixin';

const CardListStyle = styled.div`
  .card-wrap {
    ${clearfix};
    margin: -5px;
  }
  
  ${CardStyle} {
    float: left;
    width: calc(${props => 100 / props.grid}% - 10px);
    margin: 5px;
  }
`;

const CardList = ({ grid, children }) => (
  <CardListStyle grid={grid}>
    <div className="card-wrap">{children}</div>
  </CardListStyle>
);

CardList.propTypes = {
  grid: PropTypes.number,
  children: PropTypes.node,
};

CardList.defaultProps = {
  grid: 2,
  children: undefined,
};

export default CardList;
