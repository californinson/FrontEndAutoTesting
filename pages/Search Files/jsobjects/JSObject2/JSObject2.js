export default {
	 createUrl(fileName) {    
    // Construct the URL
    const baseUrl = 'http://autotesting.local:5000/api/f5/files';
    //const url = `${baseUrl}/${ipMatch}/${fileName}`;
		const url = `${baseUrl}/${fileName}`;
    return url;
}
}