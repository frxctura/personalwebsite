async function fetchDataAndUpdateText(userId) {
    try {
      const response = await fetch(`https://api.lanyard.rest/v1/users/${userId}`);
      const data = await response.json();
      updateText(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  function updateText(data) {
    if (data.success && data.data.listening_to_spotify) {
      const { artist, song } = data.data.spotify;
      document.getElementById("listeningTo").innerText = `Currently listening to ${song} by ${artist}`;
    } else {
      document.getElementById("listeningTo").innerText = "Currently listening to nothing";
    }
  }

  const userId = "468465290531962900"; 
  fetchDataAndUpdateText(userId);
  
  setInterval(() => {
    fetchDataAndUpdateText(userId);
  }, 30000);
  