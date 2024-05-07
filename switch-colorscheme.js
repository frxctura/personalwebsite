function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
  }
  
  // Function to get the value of a cookie by its name
  function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
  }

const colorSchemes = [
    {
      background: "#191919",
      foreground: "#c5c5c5",
      navLinkColor: "#c5c5c5",
      navLinkHoverColor: "#666",
      avatarBorderColor: "#c5c5c5",
      footerBackgroundColor: "#222",
      footerColor: "#c5c5c5",
      changeSchemeBackgroundColor: "#222",
      changeSchemeColor: "#c5c5c5",
    },
    {
      background: "#000",
      foreground: "#fff",
      navLinkColor: "#fff",
      navLinkHoverColor: "#ccc",
      avatarBorderColor: "#fff",
      footerBackgroundColor: "#000",
      footerColor: "#fff",
      changeSchemeBackgroundColor: "#000",
      changeSchemeColor: "#fff",
    },
    {
      background: "#f5f5f5",
      foreground: "#666666",
      navLinkColor: "#666666",
      navLinkHoverColor: "#999999",
      avatarBorderColor: "#666666",
      footerBackgroundColor: "#e0e0e0",
      footerColor: "#666666",
      changeSchemeBackgroundColor: "#e0e0e0",
      changeSchemeColor: "#666666",
    },
    {
      background: "#f80081",
      foreground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      avatarBorderColor: "#e6e6e6",
      footerBackgroundColor: "#c10055",
      footerColor: "#e6e6e6",
      changeSchemeBackgroundColor: "#c10055",
      changeSchemeColor: "#e6e6e6",
    },
    {
      background: "#0077cc",
      foreground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      avatarBorderColor: "#e6e6e6",
      footerBackgroundColor: "#005299",
      footerColor: "#e6e6e6",
      changeSchemeBackgroundColor: "#005299",
      changeSchemeColor: "#e6e6e6",
    },
    {
      background: "#7fff00",
      foreground: "#333333",
      navLinkColor: "#333333",
      navLinkHoverColor: "#666666",
      avatarBorderColor: "#333333",
      footerBackgroundColor: "#5cb85c",
      footerColor: "#333333",
      changeSchemeBackgroundColor: "#5cb85c",
      changeSchemeColor: "#333333",
    },
    {
      background: "#ffdd00",
      foreground: "#333333",
      navLinkColor: "#333333",
      navLinkHoverColor: "#666666",
      avatarBorderColor: "#333333",
      footerBackgroundColor: "#e6c300",
      footerColor: "#333333",
      changeSchemeBackgroundColor: "#e6c300",
      changeSchemeColor: "#333333",
    },
    {
      background: "#b76eff",
      foreground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      avatarBorderColor: "#e6e6e6",
      footerBackgroundColor: "#9a42e6",
      footerColor: "#e6e6e6",
      changeSchemeBackgroundColor: "#9a42e6",
      changeSchemeColor: "#e6e6e6",
    },
    {
      background: "#ff6b6b",
      foreground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      avatarBorderColor: "#e6e6e6",
      footerBackgroundColor: "#ff4040",
      footerColor: "#e6e6e6",
      changeSchemeBackgroundColor: "#ff4040",
      changeSchemeColor: "#e6e6e6",
    },
  ];
  
  let currentSchemeIndex = 0;
  
  function applyColorScheme(index) {
    const scheme = colorSchemes[index];
    document.body.style.backgroundColor = scheme.background;
    document.body.style.color = scheme.foreground;
  
    const navLinks = document.querySelectorAll(".nav a");
    navLinks.forEach((link) => {
      link.style.color = scheme.navLinkColor;
    });
  
    const avatar = document.querySelector(".avatar");
    avatar.style.borderColor = scheme.avatarBorderColor;
  
    const footer = document.querySelector("footer");
    footer.style.backgroundColor = scheme.footerBackgroundColor;
    footer.style.color = scheme.footerColor;
  
    // Change changeScheme button colors
    const changeSchemeButton = document.getElementById("changeScheme");
    changeSchemeButton.style.backgroundColor = scheme.changeSchemeBackgroundColor;
    changeSchemeButton.style.color = scheme.changeSchemeColor;
  
    // Apply hover styles using CSS classes
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = scheme.navLinkHoverColor;
      });
      link.addEventListener("mouseout", function () {
        link.style.color = scheme.navLinkColor;
      });
    });
  
    // Save current color scheme index as a cookie
    setCookie("currentSchemeIndex", index, 365);
  }

document.getElementById("changeScheme").addEventListener("click", function () {
  currentSchemeIndex = (currentSchemeIndex + 1) % colorSchemes.length;
  applyColorScheme(currentSchemeIndex);
});

// Load color scheme from cookie if available
const savedSchemeIndex = getCookie("currentSchemeIndex");
if (savedSchemeIndex !== null) {
  currentSchemeIndex = parseInt(savedSchemeIndex);
}

// Apply initial color scheme
applyColorScheme(currentSchemeIndex);