function loadPage(page) {
  let content = "";

  switch (page) {
    case "main":
      content = `
                <div class="profile">
                    <div class="profile-img" id="profileAvatar">
                        <!-- Profile image will be loaded from Discord API -->
                    </div>
                    <div class="profile-content">
                        <h1>Hey, I'm Maxine</h1>
                        <p class="tagline">a full-stack developer living and working in Germany </p>
                        <p class="subtitle">This sites main purpose is to link to some projects & to some socials.</p>
                        
                        <div class="skills-section">
                            <h3 class="skills-title">Technologies I work with</h3>
                            <div class="skills">
                                <div class="skill-icon"><i class="fab fa-js"></i></div>
                                <div class="skill-icon"><i class="fab fa-html5"></i></div>
                                <div class="skill-icon"><i class="fab fa-css3-alt"></i></div>
                                <div class="skill-icon"><i class="fab fa-react"></i></div>
                                <div class="skill-icon"><i class="fab fa-node-js"></i></div>
                                <div class="skill-icon"><i class="fab fa-python"></i></div>
                                <div class="skill-icon"><i class="fab fa-java"></i></div>
                                <div class="skill-icon"><i class="fas fa-database"></i></div>
                                <div class="skill-icon"><i class="fab fa-git"></i></div>
                            </div>
                        </div>
                    </div>
                    <div class="notice">Made with &lt3 using pure HTML/CSS/JS</div>
                </div>
            `;
      // Load Discord avatar from Lanyard API
      fetchDiscordAvatar();
      break;

    case "projects":
      content = `
                <div class="section">
                    <h2 class="section-title">Projects</h2>
                    <div class="cards">
                        <a href="https://github.com/VRPirates/rookie" class="card project-card">
                            <div class="project-image">
                                <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(108, 99, 255, 0.1)">
                                    <i class="fas fa-upload fa-3x" style="color:var(--accent-color)"></i>
                                </div>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">Rookie</h3>
                                <p class="card-text">A sideloader for Android Devices.</p>
                                <div class="tags">
                                    <span class="tag">C#</span>
                                    <span class="tag">WinForms</span>
                                    <span class="tag">.NET</span>
                                </div>
                            </div>
                        </a>
                        
                        <a href="https://github.com/frxctura/personalwebsite" class="card project-card">
                            <div class="project-image">
                                <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(108, 99, 255, 0.1)">
                                    <i class="fas fa-globe fa-3x" style="color:var(--accent-color)"></i>
                                </div>
                            </div>
                            <div class="card-content">
                                <h3 class="card-title">This website</h3>
                                <p class="card-text">My personal portfolio website, the one you're on right now!</p>
                                <div class="tags">
                                    <span class="tag">HTML</span>
                                    <span class="tag">CSS</span>
                                    <span class="tag">JS</span>
                                </div>
                            </div>
                        </a>

                    <a href="https://github.com/VRPirates/VRPE" class="card project-card">
                        <div class="project-image">
                            <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(108, 99, 255, 0.1)">
                                <i class="fas fa-download fa-3x" style="color:var(--accent-color)"></i>
                            </div>
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">VRPE</h3>
                            <p class="card-text">An installer for numerous tools.</p>
                            <div class="tags">
                                <span class="tag">C#</span>
                                <span class="tag">WinForms</span>
                                <span class="tag">.NET</span>
                            </div>
                        </div>
                    </a>
                    <a href="https://github.com/frxctura/Telegram-MSG-Logger" class="card project-card">
                    <div class="project-image">
                        <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(108, 99, 255, 0.1)">
                            <i class="fas fa-eye fa-3x" style="color:var(--accent-color)"></i>
                        </div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title">Telegram-MSG-Logger</h3>
                        <p class="card-text">A simple message logger built in Python, nothing special & barely works</p>
                        <div class="tags">
                            <span class="tag">Python</span>
                            <span class="tag">SQLite</span>
                        </div>
                    </div>
                    </a>
                </div>
            `;
      break;

    case "links":
      content = `
                <div class="section">
                    <h2 class="section-title">Links</h2>
                    <div class="links-container">
                        <a href="https://github.com/frxctura" class="link-card">
                            <div class="link-icon">
                                <i class="fab fa-github fa-lg"></i>
                            </div>
                            <div class="link-content">
                                <h3 class="link-title">GitHub</h3>
                                <p class="link-description">GutHib</p>
                            </div>
                        </a>
                        
                        <a href="https://t.me/frxctura" class="link-card">
                            <div class="link-icon">
                                <i class="fab fa-telegram-plane fa-lg"></i>
                            </div>
                            <div class="link-content">
                                <h3 class="link-title">Telegram</h3>
                                <p class="link-description">Muh Telegram</p>
                            </div>
                        </a>
                        
                        <a href="https://discord.com/users/468465290531962900" class="link-card">
                            <div class="link-icon">
                                <i class="fab fa-discord fa-lg"></i>
                            </div>
                            <div class="link-content">
                                <h3 class="link-title">Discord</h3>
                                <p class="link-description">Check out my Discord</p>
                            </div>
                        </a>
                        
                        <a href="https://open.spotify.com/user/niimk3v9uya2ni43a913z5q61?si=a2395a8df96441d5" class="link-card">
                            <div class="link-icon">
                                <i class="fab fa-spotify fa-lg"></i>
                            </div>
                            <div class="link-content">
                                <h3 class="link-title">Spotify</h3>
                                <p class="link-description">I have way too much music</p>
                            </div>
                        </a>
                        
                        <a href="https://steamcommunity.com/id/frxctura/" class="link-card">
                            <div class="link-icon">
                                <i class="fab fa-steam fa-lg"></i>
                            </div>
                            <div class="link-content">
                                <h3 class="link-title">Steam</h3>
                                <p class="link-description">I play games too!</p>
                            </div>
                        </a>
                    </div>
                </div>
            `;
      break;

      case "status":
        content = `
                  <div class="section">
                      <h2 class="section-title">My Status</h2>
                      
                      <!-- Discord Profile Card -->
                      <div class="status-card discord-profile">
                          <div class="discord-header">
                              <div class="discord-avatar" id="discord-avatar">
                                  <!-- Discord avatar will be loaded from API -->
                              </div>
                              <div class="discord-user-info">
                                  <h3 class="discord-username" id="discord-username">Loading...</h3>
                                  <div class="discord-id" id="discord-id">Loading...</div>
                                  <div class="discord-status-indicator">
                                      <span id="discord-status-dot" class="status-indicator status-offline"></span>
                                      <span id="discord-status-text">Offline</span>
                                  </div>
                              </div>
                          </div>
                          
                          <!-- Activities Section -->
                          <div class="activities-section" id="activities-container">
                              <h4 class="section-subtitle">Current Activities</h4>
                              <div id="activities-list">
                                  <!-- Activities will be loaded dynamically -->
                                  <div class="loading-activities">Loading activities...</div>
                              </div>
                          </div>
                      </div>
                      
                      <!-- Spotify Status Card -->
                      <div class="status-card" id="spotify-card">
                          <div class="status-header">
                              <span class="status-indicator" id="spotify-indicator"></span>
                              <h3 class="status-title" id="spotify-status-title">Spotify Status</h3>
                          </div>
                          
                          <div class="spotify-status" id="spotify-container">
                              <div class="spotify-img" id="spotify-album">
                                  <!-- Album art placeholder -->
                                  <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(30, 215, 96, 0.2)">
                                      <i class="fab fa-spotify fa-lg" style="color:#1ED760"></i>
                                  </div>
                              </div>
                              
                              <div class="spotify-info">
                                  <div class="spotify-track" id="spotify-track">Not playing</div>
                                  <div class="spotify-artist" id="spotify-artist">Not listening to anything</div>
                                  
                                  <div class="spotify-time">
                                      <span id="current-time">0:00</span>
                                      <div class="spotify-progress">
                                          <div class="spotify-bar" id="progress-bar"></div>
                                      </div>
                                      <span id="total-time">0:00</span>
                                  </div>
                              </div>
                          </div>
                          <p class="status-details" style="margin-top:10px;font-size:0.8rem;text-align:right;">
                              <i class="fab fa-discord"></i> Data fetched from Lanyard API
                          </p>
                      </div>
                  </div>
              `;
        updateDiscordStatus();
        break;
  
      default:
        content = "<p>Page not found.</p>";
    }

  document.getElementById("currentPageContent").innerHTML = content;
}

