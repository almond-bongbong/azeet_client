import React from 'react';
import { useSelector } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import newlineText from 'lib/newlineText';
import { fadeIn } from 'style/animations';

const AlertStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0,0,0,0.4);
  
  &.alert-enter {
    opacity: 0;
    transition: opacity .2s;
  }
  &.alert-enter-active {
    opacity: 1;
  }
  &.alert-leave {
    opacity: 1;
    transition: opacity .2s;
  }
  &.alert-leave-active {
    opacity: 0;
  }
  
  & .content {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 250px;
    padding: 20px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.2);
    text-align: center;
    transform: translate(-50%, -50%);
  }
  & .message {
    margin-bottom: 25px;
    color: #666;
    font-weight: 700;
    font-size: 16px;
  }
`;

const Alert = () => {
  const { show, message } = useSelector(state => state.alert);

  return (
    <ReactCSSTransitionGroup
      transitionName="alert"
      transitionEnterTimeout={200}
      transitionLeaveTimeout={200}
    >
      {show && (
        <AlertStyle>
          <div className="content">
            <div className="message">
              {newlineText(message)}
            </div>
            <Button inline={false} onClick={window.callbackStore.alert} text="확인" />
          </div>
        </AlertStyle>
      )}
    </ReactCSSTransitionGroup>
  );
};

export default Alert;
