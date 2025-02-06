export default {
	checkInputsConnSess() {
    // Get the value of the input fields
    const input1Value = Input1.text;
    const input2Value = Input2.text;
		const input3Value = Input3.text;
		const input4Value = Input4.text;

    // Check if either of the inputs is empty
    if (!input1Value || !input2Value || !input3Value || !input4Value) {
        return false;  
    } else {
				return true;
		}
		
	}

}