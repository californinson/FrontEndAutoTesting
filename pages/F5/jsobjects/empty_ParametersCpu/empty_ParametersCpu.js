export default {
	checkInputsCpu() {
    // Get the value of the input fields
    const input1Value = cpu_form_Input1.text;
    const input2Value = cpu_form_Input2.text;
		const input3Value = cpu_form_Input3.text;
		const input4Value = cpu_form_Input3Copy.text;

    // Check if either of the inputs is empty
		if(cpu_form_Switch1.isSwitchedOn && (!input1Value || !input2Value || !input4Value)){
			return false;
		} else {
			if(Switch1.isSwitchedOn && (!input1Value || !input2Value || !input3Value)){
				return false;
			}
			else {
				return true;
			}
		} 
		
	}

}