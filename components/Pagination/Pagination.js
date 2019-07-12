import React, { useMemo } from 'react';
import range from 'lodash/range';
import takeWhile from 'lodash/takeWhile';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { blue } from 'style/mixin';
import { Icon } from 'antd';

const PaginationStyle = styled.div`
  display: block;
  color: #888;
  font-size: 0;
  text-align: center;
  .arrow {
    padding: 6px 0 4px;
    color: #999;
    vertical-align: middle;
    i {
      display: block;
      font-size: 13px;
    }
  }
  .numbers {
    display: inline-block;
    margin: 0 10px;
    font-size: 14px;
    vertical-align: middle;
  }
  button {
    display: inline-block;
    width: 30px;
    height: 30px;
    padding: 5px 0;
    border: 0;
    outline: 0;
    background: #fff;
    cursor: pointer;
    text-align: center;
    &:hover {
      background-color: #f2f2f2;
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
  const pageCount = Math.ceil(total / displayItem) || 1;
  const displayStartPage = Math.floor((current - 1) / displayPage) * displayPage + 1;
  const displayEndPage = displayStartPage + displayPage - 1;
  const prevPage = displayStartPage > 1 ? displayStartPage - 1 : 1;
  const nextPage = displayEndPage < pageCount ? displayEndPage + 1 : pageCount;
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
      <button title="첫 페이지로 이동" type="button" className="arrow" onClick={() => onChange(1)}>
        <Icon type="vertical-right" />
      </button>
      <button title={`${prevPage} 페이지로 이동`} type="button" className="arrow" onClick={() => onChange(prevPage)}>
        <Icon type="left" />
      </button>
      <div className="numbers">{numbers}</div>
      <button title={`${nextPage} 페이지로 이동`} type="button" className="arrow" onClick={() => onChange(nextPage)}>
        <Icon type="right" />
      </button>
      <button title="마지막 페이지로 이동" type="button" className="arrow" onClick={() => onChange(pageCount)}>
        <Icon type="vertical-left" />
      </button>
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
