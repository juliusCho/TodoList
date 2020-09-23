import React from 'react';
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 512px;
  min-height: 100px;
  
  /* Positioning Add Button */
  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  
  /* Set to display at the center of the page */
  margin: 0 auto;
  
  margin-top: 96px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;