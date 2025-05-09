export default {
	getResourcesWorkflowFile () {
		navigateTo('http://192.168.0.79:5000/api/cisco/iosxr/resources/files/'+Table4.triggeredRow["filename"],true)
		
		return Promise.resolve(); // avoid the Appsmith .then() error
	}
}