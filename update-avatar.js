const fs = require('fs');

// Use dynamic import for node-fetch
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

fetch("https://api.lanyard.rest/v1/users/468465290531962900")
 .then((res) => res.json())
 .then((data) => {
    if (data.success) {
      const userId = data.data.discord_user.id;
      const avatarHash = data.data.discord_user.avatar;
      const avatarUrl = `https://cdn.discordapp.com/avatars/${userId}/${avatarHash}`;

      // Read the index.html file
      fs.readFile('index.html', 'utf8', function(err, data) {
        if (err) {
          return console.log(err);
        }
        // Dynamically find and update the og:image content attribute with the new avatar URL
        const ogImageRegex = /<meta property="og:image" content="[^"]*">/;
        const updatedContent = data.replace(ogImageRegex, `<meta property="og:image" content="${avatarUrl}">`);

        // Write the updated content back to index.html
        fs.writeFile('index.html', updatedContent, 'utf8', function(err) {
          if (err) return console.log(err);
        });
      });
    } else {
      console.error("Error fetching avatar data.");
    }
 })
 .catch((error) => {
    console.error("Error fetching from Lanyard API:", error);
 });
