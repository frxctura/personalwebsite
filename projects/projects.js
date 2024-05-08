function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
  }

  const colorSchemes = [
    {
      background: "#191919",
      foreground: "#c5c5c5",
      projectButtonBackground: "#222",
      projectButtonFrontground: "#c5c5c5",
      projectHoverBackground: "#333",
      projectHoverFrontground: "#999",
      navLinkColor: "#c5c5c5",
      navLinkHoverColor: "#666",
      footerBackgroundColor: "#222",
      footerColor: "#c5c5c5",
    },
    {
      background: "#000",
      foreground: "#fff",
      projectButtonBackground: "#000",
      projectButtonFrontground: "#fff",
      projectHoverBackground: "#111",
      projectHoverFrontground: "#ccc",
      navLinkColor: "#fff",
      navLinkHoverColor: "#ccc",
      footerBackgroundColor: "#000",
      footerColor: "#fff",
    },
    {
      background: "#f5f5f5",
      foreground: "#666666",
      projectButtonBackground: "#e0e0e0",
      projectButtonFrontground: "#666666",
      projectHoverBackground: "#cccccc",
      projectHoverFrontground: "#999999",
      navLinkColor: "#666666",
      navLinkHoverColor: "#999999",
      footerBackgroundColor: "#e0e0e0",
      footerColor: "#666666",
    },
    {
      background: "#f80081",
      foreground: "#e6e6e6",
      projectButtonBackground: "#c10055",
      projectButtonFrontground: "#e6e6e6",
      projectHoverBackground: "#ff0055",
      projectHoverFrontground: "#ffffff",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#c10055",
      footerColor: "#e6e6e6",
    },
    {
      background: "#0077cc",
      foreground: "#e6e6e6",
      projectButtonBackground: "#005299",
      projectButtonFrontground: "#e6e6e6",
      projectHoverBackground: "#3385ff",
      projectHoverFrontground: "#ffffff",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#005299",
      footerColor: "#e6e6e6",
    },
    {
      background: "#7fff00",
      foreground: "#333333",
      projectButtonBackground: "#5cb85c",
      projectButtonFrontground: "#333333",
      projectHoverBackground: "#80ff5e",
      projectHoverFrontground: "#666666",
      navLinkColor: "#333333",
      navLinkHoverColor: "#666666",
      footerBackgroundColor: "#5cb85c",
      footerColor: "#333333",
    },
    {
      background: "#ffdd00",
      foreground: "#333333",
      projectButtonBackground: "#e6c300",
      projectButtonFrontground: "#333333",
      projectHoverBackground: "#ffec3d",
      projectHoverFrontground: "#666666",
      navLinkColor: "#333333",
      navLinkHoverColor: "#666666",
      footerBackgroundColor: "#e6c300",
      footerColor: "#333333",
    },
    {
      background: "#b76eff",
      foreground: "#e6e6e6",
      projectButtonBackground: "#9a42e6",
      projectButtonFrontground: "#e6e6e6",
      projectHoverBackground: "#d280ff",
      projectHoverFrontground: "#ffffff",
      navLinkColor: "#e6e6e6",
      navLinkHoverColor: "#ffffff",
      footerBackgroundColor: "#9a42e6",
      footerColor: "#e6e6e6",
    },
    {
      background: "#ff6b6b",
      foreground: "#e6e6e6",
      projectButtonBackground: "#ff4040",
      projectButtonFrontground: "#e6e6e6",
      projectHoverBackground: "#ff7a7a",
      projectHoverFrontground: "#ffffff",
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
      link.style.borderRight = `1px solid ${scheme.navLinkColor}`; 
    });

    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.style.borderBottom = `1px solid ${scheme.navLinkColor}`; // Add border-bottom
    });
    
    const footer = document.querySelector("footer");
    footer.style.backgroundColor = scheme.footerBackgroundColor;
    footer.style.color = scheme.footerColor;
    
  
    // Apply hover styles using CSS classes
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        link.style.color = scheme.navLinkHoverColor;
      });
      link.addEventListener("mouseout", function () {
        link.style.color = scheme.navLinkColor;
      });
    });

    // Apply hover styles using CSS classes
    projectButtons.forEach((link) => {
        link.addEventListener("mouseover", function () {
          link.style.color = scheme.projectHoverFrontground;
          link.style.backgroundColor = scheme.projectHoverBackground
        });
        link.addEventListener("mouseout", function () {
          link.style.color = scheme.projectButtonFrontground;
          link.style.backgroundColor = scheme.projectButtonBackground
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