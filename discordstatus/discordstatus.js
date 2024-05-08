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
      footerBackgroundColor: "#222",
      footerColor: "#c5c5c5",
      discordBackground: "#222",
      discordForeground: "#c5c5c5",
    },
    {
      background: "#000",
      foreground: "#fff",
      navLinkColor: "#fff",
      navLinkHoverColor: "#ccc",
      footerBackgroundColor: "#000",
      footerColor: "#fff",
      discordBackground: "#000",
      discordForeground: "#fff",
    },
    {
      background: "#f5f5f5",
      foreground: "#666666",
      navLinkColor: "#666666",
      navLinkHoverColor: "#999999",
      footerBackgroundColor: "#e0e0e0",
      footerColor: "#666666",
      discordBackground: "#e0e0e0",
      discordForeground: "#666666",
    },
    {
      background: "#f80081",
      foreground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#c10055",
      footerColor: "#e6e6e6",
      discordBackground: "#c10055",
      discordForeground: "#e6e6e6",
    },
    {
      background: "#0077cc",
      foreground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#005299",
      footerColor: "#e6e6e6",
      discordBackground: "#005299",
      discordForeground: "#e6e6e6",
    },
    {
      background: "#7fff00",
      foreground: "#333333",
      navLinkColor: "#333333",
      navLinkHoverColor: "#666666",
      footerBackgroundColor: "#5cb85c",
      footerColor: "#333333",
      discordBackground: "#5cb85c",
      discordForeground: "#333333",
    },
    {
      background: "#ffdd00",
      foreground: "#333333",
      navLinkColor: "#333333",
      navLinkHoverColor: "#666666",
      footerBackgroundColor: "#e6c300",
      footerColor: "#333333",
      discordBackground: "#e6c300",
      discordForeground: "#333333",
    },
    {
      background: "#b76eff",
      foreground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#9a42e6",
      footerColor: "#e6e6e6",
      discordBackground: "#9a42e6",
      discordForeground: "#e6e6e6",
    },
    {
      background: "#ff6b6b",
      foreground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#ff4040",
      footerColor: "#e6e6e6",
      discordBackground: "#ff4040",
      discordForeground: "#e6e6e6",
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
  
    const footer = document.querySelector("footer");
    footer.style.backgroundColor = scheme.footerBackgroundColor;
    footer.style.color = scheme.footerColor;
  
    // Update Discord Profile
    const discordProfile = document.querySelector(".discord-profile");
    discordProfile.style.backgroundColor = scheme.discordBackground;
  
    // Update all text within Discord Profile
    const discordTextElements = document.querySelectorAll(".discord-profile *:not(.discord-avatar)");
    discordTextElements.forEach((element) => {
      element.style.color = scheme.discordForeground;
    });
  
    // Update navigation link hover colors
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = scheme.navLinkHoverColor;
      });
      link.addEventListener("mouseout", function () {
        link.style.color = scheme.navLinkColor;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const savedSchemeIndex = getCookie("currentSchemeIndex");
    if (savedSchemeIndex !== null) {
      currentSchemeIndex = parseInt(savedSchemeIndex);
    }
  
    applyColorScheme(currentSchemeIndex);
  });