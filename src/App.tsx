import { useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
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

const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #2976c3;
	min-height: 20em;
	width: 75%;
	margin: 2em;
`;

const OutputContianer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #32a07d;
	min-height: 20em;
	width: 75%;
	margin: 2em;
`;

const HeadingLabel = styled.label`
	font-size: xx-large;
`;

const LayerContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	align-items: center;
	width: 90%;
	min-height: 2em;
`;

const Label = styled.label`
	font-size: larger;
	padding: 5px;
`;

const TextInput = styled.input`
	width: 40%;
`;

const OutputLabel = styled.label`
	font-size: larger;
	padding: 5px;
`;

const SubmitButton = styled.button``;

const App = () => {
	let input1Ref: HTMLInputElement | null = null;
	let input2Ref: HTMLInputElement | null = null;
	let input3Ref: HTMLInputElement | null = null;
	let input4Ref: HTMLInputElement | null = null;
	let input5Ref: HTMLInputElement | null = null;

	useEffect(() => {});

	return (
		<AppContainer>
			<InputContainer>
				<HeadingLabel>Input</HeadingLabel>
				<LayerContainer>
					<Label>Item 1</Label>
					<TextInput
						ref={(ref) => {
							input1Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 2</Label>
					<TextInput
						ref={(ref) => {
							input2Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 3</Label>
					<TextInput
						ref={(ref) => {
							input3Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 4</Label>
					<TextInput
						ref={(ref) => {
							input4Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 5</Label>
					<TextInput
						ref={(ref) => {
							input5Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<SubmitButton onClick={() => {}}>Submit</SubmitButton>
			</InputContainer>
			<OutputContianer>
				<HeadingLabel>Database Output</HeadingLabel>
				<LayerContainer>
					<Label>Item 1</Label>
					<OutputLabel>Test</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 2</Label>
					<OutputLabel>Test</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 3</Label>
					<OutputLabel>Test</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 4</Label>
					<OutputLabel>Test</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 5</Label>
					<OutputLabel>Test</OutputLabel>
				</LayerContainer>
			</OutputContianer>
		</AppContainer>
	);
};

export default App;
