import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import ButtonGroup from 'components/ButtonGroup/ButtonGroup';
import newlineText from 'lib/newlineText';
import { fadeIn } from 'style/animations';

const ConfirmStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0,0,0,0.4);
  animation: ${fadeIn} .2s ease-in-out;
  
  &.confirm-enter {
    opacity: 0;
    transition: opacity .3s;
  }
  &.confirm-enter-active {
    opacity: 1;
  }
  &.confirm-leave {
    opacity: 1;
    transition: opacity .3s;
  }
  &.confirm-leave-active {
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

const Confirm = () => {
  const handleConfirm = useCallback(() => {
    window.callbackStore.confirm(true);
  }, []);

  const handleCancel = useCallback(() => {
    window.callbackStore.confirm(false);
  }, []);

  const { show, message } = useSelector(state => state.confirm);

  return (
    <ReactCSSTransitionGroup
      transitionName="confirm"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {show && (
        <ConfirmStyle>
          <div className="content">
            <div className="message">
              {newlineText(message)}
            </div>
            <ButtonGroup>
              <Button inline={false} onClick={handleCancel} text="취소" />
              <Button inline={false} onClick={handleConfirm} theme="red" text="확인" />
            </ButtonGroup>
          </div>
        </ConfirmStyle>
      )}
    </ReactCSSTransitionGroup>
  );
};

export default Confirm;
