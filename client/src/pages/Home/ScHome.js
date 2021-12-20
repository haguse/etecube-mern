import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  /* position: relative; */

  .bg {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 500px;
    height: 500px;

    @media screen and (max-width: 768px) {
      width: 350px;
      height: 300px;
    }
  }

  .overview {
    &__username {
      font-size: 1.4rem;
      span {
        font-family: "Yellowtail", cursive;
      }
    }
    &__system {
      margin-top: 2rem;
      font-size: 1.6rem;
      color: #347768;
      /* text-decoration: underline; */
    }
    &__desc {
      font-size: 1.2rem;
    }
    &__statistic  {
      font-size: 4rem;
    }
  }
`;
