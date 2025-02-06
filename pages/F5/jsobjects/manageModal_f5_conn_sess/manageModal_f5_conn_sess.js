export default {
  // Delayed action function
  delayedAction: async () => {
    // Store a value that will trigger showing a loading indicator or modal
    storeValue('isLoading', true);

    // Mimicking a 120-second delay by breaking it down into smaller intervals (like 1 second)
    let secondsPassed = 0;
    const totalDelaySeconds = parseInt(Input4.text)*60+5;
    setTimeout(f5_connections_sessions.run(),totalDelaySeconds*1000)
		
    const intervalId = setInterval(() => {
      // Update some counter if you want to show the progress
      storeValue('secondsPassed', ++secondsPassed);
      
      if (secondsPassed >= totalDelaySeconds) {
        clearInterval(intervalId);  // Clear the interval once the time is up
        storeValue('isLoading', false);
        
        // Make the API call or trigger the action you need to execute after the delay
        // ... Your code goes here for what should happen after the 120 second delay
				Progress2.setVisibility(false)
				Text5.setVisibility(true)
				Text5.setText(f5_connections_sessions.data.message)
      }
    }, 1000); // Each interval is 1 second
  },
};