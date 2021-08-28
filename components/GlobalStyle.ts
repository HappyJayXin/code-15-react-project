import { createGlobalStyle } from 'styled-components'

type StyleProps = {
	bg: string;
}

export const GlobalStyle = createGlobalStyle<StyleProps>`
  body {
    background: ${({ bg }) => bg};
  }
`;

GlobalStyle.defaultProps = {
	bg: 'var(--clr-pink)'
}
