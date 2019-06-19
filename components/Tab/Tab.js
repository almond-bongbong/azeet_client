import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { blue } from 'style/mixin';

const TabStyle = styled.div`
  position: relative;
  
  .tab-nav {
    font-size: 0;
    white-space: nowrap;
    
    .nav-item {
      display: inline-block;
      padding: 10px 20px;
      outline: 0;
      border: 0;
      background-color: #fff;
      color: #666;
      font-size: 14px;
      cursor: pointer;
      
      &.active {
        color: ${blue};
      }
    }
  }
`;

const BarStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  height: 2px;
  background-color: ${blue};
  transition: left .3s, width .3s;
  will-change: left,width;
`;

const Tab = ({ items, value, onClick }) => {
  const activeNavEl = useRef(null);
  const [[width, left], setBarStyle] = useState([0, 0]);

  useEffect(() => {
    const barWidth = activeNavEl.current.getBoundingClientRect().width;
    const barLeft = activeNavEl.current.offsetLeft;
    setBarStyle([barWidth, barLeft]);
  }, [value]);

  return (
    <TabStyle>
      <div className="tab-nav">
        {items.map(item => (
          <button
            key={item.value}
            type="button"
            onClick={() => onClick(item.value)}
            className={`nav-item ${value === item.value ? 'active' : ''}`}
            ref={value === item.value ? activeNavEl : undefined}
          >
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <BarStyle width={width} left={left} />
    </TabStyle>
  );
};

Tab.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Tab;
