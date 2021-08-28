import styled from 'styled-components';

export const Main = styled.main`
	min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
	width: 90vw;
  margin: 5rem 0;
  max-width: var(--fixed-width);
  background: var(--clr-white);
  border-radius: var(--radius);
  padding: 1.5rem 2rem;
  box-shadow: var(--dark-shadow);

	h3 {
		font-weight: normal;
		text-transform: none;
		margin-bottom: 2rem;
	}

	button {
		color: var(--clr-white);
		display: block;
		width: 100%;
		border-color: transparent;
		background: var(--clr-pink);
		margin: 2rem auto 0 auto;
		text-transform: capitalize;
		font-size: 1.2rem;
		padding: 0.5rem 0;
		letter-spacing: var(--spacing);
		border-radius: var(--radius);
		outline: 1px solid rgba(242, 138, 178, 0.8);
		cursor: pointer;
	}
`;

export const Article = styled.article`
	display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  margin-bottom: 1.5rem;
  align-items: center;

	img {
		width: 75px;
		height: 75px;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: var(--light-shadow);
	}

	h4 {
		margin-bottom: 0.35rem;
	}

	p {
		margin-bottom: 0;
	}
`;