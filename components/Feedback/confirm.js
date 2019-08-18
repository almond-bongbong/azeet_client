import React from 'react';
import ReactDOM from 'react-dom';
import { addRootElement, createElement } from 'lib/generateElement';
import Button from 'components/Button/Button';
import styled from 'styled-components';
import newlineText from 'lib/newlineText';
import ButtonGroup from '../ButtonGroup/ButtonGroup';

const confirmContainer = document.getElementById('confirm_container');
if (!confirmContainer) addRootElement(createElement('confirm_container'));

const ConfirmStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: rgba(0,0,0,0.4);
  
  &.confirm-enter {
    opacity: 0;
    transition: opacity .2s;
  }
  &.confirm-enter-active {
    opacity: 1;
  }
  &.confirm-leave {
    opacity: 1;
    transition: opacity .2s;
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

const confirm = message => new Promise((resolve) => {
  const container = document.getElementById('confirm_container');
  const handleConfirm = (flag) => {
    ReactDOM.unmountComponentAtNode(container);
    resolve(flag);
  };

  ReactDOM.render(
    <ConfirmStyle>
      <div className="content">
        <div className="message">
          {newlineText(message)}
        </div>
        <ButtonGroup>
          <Button inline={false} onClick={() => handleConfirm(false)} text="취소" />
          <Button inline={false} onClick={() => handleConfirm(true)} theme="gray" text="확인" />
        </ButtonGroup>
      </div>
    </ConfirmStyle>,
    container,
  );
});

export default confirm;
