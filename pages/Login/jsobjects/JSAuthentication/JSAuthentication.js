export default {
  handleLogin: async (username, password) => {
    // Call the login API
    try {
      const response = await LoginAPI.run({ username, password });
      if (response.isSuccess) {
        // If the response is successful, store the user details
        storeValue('userDetails', response.data.userDetails);
        // Navigate the user to the dashboard page or desired page
        navigateTo('HomePage');
      } else {
        // Handle error, such as showing an incorrect login message
        showAlert('Login failed. Please check your username and password.', 'error');
      }
    } catch (error) {
      // Handle any other errors, such as network issues
      showAlert('An error occurred during login. Please try again.', 'error');
    }
  }
};