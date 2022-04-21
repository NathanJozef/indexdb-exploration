import styled from 'styled-components'

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #123456;
	height: 100vh;
	width: 100vw;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
		'Droid Sans', 'Helvetica Neue', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #2976c3;
	min-height: 20em;
	width: 75%;
	margin: 2em;
`;

export const OutputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #32a07d;
	min-height: 20em;
	width: 75%;
	margin: 2em;
`;

export const HeadingLabel = styled.label`
	font-size: xx-large;
`;

export const LayerContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	align-items: center;
	width: 90%;
	min-height: 2em;
`;

export const Label = styled.label`
	font-size: larger;
	padding: 5px;
`;

export const TextInput = styled.input`
	width: 40%;
`;

export const OutputLabel = styled.label`
	font-size: larger;
	padding: 5px;
`;

export const SubmitButton = styled.button``;
