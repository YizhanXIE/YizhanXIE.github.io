// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-notes",
          title: "Notes",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-numpy-basics",
        
          title: "NumPy Basics",
        
        description: "A quick reference for NumPy array operations.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/my-note/";
          
        },
      },{id: "post-从物理直觉到-n-s-方程的完整推导指南",
        
          title: "从物理直觉到 N-S 方程的完整推导指南",
        
        description: "从流体微元的受力分析出发，通过物质导数、泰勒展开与向量算子，完整推导纳维-斯托克斯方程。",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/NS-Equations/";
          
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
