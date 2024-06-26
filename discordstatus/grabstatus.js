document.addEventListener('DOMContentLoaded', function() {
    function fetchDataAndUpdateUI() {
        fetch('https://api.lanyard.rest/v1/users/468465290531962900')
            .then(response => response.json())
            .then(data => {
                const discordUser = data.data.discord_user;
                const badgeContainer = document.querySelector('.badge-container');
                const badgeUrls = [
                    "https://raw.githubusercontent.com/cnrad/lanyard-profile-readme/main/public/assets/badges/House_Bravery.png",
                    "https://raw.githubusercontent.com/cnrad/lanyard-profile-readme/main/public/assets/badges/Active_Developer.png",
                    "https://raw.githubusercontent.com/cnrad/lanyard-profile-readme/main/public/assets/badges/Nitro.png",
                ];

                badgeContainer.innerHTML = '';

                badgeUrls.forEach(url => {
                    const badgeImg = document.createElement('img');
                    badgeImg.src = url;
                    badgeImg.alt = "Badge";
                    badgeImg.classList.add('badge');
                    badgeContainer.appendChild(badgeImg);
                });

                const discordAvatar = document.querySelector('.discord-avatar');
                discordAvatar.src = `https://cdn.discordapp.com/avatars/${discordUser.id}/${discordUser.avatar}.png`;

                const onlineStatus = data.data.discord_status;
                switch (onlineStatus) {
                    case 'online':
                        discordAvatar.style.border = '4px solid #23a55a'; 
                        break;
                    case 'idle':
                        discordAvatar.style.border = '4px solid #f0b232'; 
                        break;
                    case 'dnd':
                        discordAvatar.style.border = '4px solid #f13f43'; 
                        break;
                    case 'streaming':
                        discordAvatar.style.border = '4px solid #593695'; 
                        break;
                    default:
                        discordAvatar.style.border = '4px solid grey'; 
                }

                document.querySelector('.discord-display-name').textContent = discordUser.display_name;
                document.querySelector('.discord-username').textContent = `(${discordUser.username})`;

                const statusText = document.querySelector('.discord-status');
                switch (onlineStatus) {
                    case 'online':
                        statusText.textContent = 'Online';
                        setActivityOpacity(1);
                        break;
                    case 'idle':
                        statusText.textContent = 'Away';
                        setActivityOpacity(1);
                        break;
                    case 'dnd':
                        statusText.textContent = 'Do Not Disturb';
                        setActivityOpacity(1);
                        break;
                    case 'streaming':
                        statusText.textContent = 'Currently Live';
                        setActivityOpacity(1);
                        break;
                    default:
                        statusText.textContent =  'Offline';
                        setActivityOpacity(0);
                        return;
                }

                document.querySelector('.discord-custom-status').textContent = data.data.activities.find(activity => activity.type === 4)?.state || '';

                const activityList = document.querySelector('.activity-list');

                const otherActivities = data.data.activities.filter(activity => activity.type !== 4 && activity.name !== 'Spotify');
                activityList.innerHTML = '';
                otherActivities.forEach(activity => {
                    const state = activity.state ? ` - ${activity.state}` : '';
                    const timestamps = activity.timestamps;
                    const elapsedTime = timestamps ? ` - ${calculateElapsedTime(timestamps.start)} elapsed`  : '';
                    const description = activity.details ? ` - ${activity.details}` : '';
                    const listItem = document.createElement('li');
                    listItem.textContent = `${activity.name}${description}${state}${elapsedTime}`;
                    activityList.appendChild(listItem);
                });

                const spotifyActivities = data.data.activities.filter(activity => activity.name === 'Spotify');
                spotifyActivities.forEach(spotifyActivity => {
                    const startTime = spotifyActivity.timestamps.start;
                    const currentTime = new Date().getTime();

                    const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);

                    const elapsedMinutes = Math.floor(elapsedTimeInSeconds / 60);
                    const elapsedSeconds = elapsedTimeInSeconds % 60;

                    const songLengthInSeconds = Math.floor((spotifyActivity.timestamps.end - startTime) / 1000);

                    const songLengthMinutes = Math.floor(songLengthInSeconds / 60);
                    const songLengthSeconds = songLengthInSeconds % 60;

                    const listItem = document.createElement('li');
                    listItem.textContent = `Spotify - ${spotifyActivity.details} on ${spotifyActivity.assets.large_text} by ${spotifyActivity.state} (${elapsedMinutes}:${elapsedSeconds < 10 ? '0' + elapsedSeconds : elapsedSeconds} / ${songLengthMinutes}:${songLengthSeconds < 10 ? '0' + songLengthSeconds : songLengthSeconds})`;
                    activityList.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }

    function calculateElapsedTime(startTime) {
        const currentTime = new Date().getTime();
        const elapsedTimeInSeconds = Math.floor((currentTime - startTime) / 1000);
        const days = Math.floor(elapsedTimeInSeconds / (3600 * 24));
        const hours = Math.floor((elapsedTimeInSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((elapsedTimeInSeconds % 3600) / 60);
        const seconds = elapsedTimeInSeconds % 60;

        let elapsedTimeString = '';

        if (days > 0) {
            elapsedTimeString = `${days} day${days > 1 ? 's' : ''}`;
        } else if (hours > 0) {
            elapsedTimeString = `${hours} hour${hours > 1 ? 's' : ''}`;
        } else if (minutes > 0) {
            elapsedTimeString = `${minutes} minute${minutes > 1 ? 's' : ''}`;
        } else {
            elapsedTimeString = `${seconds} second${seconds > 1 ? 's' : ''}`;
        }

        return elapsedTimeString;
    }

    function setActivityOpacity(opacity) {
        const activitiesDiv = document.querySelector('.activities');
        activitiesDiv.style.opacity = opacity;
    }

    fetchDataAndUpdateUI();
    setInterval(fetchDataAndUpdateUI, 1000);
});
