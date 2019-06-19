import React, { useMemo } from 'react';
import range from 'lodash/range';
import takeWhile from 'lodash/takeWhile';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { blue } from 'style/mixin';

const PaginationStyle = styled.div`
  display: block;
  color: #888;
  font-size: 0;
  text-align: center;
  
  & .arrow {
    color: #999;
    font-size: 14px;
  }
  
  & .numbers {
    margin: 0 10px;
  }
  
  & button {
    display: inline-block;
    padding: 8px 10px;
    border: 0;
    outline: 0;
    background: #fff;
    font-size: 13px;
    cursor: pointer;
    vertical-align: middle;
    & span {
      position: relative;
    }
    & img {
      display: block;
      width: 13px;
      height: 13px;
      vertical-align: top;
    }
  }
`;

const NumberStyle = styled.button`
  span {
    ${props => props.active && css`
      color: ${blue};
      text-decoration: underline;
    `}
  }
`;

const Pagination = ({
  current, displayItem, displayPage, total, onChange,
}) => {
  const pageCount = useMemo(() => (
    Math.ceil(total / displayItem) || 1
  ), [total, displayItem]);
  const displayStartPage = useMemo(() => (
    Math.floor((current - 1) / displayPage) * displayPage + 1
  ), [current, displayPage]);
  const displayEndPage = useMemo(() => (
    displayStartPage + displayPage - 1
  ), [displayStartPage, displayPage]);
  const prevPage = useMemo(() => (
    displayStartPage > 1 ? displayStartPage - 1 : 1
  ), [displayStartPage]);
  const nextPage = useMemo(() => (
    displayEndPage < pageCount ? displayEndPage + 1 : pageCount
  ), [displayEndPage, pageCount]);
  const numbers = useMemo(() => (
    takeWhile(range(displayStartPage, displayEndPage + 1), n => n <= pageCount)
      .map(i => (
        <NumberStyle
          key={i}
          type="button"
          className="num"
          active={i === current}
          onClick={() => onChange(i)}
        >
          <span>{i}</span>
        </NumberStyle>
      ))), [displayStartPage, displayEndPage, pageCount, current, onChange]);

  return (
    <PaginationStyle>
      <button title="첫 페이지로 이동" type="button" className="arrow" onClick={() => onChange(1)}><i className="fas fa-angle-double-left" /></button>
      <button title={`${prevPage} 페이지로 이동`} type="button" className="arrow" onClick={() => onChange(prevPage)}><i className="fas fa-angle-left" /></button>
      <span className="numbers">{numbers}</span>
      <button title={`${nextPage} 페이지로 이동`} type="button" className="arrow" onClick={() => onChange(nextPage)}><i className="fas fa-angle-right" /></button>
      <button title="마지막 페이지로 이동" type="button" className="arrow" onClick={() => onChange(pageCount)}><i className="fas fa-angle-double-right" /></button>
    </PaginationStyle>
  );
};

Pagination.propTypes = {
  current: PropTypes.number,
  displayItem: PropTypes.number,
  displayPage: PropTypes.number,
  total: PropTypes.number.isRequired,
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  current: 1,
  displayItem: 10,
  displayPage: 5,
  onChange: null,
};

export default Pagination;
