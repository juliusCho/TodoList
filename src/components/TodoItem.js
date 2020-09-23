import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/all";
import { useTodoDispatch } from "../TodoContext";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  padding-left: 5px;
  ${props => {
      const { highLight, border } = props.theme.palette;
      return css`
          color: ${border};
          &:hover {
            color: ${highLight};
          }
        `}
    }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  ${props => css`border: 1px solid ${props.theme.palette.paleGray};`};
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => {
        const mainColor = props.theme.palette.main;
        return props.done &&
        css`
          border: 1px solid ${mainColor};
          color: ${mainColor};
        `}
    }
`;

const Text = styled.div`
  flex: 1 1 0;
  font-size: 21px;
  color: #495057;
  ${props => 
    props.done &&
    css`
      color: ${props.theme.palette.paleGray};
    `}
`;

function TodoItem({ id, done, text }) {
    const dispatch = useTodoDispatch();
    const onToggle = () => dispatch({type: 'TOGGLE', id});
    const onRemove = () => dispatch({type: 'REMOVE', id});

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove onClick={onRemove}>
                <MdDelete/>
            </Remove>
        </TodoItemBlock>
    );
}

export default React.memo(TodoItem);