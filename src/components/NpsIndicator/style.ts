import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 300px;
  background: ${(props) => props.theme.background.card};
  border-radius: 10px;
  color: #fff;
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 3.375rem;
    height: 3.375rem;
  }

  p {
    color: ${(props) => props.theme.text.sucess};
  }
`;
