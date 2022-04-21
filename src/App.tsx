import { useEffect, useState } from 'react';
import { db } from './db';
import {
	AppContainer,
	InputContainer,
	Label,
	TextInput,
	LayerContainer,
	SubmitButton,
	OutputLabel,
	HeadingLabel,
	OutputContainer,
} from './styled-components';

const App = () => {
	const [placeholder, setPlaceholder] = useState<boolean>(false)
	let input1Ref: HTMLInputElement | null = null;
	let input2Ref: HTMLInputElement | null = null;
	let input3Ref: HTMLInputElement | null = null;
	let input4Ref: HTMLInputElement | null = null;
	let input5Ref: HTMLInputElement | null = null;

	useEffect(() => {
		getLatestRecord();
	});

	const getLatestRecord = async () => {
		const latestRecord = await db.myRecords.orderBy('id').last()
		console.log({latestRecord});
	};

	const buttonClicked = () => {
		addTestDataToDB();
		setPlaceholder(!placeholder)
	};

	const addTestDataToDB = async () => {
		try {
			const id = await db.myRecords.put({
				test1: input1Ref!.value,
				test2: input2Ref!.value,
				test3: input3Ref!.value,
				test4: input4Ref!.value,
				test5: input5Ref!.value,
			});
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<AppContainer>
			<InputContainer>
				<HeadingLabel>Input</HeadingLabel>
				<LayerContainer>
					<Label>Item 1</Label>
					<TextInput
						defaultValue={'test1'}
						ref={(ref) => {
							input1Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 2</Label>
					<TextInput
						defaultValue={'test2'}
						ref={(ref) => {
							input2Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 3</Label>
					<TextInput
						defaultValue={'test3'}
						ref={(ref) => {
							input3Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 4</Label>
					<TextInput
						defaultValue={'test4'}
						ref={(ref) => {
							input4Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 5</Label>
					<TextInput
						defaultValue={'test5'}
						ref={(ref) => {
							input5Ref = ref;
						}}
					></TextInput>
				</LayerContainer>
				<SubmitButton onClick={() => buttonClicked()}>Submit</SubmitButton>
			</InputContainer>
			<OutputContainer>
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
			</OutputContainer>
		</AppContainer>
	);
};

export default App;
