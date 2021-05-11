import { useState } from "react";

export default function useForm(initialInput = {}, initialOutput = {}) {
	const [inputs, setInputs] = useState(initialInput);
	const [touchedInputs, setTouchedInputs] = useState({});
	const [outputs, setOutputs] = useState(initialOutput);

	function handleChange(e) {
		let { value, name } = e.target;

		setInputs({
			...inputs,
			[name]: value,
		});

		let untouchedValue = initialInput[name] ? initialInput[name] : null;

		setTouchedInputs({ ...touchedInputs, [name]: untouchedValue });
	}

	function submitForm(e) {
		e.preventDefault();
		setOutputs({
			original: { ...touchedInputs },
			...inputs,
		});
	}

	function resetForm() {
		setInputs(initialInput);
		setOutputs(initialOutput);
		setTouchedInputs({});
	}

	return {
		inputs,
		outputs,
		handleChange,
		submitForm,
		resetForm,
	};
}
