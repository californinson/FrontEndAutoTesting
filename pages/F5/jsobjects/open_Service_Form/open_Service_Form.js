export default {
	openServiceFormAdd () {
		storeValue('configured', 'no')
		Tabs2.setVisibility(true)
		Form3.setVisibility(true)
		Text27.setVisibility(true)
		Table2.setVisibility(true)
		Button15.setVisibility(true)
	},
	openServiceFormDel () {
		storeValue('configured', 'yes')
		Tabs2.setVisibility(true)
		Table2Copy.setVisibility(true)
		Text27Copy.setVisibility(true)
		Table2Copy.setVisibility(true)
	},
	openPushToDevice () {
		Button15.setVisibility(true)
	}
}