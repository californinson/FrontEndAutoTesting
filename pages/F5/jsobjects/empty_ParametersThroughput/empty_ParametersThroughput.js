export default {
	checkInputsConnSess() {
    // Get the value of the input fields
    const input5Value = Input5.text;
    const input6Value = Input6.text;
		const input7Value = Input7.text;
		const input8Value = Input8.text;

    // Check if either of the inputs is empty
    if (!input5Value || !input6Value || !input7Value || !input8Value) {
        return false;  
    } else {
				return true;
		}
		
	}

}