// Function to fetch Discord avatar
function fetchDiscordAvatar() {
  fetch("https://api.lanyard.rest/v1/users/468465290531962900")
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        const userId = data.data.discord_user.id;
        const avatarHash = data.data.discord_user.avatar;
        const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}`;

        const avatarContainer = document.getElementById("profileAvatar");
        const avatarImage = document.createElement("img");
        avatarImage.src = avatarUrl;
        avatarImage.alt = "Profile Avatar";

        // Clear any existing content and append the image
        avatarContainer.innerHTML = "";
        avatarContainer.appendChild(avatarImage);
      } else {
        console.error("Error fetching avatar data.");
        setDefaultAvatar();
      }
    })
    .catch((error) => {
      console.error("Error fetching from Lanyard API:", error);
      setDefaultAvatar();
    });
}

// Store previous activities to compare
let previousActivities = [];

// Function to update all Discord status from Lanyard API
function updateDiscordStatus() {
  const userId = "468465290531962900"; // Your Discord user ID

  async function fetchDataAndUpdateAll() {
    try {
      const response = await fetch(
        `https://api.lanyard.rest/v1/users/${userId}`
      );
      const data = await response.json();

      if (!data.success) {
        throw new Error("API returned unsuccessful response");
      }

      // Update Discord profile
      updateDiscordProfile(data.data);
      
      // Update activities only if they've changed
      if (haveActivitiesChanged(data.data.activities, previousActivities)) {
        updateActivities(data.data.activities);
        previousActivities = JSON.parse(JSON.stringify(data.data.activities || []));
      }
      
      // Update Spotify status (progress can update without refreshing entire component)
      updateSpotifyPlayer(data.data);

    } catch (error) {
      console.error("Error fetching Discord data:", error);
      setErrorState();
    }
  }

  // Function to update Discord profile information
  function updateDiscordProfile(data) {
    const user = data.discord_user;
    
    // Set avatar
    const avatarContainer = document.getElementById("discord-avatar");
    const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
    avatarContainer.innerHTML = `<img src="${avatarUrl}" alt="Discord Avatar" />`;
    
    // Set username and ID
    document.getElementById("discord-username").textContent = user.display_name || user.global_name || user.username;
    document.getElementById("discord-id").textContent = `${user.username}${user.discriminator !== '0' ? user.discriminator : ''}`;
    
    // Set online status
    const statusDot = document.getElementById("discord-status-dot");
    const statusText = document.getElementById("discord-status-text");
    
    statusDot.className = `status-indicator status-${data.discord_status}`;
    
    // Map status to readable text
    const statusMap = {
      online: "Online",
      idle: "Idle",
      dnd: "Do Not Disturb",
      offline: "Offline"
    };
    
    statusText.textContent = statusMap[data.discord_status] || "Unknown";
    
    // Add client info if available
    let clientInfo = [];
    if (data.active_on_discord_desktop) clientInfo.push("Desktop");
    if (data.active_on_discord_mobile) clientInfo.push("Mobile");
    if (data.active_on_discord_web) clientInfo.push("Web");
    
    if (clientInfo.length > 0 && data.discord_status !== "offline") {
      statusText.textContent += ` (${clientInfo.join(", ")})`;
    }
  }
  
  // Check if activities have changed
  function haveActivitiesChanged(newActivities = [], oldActivities = []) {
    // Quick length check
    if (newActivities.length !== oldActivities.length) return true;
    
    // No activities in both arrays
    if (newActivities.length === 0 && oldActivities.length === 0) return false;
    
    // Check if any key properties have changed
    for (let i = 0; i < newActivities.length; i++) {
      const newAct = newActivities[i];
      const oldAct = oldActivities[i];
      
      // Check essential properties
      if (newAct.name !== oldAct.name || 
          newAct.type !== oldAct.type || 
          newAct.state !== oldAct.state || 
          newAct.details !== oldAct.details) {
        return true;
      }
      
      // Check timestamps for elapsed time differences
      if (newAct.timestamps && oldAct.timestamps) {
        // Only check if start times are different
        if (newAct.timestamps.start !== oldAct.timestamps.start) {
          return true;
        }
      } else if ((newAct.timestamps && !oldAct.timestamps) || 
                (!newAct.timestamps && oldAct.timestamps)) {
        return true;
      }
    }
    
    return false;
  }
  
  // Function to update activities
  function updateActivities(activities) {
    const activitiesContainer = document.getElementById("activities-list");
    
    if (!activities || activities.length === 0) {
      activitiesContainer.innerHTML = '<div class="no-activities">No current activities</div>';
      return;
    }
    
    // Sort activities by type 
    // Custom status first, then applications, then Spotify
    const sortedActivities = [...activities].sort((a, b) => {
      // Custom status (type 4) first
      if (a.type === 4 && b.type !== 4) return -1;
      if (a.type !== 4 && b.type === 4) return 1;
      
      // Spotify (name === "Spotify") last
      if (a.name === "Spotify" && b.name !== "Spotify") return 1;
      if (a.name !== "Spotify" && b.name === "Spotify") return -1;
      
      return 0;
    });
    
    // Create activity cards
    let activityHTML = "";
    
    sortedActivities.forEach(activity => {
      if (activity.name === "Spotify") {
        // Skip Spotify as it's shown in its own card
        return;
      }
      
      if (activity.type === 4) {
        // Custom Status
        let emojiHTML = '';
        if (activity.emoji) {
          if (activity.emoji.id) {
            // Custom emoji
            const animated = activity.emoji.animated ? 'gif' : 'png';
            emojiHTML = `<img class="custom-emoji" src="https://cdn.discordapp.com/emojis/${activity.emoji.id}.${animated}" alt="${activity.emoji.name}" />`;
          } else {
            // Unicode emoji
            emojiHTML = `<span class="emoji">${activity.emoji.name}</span>`;
          }
        }
        
        activityHTML += `
          <div class="activity-card custom-status">
            <div class="activity-header">
              <div class="activity-type">Custom Status</div>
            </div>
            <div class="activity-content">
              ${emojiHTML} ${activity.state || ''}
            </div>
          </div>
        `;
      } else {
        // Application/Game activity
        let activityContent = '';
        
        // Add details if available
        if (activity.details) {
          activityContent += `<div class="activity-details">${activity.details}</div>`;
        }
        
        // Add state if available
        if (activity.state) {
          activityContent += `<div class="activity-state">${activity.state}</div>`;
        }
        
        // Add timestamps if available
        let timeInfo = '';
        if (activity.timestamps) {
          if (activity.timestamps.start) {
            const startTime = new Date(activity.timestamps.start);
            const now = new Date();
            const elapsedMs = now - startTime;
            const elapsedMinutes = Math.floor(elapsedMs / 60000);
            const hours = Math.floor(elapsedMinutes / 60);
            const minutes = elapsedMinutes % 60;
            
            timeInfo = `${hours > 0 ? hours + 'h ' : ''}${minutes}m elapsed`;
          }
        }
        
        // Add image if available
        let imageHTML = '';
        if (activity.assets && activity.assets.large_image) {
          let imgUrl = handleAssetUrl(activity.assets.large_image, activity.application_id);
          
          imageHTML = `
            <div class="activity-image">
              <img src="${imgUrl}" alt="${activity.assets.large_text || activity.name}" />
              ${activity.assets.small_image ? 
                `<div class="activity-small-image">
                  <img src="${handleAssetUrl(activity.assets.small_image, activity.application_id)}" alt="${activity.assets.small_text || ''}" />
                </div>` : ''}
            </div>
          `;
        }
        
        activityHTML += `
          <div class="activity-card">
            <div class="activity-header">
              <div class="activity-type">${getActivityTypeName(activity.type)}</div>
              ${timeInfo ? `<div class="activity-time">${timeInfo}</div>` : ''}
            </div>
            <div class="activity-content">
              ${imageHTML}
              <div class="activity-info">
                <div class="activity-name">${activity.name}</div>
                ${activityContent}
              </div>
            </div>
            ${activity.buttons && activity.buttons.length > 0 ? 
              `<div class="activity-buttons">
                ${activity.buttons.map(button => `<button class="activity-button">${button}</button>`).join('')}
              </div>` : ''}
          </div>
        `;
      }
    });
    
    if (activityHTML) {
      activitiesContainer.innerHTML = activityHTML;
    } else {
      activitiesContainer.innerHTML = '<div class="no-activities">No current activities</div>';
    }
  }
  
  // Helper function to get readable activity type
  function getActivityTypeName(type) {
    const types = {
      0: "Playing",
      1: "Streaming",
      2: "Listening",
      3: "Watching",
      4: "Custom Status",
      5: "Competing"
    };
    return types[type] || "Unknown";
  }
  
  // Helper function to handle different asset URL formats
  function handleAssetUrl(assetUrl, applicationId) {
    if (!assetUrl) return '';
    
    if (assetUrl.startsWith('mp:external/')) {
      // For external media proxy URLs, we need to extract and properly format the URL
      const urlMatch = assetUrl.match(/mp:external\/([^\/]+)\/([^\/]+)\/(.+)/);
      if (urlMatch) {
        // The third capture group contains the encoded URL
        const encodedUrl = urlMatch[3];
        // For GitHub URLs specifically
        if (encodedUrl.includes('raw.githubusercontent.com')) {
          return `https://${decodeURIComponent(encodedUrl)}`;
        }
        // For other external URLs
        return decodeURIComponent(encodedUrl);
      }
    } else if (assetUrl.startsWith('spotify:')) {
      // Handle Spotify image assets
      return `https://i.scdn.co/image/${assetUrl.split(':')[1]}`;
    } else if (assetUrl.startsWith('twitch:')) {
      // Handle Twitch image assets
      return `https://static-cdn.jtvnw.net/previews-ttv/live_user_${assetUrl.split(':')[1]}-440x248.jpg`;
    } else if (!assetUrl.startsWith('http')) {
      // Handle Discord application assets
      return `https://cdn.discordapp.com/app-assets/${applicationId}/${assetUrl}.png`;
    }
    
    return assetUrl;
  }
  
  // Function to update Spotify player
  function updateSpotifyPlayer(data) {
    const spotifyCard = document.getElementById("spotify-card");
    const spotifyContainer = document.getElementById("spotify-container");
    const spotifyAlbum = document.getElementById("spotify-album");
    const spotifyTrack = document.getElementById("spotify-track");
    const spotifyArtist = document.getElementById("spotify-artist");
    const progressBar = document.getElementById("progress-bar");
    const currentTime = document.getElementById("current-time");
    const totalTime = document.getElementById("total-time");
    const statusIndicator = document.getElementById("spotify-indicator");
    const statusTitle = document.getElementById("spotify-status-title");

    // Check if listening to Spotify
    if (data.listening_to_spotify && data.spotify) {
      const spotify = data.spotify;
      
      // Show card
      spotifyCard.style.display = "block";
      
      // Update indicator
      statusIndicator.className = "status-indicator status-online";
      statusTitle.textContent = "Currently Listening";

      // Update album art
      spotifyAlbum.innerHTML = `<img src="${spotify.album_art_url}" alt="${spotify.album}" />`;

      // Update track info
      spotifyTrack.textContent = spotify.song;
      spotifyArtist.textContent = spotify.artist;

      // Calculate and update progress
      const now = Date.now();
      const start = spotify.timestamps.start;
      const end = spotify.timestamps.end;
      const duration = end - start;
      const elapsed = now - start;
      const progress = Math.min(100, Math.max(0, (elapsed / duration) * 100));

      // Format time as MM:SS
      const formatTime = (ms) => {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
      };

      // Update progress bar and timestamps
      progressBar.style.width = `${progress}%`;
      currentTime.textContent = formatTime(elapsed);
      totalTime.textContent = formatTime(duration);

      // Add active class to container
      spotifyContainer.classList.add("active");

      // If the song is still playing, schedule next update
      if (elapsed < duration) {
        // Update progress bar every second
        clearInterval(window.spotifyProgressInterval);
        window.spotifyProgressInterval = setInterval(() => {
          const newElapsed = Date.now() - start;
          const newProgress = Math.min(
            100,
            Math.max(0, (newElapsed / duration) * 100)
          );

          if (newElapsed < duration) {
            progressBar.style.width = `${newProgress}%`;
            currentTime.textContent = formatTime(newElapsed);
          } else {
            clearInterval(window.spotifyProgressInterval);
            // Refresh data after song ends
            setTimeout(fetchDataAndUpdateAll, 2000);
          }
        }, 1000);
      }
    } else {
      // Not playing anything
      spotifyContainer.classList.remove("active");
      
      // Update indicator
      statusIndicator.className = "status-indicator status-offline";
      statusTitle.textContent = "Not Currently Listening";

      // Set default album icon
      spotifyAlbum.innerHTML = `
          <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(30, 215, 96, 0.2)">
            <i class="fab fa-spotify fa-lg" style="color:#1ED760"></i>
          </div>
        `;

      // Update track info
      spotifyTrack.textContent = "Not playing";
      spotifyArtist.textContent = "Not listening to anything";

      // Reset progress
      progressBar.style.width = "0%";
      currentTime.textContent = "0:00";
      totalTime.textContent = "0:00";

      // Clear any existing intervals
      clearInterval(window.spotifyProgressInterval);
    }
  }
  
  // Set error state for all components
  function setErrorState() {
    // Discord profile error
    document.getElementById("discord-username").textContent = "Connection Error";
    document.getElementById("discord-id").textContent = "Could not fetch data";
    document.getElementById("discord-status-dot").className = "status-indicator status-offline";
    document.getElementById("discord-status-text").textContent = "Unknown";
    
    // Activities error
    document.getElementById("activities-list").innerHTML = 
      '<div class="error-message">Could not load activities. Check console for details.</div>';
    
    // Spotify error state
    const spotifyContainer = document.getElementById("spotify-container");
    const spotifyAlbum = document.getElementById("spotify-album");
    const spotifyTrack = document.getElementById("spotify-track");
    const spotifyArtist = document.getElementById("spotify-artist");

    spotifyContainer.classList.add("error");

    // Set default album icon with error state
    spotifyAlbum.innerHTML = `
        <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(255, 99, 71, 0.2)">
          <i class="fas fa-exclamation-circle fa-lg" style="color:tomato"></i>
        </div>
      `;

    spotifyTrack.textContent = "Connection error";
    spotifyArtist.textContent = "Check console for details";
  }

  // Initial fetch
  fetchDataAndUpdateAll();

  // Update every second, but avoid full refreshes
  setInterval(fetchDataAndUpdateAll, 1000);
}

// Default avatar function (if original is not defined)
function setDefaultAvatar() {
  const avatarContainer = document.getElementById("profileAvatar");
  if (avatarContainer) {
    avatarContainer.innerHTML = `
      <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(108, 99, 255, 0.2)">
        <i class="fas fa-user fa-lg" style="color:var(--accent-color)"></i>
      </div>
    `;
  }
}