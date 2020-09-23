import React, { useState } from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from 'polished';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const CircleButton = styled.button`
  ${props => {
      const mainColor = props.theme.palette.main;
      return css`
          background: ${mainColor};
          &:hover {
            background: ${lighten(0.1, mainColor)};
          }
          &:active {
            background: ${darken(0.1, mainColor)};
          }
      `;
  }}
  
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  
  transition: 0.125s all ease-in;
  ${props => {
      const { highLight } = props.theme.palette;
      return props.open &&
          css`
            background: ${highLight};
            &:hover {
              background: ${lighten(0.1, highLight)};
            }
            &:active {
              background: ${darken(0.1, highLight)};
            }
            transform: translate(-50%, 50%) rotate(45deg);
          `}
      }
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 32px;
  
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  ${props => css`border-top: 1px solid ${props.theme.palette.back};`};
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  ${props => css`border: 1px solid ${props.theme.palette.border};`};
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');

    const onToggle = () => setOpen(!open);
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text,
                done: false
            }
        });
        setText('');
        setOpen(false);
        nextId.current++;
    };

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input
                            autoFocus
                            placeholder="Insert what to do & press ENTER"
                            onChange={onChange}
                            value={text}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd/>
            </CircleButton>
        </>
    );
}

export default React.memo(TodoCreate);