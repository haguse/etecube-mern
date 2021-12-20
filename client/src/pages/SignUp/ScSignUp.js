import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
  }

  img {
    display: block;
    width: 80%;
    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }
  }
`;

export const Sign = styled.div`
  width: 100%;
`;
