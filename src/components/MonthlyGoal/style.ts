import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  background: ${(props) => props.theme.background.card};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const Image = styled.div``;
