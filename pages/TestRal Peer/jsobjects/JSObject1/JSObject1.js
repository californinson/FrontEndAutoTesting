export default {
  downloadDoc: async () => {
    // Define the API endpoint URL
    const apiUrl = 'http://192.168.0.45:5000/api/f5/download_doc';

    // Define the POST request body with your content
    const body = {
      text: Text24.text
    };

    // Make the POST request using Appsmith's API utilities
    const response = await downloadDoc.run({ data: body });

    // TODO: Handle the file content received from the Flask response
    // Example: Triggering download in the browser using the received content

    // Return the response for further processing if needed
    return response;
  }
};