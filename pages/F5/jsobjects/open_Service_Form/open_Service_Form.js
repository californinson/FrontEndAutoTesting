export default {
	openServiceFormAdd () {
		storeValue('configured', 'no')
		Form3.setVisibility(true)
		Tabs2.setVisibility(true)
	},
	openServiceFormDel () {
		storeValue('configured', 'yes')
		Tabs2.setVisibility(true)
		Table2Copy.setVisibility(true)
	},
	openPushToDevice () {
		Button15.setVisibility(true)
	}
}