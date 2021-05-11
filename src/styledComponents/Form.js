import styled from "styled-components";

const Form = styled.form`
	width: 95vw;
	display: grid;
	grid-template-columns: 30vw 30vw 30vw;
	grid-gap: 0.5rem;
	background: #eee;
	text-align: right;
	justify-content: center;
	align-content: center;
	padding: 1rem;

	div {
		display: grid;
		width: 100%;
		grid-template-columns: [labels] 1fr [controls] 1fr;

		labels {
			grid-column: labels;
			grid-row: auto;
		}
		input {
			grid-column: controls;
			grid-row: auto;
			padding: 0.25rem;
			margin-left: 0.5rem;
		}
	}
`;

export default Form;
