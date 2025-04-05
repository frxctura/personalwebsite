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
                    <h2 class="section-title">Status</h2>
                    <!-- Spotify Status - Placeholder -->
                    <div class="status-card">
                        <div class="status-header">
                            <span class="status-indicator status-online"></span>
                            <h3 class="status-title">Currently Listening</h3>
                        </div>
                        
                        <div class="spotify-status" id="spotify-container">
                            <div class="spotify-img" id="spotify-album">
                                <!-- Album art placeholder -->
                                <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(30, 215, 96, 0.2)">
                                    <i class="fab fa-spotify fa-lg" style="color:#1ED760"></i>
                                </div>
                            </div>
                            
                            <div class="spotify-info">
                                <div class="spotify-track" id="spotify-track">N/A</div>
                                <div class="spotify-artist" id="spotify-artist">N/A</div>
                                
                                <div class="spotify-time">
                                    <span id="current-time">1:45</span>
                                    <div class="spotify-progress">
                                        <div class="spotify-bar" id="progress-bar"></div>
                                    </div>
                                    <span id="total-time">3:30</span>
                                </div>
                            </div>
                        </div>
                        <p class="status-details" style="margin-top:10px;font-size:0.8rem;text-align:right;">
                            <i class="fab fa-spotify"></i> Data fetched from Lanyard API
                        </p>
                    </div>
                </div>
            `;
      updateSpotifyStatus();
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

// Set default avatar if API call fails
function setDefaultAvatar() {
  const avatarContainer = document.getElementById("profileAvatar");
  avatarContainer.innerHTML = '<i class="fas fa-user"></i>';
}

function updateSpotifyStatus() {
  const userId = "468465290531962900"; // My Discord user ID

  async function fetchDataAndUpdatePlayer() {
    try {
      const response = await fetch(
        `https://api.lanyard.rest/v1/users/${userId}`
      );
      const data = await response.json();

      if (!data.success) {
        throw new Error("API returned unsuccessful response");
      }

      const spotifyContainer = document.getElementById("spotify-container");
      const spotifyAlbum = document.getElementById("spotify-album");
      const spotifyTrack = document.getElementById("spotify-track");
      const spotifyArtist = document.getElementById("spotify-artist");
      const progressBar = document.getElementById("progress-bar");
      const currentTime = document.getElementById("current-time");
      const totalTime = document.getElementById("total-time");
      const statusIndicator = document.querySelector(".status-indicator");

      if (data.data.listening_to_spotify) {
        const spotify = data.data.spotify;

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
              setTimeout(fetchDataAndUpdatePlayer, 2000);
            }
          }, 1000);
        }

        // Update status title
        const statusTitle = document.querySelector(".status-title");
        if (statusTitle) {
          statusTitle.textContent = "Currently Listening";
        }
      } else {
        // Not playing anything
        spotifyContainer.classList.remove("active");

        // Set default album icon
        spotifyAlbum.innerHTML = `
            <div style="width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:rgba(30, 215, 96, 0.2)">
              <i class="fab fa-spotify fa-lg" style="color:#1ED760"></i>
            </div>
          `;

        // Update track info
        spotifyTrack.textContent = "Not playing";
        spotifyArtist.textContent = "I am currently not listening to anything";

        // Reset progress
        progressBar.style.width = "0%";
        currentTime.textContent = "0:00";
        totalTime.textContent = "0:00";

        // Clear any existing intervals
        clearInterval(window.spotifyProgressInterval);

        // Update status title
        const statusTitle = document.querySelector(".status-title");
        if (statusTitle) {
          statusTitle.textContent = "Not Currently Listening";
        }
      }
    } catch (error) {
      console.error("Error fetching Spotify data:", error);

      // Error state
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
  }

  // Initial fetch
  fetchDataAndUpdatePlayer();

  // Update every second
  setInterval(fetchDataAndUpdatePlayer, 1000);
}
