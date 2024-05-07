  function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
  }

  const colorSchemes = [
    {
      background: "#191919",
      foreground: "#c5c5c5",
      socialButtonBackground: "#222",
      socialButtonFrontground: "#c5c5c5",
      navLinkColor: "#c5c5c5",
      navLinkHoverColor: "#666",
      footerBackgroundColor: "#222",
      footerColor: "#c5c5c5",
    },
    {
      background: "#000",
      foreground: "#fff",
      socialButtonBackground: "#000",
      socialButtonFrontground: "#fff",
      navLinkColor: "#fff",
      navLinkHoverColor: "#ccc",
      footerBackgroundColor: "#000",
      footerColor: "#fff",
    },
    {
      background: "#f5f5f5",
      foreground: "#666666",
      socialButtonBackground: "#e0e0e0",
      socialButtonFrontground: "#666666",
      navLinkColor: "#666666",
      navLinkHoverColor: "#999999",
      footerBackgroundColor: "#e0e0e0",
      footerColor: "#666666",
    },
    {
      background: "#f80081",
      foreground: "#e6e6e6",
      socialButtonBackground: "#c10055",
      socialButtonFrontground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#c10055",
      footerColor: "#e6e6e6",
    },
    {
      background: "#0077cc",
      foreground: "#e6e6e6",
      socialButtonBackground: "#005299",
      socialButtonFrontground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#005299",
      footerColor: "#e6e6e6",
    },
    {
      background: "#7fff00",
      foreground: "#333333",
      socialButtonBackground: "#5cb85c",
      socialButtonFrontground: "#333333",
      navLinkColor: "#333333",
      navLinkHoverColor: "#666666",
      footerBackgroundColor: "#5cb85c",
      footerColor: "#333333",
    },
    {
      background: "#ffdd00",
      foreground: "#333333",
      socialButtonBackground: "#e6c300",
      socialButtonFrontground: "#333333",
      navLinkColor: "#333333",
      navLinkHoverColor: "#666666",
      footerBackgroundColor: "#e6c300",
      footerColor: "#333333",
    },
    {
      background: "#b76eff",
      foreground: "#e6e6e6",
      socialButtonBackground: "#9a42e6",
      socialButtonFrontground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#9a42e6",
      footerColor: "#e6e6e6",
    },
    {
      background: "#ff6b6b",
      foreground: "#e6e6e6",
      socialButtonBackground: "#ff4040",
      socialButtonFrontground: "#e6e6e6",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#ff4040",
      footerColor: "#e6e6e6",
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
  
    const socialButtons = document.querySelectorAll(".social-icons a");
    socialButtons.forEach((link) => {
        link.style.color = scheme.socialButtonFrontground
        link.style.backgroundColor = scheme.socialButtonBackground
    })
    
    const footer = document.querySelector("footer");
    footer.style.backgroundColor = scheme.footerBackgroundColor;
    footer.style.color = scheme.footerColor;
    
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