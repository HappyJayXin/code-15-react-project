import styled from 'styled-components';

export const Main = styled.main`
  background: var(--clr-purple);
  color: var(--clr-grey-1);

  min-height: 100vh;
  /* using flex because of better browser support */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 90vw;
  margin: 5rem auto;
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 2.5rem 2rem;
  max-width: var(--fixed-width);
  display: grid;
  gap: 1rem 2rem;

  h3 {
    line-height: 1.2;
    font-weight: 500;
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: 250px 1fr;
  }
`;

export const Article = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid var(--clr-grey-special);
  margin-bottom: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h4 {
      text-transform: none;
      line-height: 1.5;
      margin-bottom: 0;
    }
    p {
      color: var(--clr-grey-3);
      margin-bottom: 0;
      margin-top: 0.5rem;
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: var(--clr-grey-special);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--clr-red-special);
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`;
