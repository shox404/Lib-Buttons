import styled from "styled-components";

export const Web = styled.div`
  background: #000;
  color: #fff;
  width: 100%;
  height: 100vh;
  overflow: scroll;
  border: 0.1px solid transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    background: #1e1e1e;
    height: 0;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #3e3e3e;
  }
`;
