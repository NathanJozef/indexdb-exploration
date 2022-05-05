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
	let input1Ref: HTMLInputElement | null = null;
	let input2Ref: HTMLInputElement | null = null;
	let input3Ref: HTMLInputElement | null = null;
	let input4Ref: HTMLInputElement | null = null;
	let input5Ref: HTMLInputElement | null = null;

	const [latestRecordId, setLatestRecordId] = useState<number>(0)
	const [test1Data, setTest1Data] = useState<string>("")
	const [test2Data, setTest2Data] = useState<string>("")
	const [test3Data, setTest3Data] = useState<string>("")
	const [test4Data, setTest4Data] = useState<string>("")
	const [test5Data, setTest5Data] = useState<string>("")

	useEffect(() => {
		getLatestRecord();
	});

	const getLatestRecord = async () => {
		const latestRecord = await db.myRecords.orderBy('id').last()
		setLatestRecordId(latestRecord!.id!)
		setTest1Data(latestRecord!.test1)
		setTest2Data(latestRecord!.test2)
		setTest3Data(latestRecord!.test3)
		setTest4Data(latestRecord!.test4)
		setTest5Data(latestRecord!.test5)

	};

	const buttonClicked = () => {
		addTestDataToDB();
		getLatestRecord()
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
					<Label>Record Id</Label>
					<OutputLabel>{latestRecordId}</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label>Item 1</Label>
					<OutputLabel>{test1Data}</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 2</Label>
					<OutputLabel>{test2Data}</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 3</Label>
					<OutputLabel>{test3Data}</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 4</Label>
					<OutputLabel>{test4Data}</OutputLabel>
				</LayerContainer>
				<LayerContainer>
					<Label> Item 5</Label>
					<OutputLabel>{test5Data}</OutputLabel>
				</LayerContainer>
			</OutputContainer>
		</AppContainer>
	);
};

export default App;
