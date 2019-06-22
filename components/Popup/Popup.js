import React, { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled, { css } from 'styled-components';
import { addRootElement, createElement } from 'lib/generateElement';
import { createPortal } from 'react-dom';

const PopupWrapperStyle = styled.div`
  &.popup-enter {
    opacity: 0;
    transition: opacity .3s;
  }
  &.popup-enter-active {
    opacity: 1;
  }
  &.popup-leave {
    opacity: 1;
    transition: opacity .3s;
  }
  &.popup-leave-active {
    opacity: 0;
  }
`;

const PopupStyle = styled.div`
  & .mask {
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.4);
    text-align: center;
  }
  & .content {
    display: inline-block;
    padding: 20px;
    border-radius: 6px;
    background-color:#fff;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
    text-align: center;
    
    ${props => (props.scrolling ? css`
      position: relative;
      margin: 50px auto 50px;
    ` : css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `)}
  }
`;

const popupContainer = document.getElementById('popup_container');
if (!popupContainer) addRootElement(createElement('popup_container'));

const Popup = ({ show, children, onClickDim, keyPressESC }) => {
  const popupRef = useRef(document.createElement('div'));
  const contentRef = useRef(null);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const popupParent = document.getElementById('popup_container');
    const popupElement = popupRef.current;
    popupParent.appendChild(popupElement);

    return () => {
      popupElement.remove();
    };
  }, []);

  useEffect(() => {
    const handleKeyPress = e => e.keyCode === 27 && keyPressESC();
    if (keyPressESC) document.addEventListener('keydown', handleKeyPress, false);

    return () => document.removeEventListener('keydown', handleKeyPress, false);
  }, [keyPressESC]);

  useLayoutEffect(() => {
    if (contentRef.current) {
      const windowHeight = window.innerHeight;
      const height = contentRef.current.clientHeight;
      const margin = 50;

      if (windowHeight - margin < height) setHasScroll(true);
    }
  }, [show]);

  const handleClickDim = useCallback((e) => {
    if (e.target.classList.contains('mask') && onClickDim) onClickDim();
  }, [onClickDim]);

  return createPortal(
    <ReactCSSTransitionGroup
      transitionName="popup"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {show && (
        <PopupWrapperStyle>
          <PopupStyle scrolling={hasScroll ? 1 : 0}>
            <div
              className="mask"
              role="presentation"
              onClick={handleClickDim}
              title="닫기"
            >
              <div className="content" ref={contentRef}>
                {children}
              </div>
            </div>
          </PopupStyle>
        </PopupWrapperStyle>
      )}
    </ReactCSSTransitionGroup>,
    popupRef.current,
  );
};

Popup.propTypes = {
  children: PropTypes.node.isRequired,
  show: PropTypes.bool,
  onClickDim: PropTypes.func,
  keyPressESC: PropTypes.func,
};

Popup.defaultProps = {
  show: false,
  onClickDim: null,
  keyPressESC: null,
};

export default Popup;
