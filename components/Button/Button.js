import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import SimpleLoader from 'components/Loader/SimpleLoader';
import styled, { css } from 'styled-components';
import { red, blue } from 'style/mixin';

const BasicButtonStyle = styled.div`
  display: block;
  
  ${props => props.inline && css`
    display: inline-block;
    width: auto;
  `};

  button, a {
    display: block;
    width: ${props => `${props.width !== 'auto' ? `${props.width}px` : '100%'}`};
    min-width: 80px;
    height: ${props => props.height}px;
    padding: 0 20px;
    border: 1px solid #ddd;
    border-radius: 2px;
    outline: 0;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    line-height: ${props => props.height}px;
    transition: box-shadow .2s;
  
    &:hover {
      box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
    }
    
    &:active {
      box-shadow: 0 0 2px rgba(0,0,0,0.1);
    }
    
    & span {
      position: relative;
    }
    
    ${props => props.theme === 'white' && css`
      background-color: #fff;
      border: 1px solid #ddd;
      color: #666;
    `};
    
    ${props => props.theme === 'gray' && css`
      background-color: #666;
      border: 1px solid #666;
      color: #fff;
    `}
    
    ${props => props.theme === 'red' && css`
      background-color: ${red};
      border: 1px solid ${red};
      color: #fff;
    `};
    
    ${props => props.theme === 'blue' && css`
      background-color: ${blue};
      border: 1px solid ${blue};
      color: #fff;
    `}
  }
`;

const Button = ({
  text, theme, width, height, inline, loading, onClick,
}) => {
  const loaderTheme = useMemo(() => (theme === 'white' ? 'red' : 'white'), [theme]);
  const loaderSize = useMemo(() => height / 2, [height]);

  return (
    <BasicButtonStyle data-testid="button-wrap" theme={theme} width={width} height={height} inline={inline}>
      {loading ? (
        <button type="button" title="로딩중"><SimpleLoader theme={loaderTheme} size={loaderSize} /></button>
      ) : (
        <button type="button" onClick={onClick}><span>{text}</span></button>
      )}
    </BasicButtonStyle>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  inline: PropTypes.bool,
  theme: PropTypes.oneOf(['white', 'gray', 'red', 'blue']),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOf([30, 40, 50]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: '버튼',
  theme: 'white',
  width: 'auto',
  height: 40,
  inline: true,
  loading: false,
  onClick: undefined,
};

export default Button;
