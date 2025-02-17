export default {
	openServiceFormAdd () {
		Form3.setVisibility(true)
		Tabs2.setVisibility(true)
		storeValue('configured', 'no')
	},
	openServiceFormDel () {
		Tabs2.setVisibility(true)
		storeValue('configured', 'yes')
	},
	openPushToDevice () {
		Button15.setVisibility(true)
	}
}