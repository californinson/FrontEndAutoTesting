export default {
	checkInputs() {
    // Get the value of the input fields
    const input1Value = Input1.text;
    const input2Value = Input2.text;
	  //const input3Value = Input3.text; //hostname
		const input3Value = MultiSelect5.selectedOptionLabels[0];

    // Check if either of the inputs is empty
    if (!input1Value || !input2Value || !input3Value) {
        return false;  
    } else {
				return true;
		}
		
	}

}