export default {
	checkInputsService() {
    // Get the value of the input fields
    const input9Value = Input9.text;
    const input10Value = Input10.text;
		const input11Value = Input11.text;
		const input2Value = MultiSelect2.selectedOptionLabels.length;
		const input3Value = MultiSelect3.selectedOptionLabels.length;
		const input22Value = MultiSelect2Copy.selectedOptionLabels.length;

    // Check if either of the inputs is empty
		if(input2Value > 1 || input3Value > 1 || input22Value > 1 || !input9Value || !input10Value || !input11Value){
			return false;
		} else {
			return true;
		} 
		
	}

}