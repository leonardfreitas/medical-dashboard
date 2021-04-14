import styled from 'styled-components';

import ornamentProfileImg from '../../assets/img/ornament-profile.svg';

export const Container = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 26.6rem;
  background: var(--dark);
  padding: 3rem 2.5rem 1.5rem 2.5rem;

  overflow-y: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #c9c9c9;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--background);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--shape);
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.2rem;

  h2 {
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--white);
  }

  a {
    text-decoration: none;
    padding: 0.75rem;
    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 1.3rem;
      height: 1.3rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;

export const Ornament = styled.div`
  background: url(${ornamentProfileImg}) no-repeat center;
  width: 100%;
  height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-top: 3rem;
    margin-left: 0.5rem;
  }

  h2 {
    margin-top: 1rem;
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--white);
  }
`;

export const Patients = styled.div`
  width: 100%;
  margin-top: 4rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      margin-top: 1rem;
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--white);
    }

    a {
      text-decoration: none;
      color: #6266f4;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const Patient = styled.div`
  padding: 2rem 0 0.2rem 0;

  display: flex;

  img {
    margin-right: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    strong {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
      color: #a3a9b7;
    }
  }
`;

export const Chart = styled.div`
  margin-top: 2.7rem;

  h3 {
    margin-top: 1rem;
    margin-bottom: 1.3rem;
    font-weight: 600;
    font-size: 1.1rem;
    color: var(--white);
  }

  div {
    width: 100%;
    height: 18.5rem;
    border-radius: 2.5rem;
    background: #6266f4;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
