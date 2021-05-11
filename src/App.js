import "./App.css";
import { useState, useEffect } from "react";

import useForm from "./hooks/useForm";
import Form from "./styledComponents/Form";
import { getFormattedDate } from "./utils/dateUtil";

function App() {
	const { inputs, outputs, handleChange, submitForm, resetForm } = useForm(
		{
			partyType: "Person",
			lastName: "HARLEY",
			displayName: "WILLIAM WINTON HARLEY",
			floatFld: parseFloat("0.1"),
			intFld: parseInt("1"),
			dunsNumber: "",
			generationSuffixCd: "III",
			boolFld: "",
			middleName: "WINTON",
			birthdate: getFormattedDate("1886-09-07T00:00:00+01:00"),
			taxId: "1234567  ",
			statusCd: "",
			firstName: "WILLIAM",
			consolidationInd: "",
			creator: "",
			interactionId: "",
			updatedBy: "",
			lastUpdateDate: "",
			lastRowidSystem: "",
			dirtyIndicator: "",
			deletedBy: "",
			deletedIndicator: "",
			hubStateInd: "",
			deletedDate: "",
			rowidObject: "1242",
			cmDirtyInd: "",
			createDate: "",
			genderCd: "",
			namePrefixCd: "",
		},
		{
			original: {},
		}
	);

	const [showFields, setShowFields] = useState(false);
	const [outputData, setOutputData] = useState({
		original: {},
	});
	const [shortOutputData, setShortOutputData] = useState({
		original: {},
	});

	useEffect(() => {
		setOutputData({ ...outputs });
	}, [outputs]);

	//setting output for fields which are touched
	useEffect(() => {
		let tempObj = {};
		for (const key of Object.keys(outputData)) {
			if (key in outputData.original) {
				tempObj = {
					...tempObj,
					[key]: outputData[key],
				};
			}
		}
		setShortOutputData({ original: { ...outputData.original }, ...tempObj });
	}, [outputData]);

	return (
		<div className='App'>
			<div className='header'>
				<h2>Business Entity : Person</h2>
				<div>
					<button
						type='button'
						onClick={(e) => {
							console.log("submit");
							submitForm(e);
						}}>
						Save
					</button>
					<button type='reset' onClick={resetForm}>
						Reset
					</button>
					<button
						type='button'
						name='toggle'
						onClick={() => {
							setShowFields(!showFields);
						}}>
						{showFields ? "Hide Additional Fields" : "Show Additional Fields"}
					</button>
				</div>
			</div>
			<Form>
				<div>
					<label htmlFor='partyType'>Party Type :</label>
					<input
						type='text'
						id='partyType'
						name='partyType'
						placeholder='Party Type'
						value={inputs.partyType}
						maxLength='255'
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='lastName'>Last Name :</label>
					<input
						type='text'
						id='lastName'
						name='lastName'
						placeholder='Last Name'
						maxLength='50'
						value={inputs.lastName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='displayName'>Display Name :</label>
					<input
						type='text'
						id='displayName'
						name='displayName'
						placeholder='Display Name'
						maxLength='200'
						value={inputs.displayName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='floatFld'>Float_fld :</label>
					<input
						type='number'
						id='floatFld'
						name='floatFld'
						value={inputs.floatFld}
						onChange={handleChange}
						placeholder='1.0'
						step='0.1'></input>
				</div>
				<div>
					<label htmlFor='intFld'>Int_fld :</label>
					<input
						type='number'
						id='intFld'
						name='intFld'
						placeholder='1'
						value={inputs.intFld}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='dunsNumber'>DUNS Number :</label>
					<input
						type='text'
						id='dunsNumber'
						name='dunsNumber'
						placeholder='DUNS Number'
						maxLength='9'
						value={inputs.dunsNumber}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='generationSuffixCd'>Generation Suffix Cd :</label>
					<input
						type='text'
						id='generationSuffixCd'
						name='generationSuffixCd'
						placeholder='Generation Suffix Cd'
						maxLength='10'
						readOnly
						value={inputs.generationSuffixCd}
					/>
				</div>
				<div>
					<label htmlFor='boolFld'>Bool_fld :</label>
					<input
						type='text'
						id='boolFld'
						name='boolFld'
						placeholder='Bool_fld'
						maxLength='1'
						value={inputs.boolFld}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='middleName'>Middle Name :</label>
					<input
						type='text'
						id='middleName'
						name='middleName'
						placeholder='Middle Name'
						maxLength='50'
						value={inputs.middleName}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='birthdate'>Birthdate :</label>
					<input
						type='date'
						id='birthdate'
						name='birthdate'
						placeholder='Birthdate'
						value={inputs.birthdate}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='taxId'>Tax ID :</label>
					<input
						type='text'
						id='taxId'
						name='taxId'
						placeholder='Tax ID'
						maxLength='9'
						value={inputs.taxId}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='statusCd'>Status Cd :</label>
					<input
						type='text'
						id='statusCd'
						name='statusCd'
						placeholder='Status Cd'
						maxLength='2'
						value={inputs.statusCd}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='firstName'>First Name :</label>
					<input
						type='text'
						id='firstName'
						name='firstName'
						placeholder='First Name'
						maxLength='50'
						value={inputs.firstName}
						onChange={handleChange}
					/>
				</div>
				{showFields && (
					<>
						<div>
							<label htmlFor='consolidationInd'>Consolidation Ind</label>
							<input
								type='number'
								id='consolidationInd'
								name='consolidationInd'
								placeholder='Consolidation Ind'
								value={inputs.consolidationInd}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='creator'>Creator</label>
							<input
								type='text'
								id='creator'
								name='creator'
								placeholder='Creator'
								maxLength='50'
								value={inputs.creator}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='interactionId'>Interaction Id</label>
							<input
								type='number'
								id='interactionId'
								name='interactionId'
								placeholder='Interaction Id'
								maxLength='38'
								value={inputs.interactionId}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='updatedBy'>Updated By</label>
							<input
								type='number'
								id='updatedBy'
								name='updatedBy'
								placeholder='Updated By'
								maxLength='50'
								value={inputs.updatedBy}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='lastUpdateDate'>Last Update Date</label>
							<input
								type='date'
								id='lastUpdateDate'
								name='lastUpdateDate'
								placeholder='Updated By'
								value={inputs.lastUpdateDate}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='lastRowidSystem'>Last Rowid System</label>
							<input
								type='text'
								id='lastRowidSystem'
								name='lastRowidSystem'
								placeholder=' Last Rowid System'
								maxLength='14'
								value={inputs.lastRowidSystem}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='dirtyIndicator'>Dirty Indicator</label>
							<input
								type='number'
								maxLength='38'
								id='dirtyIndicator'
								name='dirtyIndicator'
								placeholder='Dirty Indicator'
								value={inputs.dirtyIndicator}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='deletedBy'>Deleted By</label>
							<input
								type='text'
								maxLength='58'
								id='deletedBy'
								name='deletedBy'
								placeholder='Deleted By'
								value={inputs.deletedBy}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='deletedIndicator'>Deleted Indicator</label>
							<input
								type='number'
								maxLength='38'
								id='deletedIndicator'
								name='deletedIndicator'
								placeholder='Deleted Indicator'
								value={inputs.deletedIndicator}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='hubStateInd'>Hub State Ind</label>
							<input
								type='number'
								maxLength='38'
								id='hubStateInd'
								name='hubStateInd'
								placeholder='Hub State Ind'
								value={inputs.hubStateInd}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='deletedDate'>Deleted Date</label>
							<input
								type='date'
								id='deletedDate'
								name='deletedDate'
								placeholder='Updated By'
								value={inputs.deletedDate}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='rowidObject'>Rowid Object : </label>
							<input
								type='text'
								id='rowidObject'
								name='rowidObject'
								placeholder='Rowid Object'
								value={inputs.rowidObject}
								maxLength='14'
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='cmDirtyInd'>Rowid Object : </label>
							<input
								type='number'
								id='cmDirtyInd'
								name='cmDirtyInd'
								placeholder='Content metadata dirty Ind'
								value={inputs.cmDirtyInd}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor='createDate'>Deleted Date</label>
							<input
								type='date'
								id='createDate'
								name='createDate'
								placeholder='Create Date'
								value={inputs.createDate}
								readOnly
							/>
						</div>
					</>
				)}

				<div>
					<label htmlFor='genderCd'>Gender Cd : </label>
					<input
						type='text'
						id='genderCd'
						name='genderCd'
						placeholder='Gender Cd'
						value={inputs.genderCd}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='namePrefixCd'>Name Prefix Cd : </label>
					<input
						type='text'
						id='namePrefixCd'
						name='namePrefixCd'
						placeholder='Name Prefix Cd'
						value={inputs.namePrefixCd}
						onChange={handleChange}
					/>
				</div>
			</Form>

			<div className='output-section'>
				<div className='output-section-item'>
					<h4>
						This section details the touched fields in original{}, all other
						fields(touched or untouched) in the other half of the JSON
					</h4>
					<pre>
						{Object.keys(outputData.original).length > 0 &&
							JSON.stringify(outputData, null, 2)}

						{!Object.keys(outputData.original).length > 0 && (
							<p>No form fields have been touched</p>
						)}
					</pre>
				</div>
				<div className='output-section-item'>
					<h4>
						This section details the touched fields in original{}, and ONLY the
						touched fields in the other half of the JSON
					</h4>
					<pre>
						{Object.keys(shortOutputData.original).length > 0 &&
							JSON.stringify(shortOutputData, null, 2)}
						{!Object.keys(shortOutputData.original).length > 0 && (
							<p>No form fields have been touched</p>
						)}
					</pre>
				</div>
			</div>
		</div>
	);
}

export default App;
