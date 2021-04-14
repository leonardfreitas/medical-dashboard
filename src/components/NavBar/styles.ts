import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  padding: 2rem 3.25rem 2rem 2.25rem;
`;

export const Nav = styled.nav`
  background-color: var(--shape);
  width: 5.7rem;
  height: 100%;
  border-radius: 2rem;
  padding: 5rem 3.2rem 2rem 3.2rem;
  position: relative;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  a {
    margin-bottom: 1rem;
    padding: 0.75rem;
    border-radius: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 2rem;
      height: 2rem;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.4);
    }
  }
`;
