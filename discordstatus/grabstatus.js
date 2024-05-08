document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.lanyard.rest/v1/users/468465290531962900')
        .then(response => response.json())
        .then(data => {
            const discordUser = data.data.discord_user;
            const activities = data.data.activities;
            const spotifyActivities = activities.filter(activity => activity.name === 'Spotify');
            const otherActivities = activities.filter(activity => activity.type !== 4 && activity.name !== 'Spotify');

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
                    break;
                case 'idle':
                    statusText.textContent = 'Away';
                    break;
                case 'dnd':
                    statusText.textContent = 'Do Not Disturb';
                    break;
                case 'streaming':
                    statusText.textContent = 'Currently Live';
                    break;
                default:
                    statusText.textContent =  'Offline';
                    const activitiesDiv = document.querySelector('.activities');
                    activitiesDiv.parentNode.removeChild(activitiesDiv);
                    return;
            }

            document.querySelector('.discord-custom-status').textContent = data.data.activities.find(activity => activity.type === 4)?.state || '';

            const activityList = document.querySelector('.activity-list');

            otherActivities.forEach(activity => {
                const state = activity.state ? ` - ${activity.state}` : '';
                const timestamps = activity.timestamps;
                const elapsedTime = timestamps ? ` - ${calculateElapsedTime(timestamps.start)} elapsed`  : '';
                const description = activity.details ? ` - ${activity.details}` : '';
                const listItem = document.createElement('li');
                listItem.textContent = `${activity.name}${description}${state}${elapsedTime}`;
                activityList.appendChild(listItem);
            });

            spotifyActivities.forEach(spotifyActivity => {
                const listItem = document.createElement('li');
                listItem.textContent = `Spotify - ${spotifyActivity.details} on ${spotifyActivity.assets.large_text} by ${spotifyActivity.state}`;
                activityList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});

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