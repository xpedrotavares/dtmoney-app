import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	
	html {
		@media (max-width: 1080px) {
			font-size: 93.75%; // 15px
		}

		@media (max-width: 720px) {
			font-size: 87.5%; // 14px
		}
	}

	// rem = 1rem = font-size da pagina
	body {
		background: var(--background);
		-webkit-font-smoothing: antialiased; // fonts mais nitidas
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}

`
