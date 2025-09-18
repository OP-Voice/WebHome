// ===================================
// OVERLAND PARK VOICE - SHARED COMPONENTS
// ===================================
// This file contains all the repeated HTML components (header, footer, etc.)
// and it updates across all pages automatically!

// Load shared CSS styles from external files
function loadSharedStyles() {
  // Check if styles are already loaded
  if (document.getElementById("op-voice-shared-styles")) {
        return;
    }
    
  const currentPath = window.location.pathname;
  const isInResearchFolder = currentPath.includes("/research/");
  const basePath = isInResearchFolder ? "../" : "";

  // Load hero animations CSS
  const heroStyles = document.createElement("link");
  heroStyles.rel = "stylesheet";
  heroStyles.href = `${basePath}assets/css/hero-animations.css`;
  heroStyles.id = "op-voice-hero-styles";
  document.head.appendChild(heroStyles);

  // Load shared styles CSS
  const sharedStyles = document.createElement("link");
  sharedStyles.rel = "stylesheet";
  sharedStyles.href = `${basePath}assets/css/shared-styles.css`;
  sharedStyles.id = "op-voice-shared-styles";
  document.head.appendChild(sharedStyles);
}

// Load shared head template and replace placeholders
function loadSharedHead(pageConfig) {
  // Check if head is already processed
  if (document.getElementById("op-voice-shared-head")) {
    console.log('Shared head already loaded');
    return;
  }

  const currentPath = window.location.pathname;
  const isInResearchFolder = currentPath.includes("/research/");
  const basePath = isInResearchFolder ? "../" : "";

  console.log('Loading shared head template from:', `${basePath}assets/templates/shared-head.html`);

  // Fetch the shared head template
  fetch(`${basePath}assets/templates/shared-head.html`)
    .then(response => {
      console.log('Template fetch response:', response);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
    .then(template => {
      console.log('Template loaded, length:', template.length);

      // Replace placeholders with page-specific content
      let processedTemplate = template
        .replace(/{{PAGE_TITLE}}/g, pageConfig.title)
        .replace(/{{PAGE_DESCRIPTION}}/g, pageConfig.description)
        .replace(/{{PAGE_KEYWORDS}}/g, pageConfig.keywords)
        .replace(/{{PAGE_URL}}/g, pageConfig.url);

      console.log('Processed template length:', processedTemplate.length);

      // Insert the processed template into the head
      document.head.insertAdjacentHTML('afterbegin', processedTemplate);

      // Mark head as processed
      const marker = document.createElement('meta');
      marker.id = 'op-voice-shared-head';
      marker.name = 'op-voice-shared-head-processed';
      marker.content = 'true';
      document.head.appendChild(marker);

      console.log('Shared head template loaded successfully');
    })
    .catch(error => {
      console.error('Failed to load shared head template:', error);

      // Fallback: Load essential head content directly
      loadFallbackHead(pageConfig);
    });
}

// Fallback function to load essential head content if template fails
function loadFallbackHead(pageConfig) {
  console.log('Loading fallback head content');

  const fallbackHead = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageConfig.title}</title>
    <meta name="description" content="${pageConfig.description}" />
    <meta name="keywords" content="${pageConfig.keywords}" />
    <meta name="author" content="Overland Park Voice" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${pageConfig.url}" />
    <meta property="og:title" content="${pageConfig.title}" />
    <meta property="og:description" content="${pageConfig.description}" />
    <meta property="og:image" content="https://opvoice.org/assets/images/logos/OPVoiceLogo_v-1.14.png" />

    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>

    <!-- Font loading -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="assets/images/logos/OPVoiceLogoCROP_v-1.14.png" />

    <!-- Load external CSS files -->
    <link rel="stylesheet" href="assets/css/hero-animations.css" />
    <link rel="stylesheet" href="assets/css/shared-styles.css" />
  `;

  document.head.insertAdjacentHTML('afterbegin', fallbackHead);

  // Mark head as processed
  const marker = document.createElement('meta');
  marker.id = 'op-voice-shared-head';
  marker.name = 'op-voice-shared-head-processed';
  marker.content = 'fallback';
  document.head.appendChild(marker);

  console.log('Fallback head content loaded');
}

// Get current page filename for navigation highlighting
function getCurrentPage() {
    const path = window.location.pathname;
    console.log('Current pathname:', path);
  const filename = path.split("/").pop() || "index.html";
    console.log('Extracted filename:', filename);
    
    // Handle research pages - treat them as separate from main navigation
  if (path.includes("/research/")) {
        return filename; // Return just the filename, not the full path
    }
    
    return filename;
}

// Generate navigation HTML with current page highlighting
function generateNavigation() {
    const currentPage = getCurrentPage();
    const currentPath = window.location.pathname;
  const isInResearchFolder = currentPath.includes("/research/");
    
    // Adjust link paths if we're in the research folder
  const basePath = isInResearchFolder ? "../" : "";
    
    // Don't show Home link if we're on the home page (but show it when in research folder)
  const homeLink =
    (currentPage !== "index.html" && currentPage !== "") || isInResearchFolder
      ? `<a href="${basePath}index.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium whitespace-nowrap">Home</a>`
      : "";

  const missionLink =
    currentPage !== "mission.html"
      ? `<a href="${basePath}mission.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium whitespace-nowrap">Our Mission</a>`
      : "";

  const initiativesLink =
    currentPage !== "initiatives.html"
      ? `<a href="${basePath}initiatives.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium whitespace-nowrap">Our Initiatives</a>`
      : "";

  const launchLink =
    currentPage !== "launch.html"
      ? `<a href="${basePath}launch.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium whitespace-nowrap">Community Launchpad</a>`
      : "";

  const localinfoLink =
    currentPage !== "localinfo.html"
      ? `<a href="${basePath}localinfo.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium whitespace-nowrap">Local Info</a>`
      : "";

const updatesLink =
    currentPage !== "updates.html"
      ? `<a href="${basePath}updates.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium whitespace-nowrap">News</a>`
      : "";
    
    // Build navigation with proper spacing
  const navItems = [
    homeLink,
    missionLink,
    initiativesLink,
    launchLink,
    localinfoLink,
    updatesLink,
  ]
        .filter(link => link) // Remove empty strings
    .join("\n                    ");
    
    return `
                <nav class="hidden md:flex items-center space-x-4 lg:space-x-6 flex-nowrap">
                    ${navItems}
                    <div class="w-px h-5 bg-neutral-300 mx-2 flex-shrink-0"></div>
                    <a href="${basePath}index.html#get-involved" class="cta-button text-white px-4 py-2 rounded-full font-semibold transition-all text-sm whitespace-nowrap flex-shrink-0">Join Us</a>
                </nav>`;
}

// Generate mobile navigation HTML
function generateMobileNavigation() {
    const currentPage = getCurrentPage();
    const currentPath = window.location.pathname;
  const isInResearchFolder = currentPath.includes("/research/");
    
    // Adjust link paths if we're in the research folder
  const basePath = isInResearchFolder ? "../" : "";

  const homeLink =
    (currentPage !== "index.html" && currentPage !== "") || isInResearchFolder
      ? `<a href="${basePath}index.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Home</a>`
      : "";

  const missionLink =
    currentPage !== "mission.html"
      ? `<a href="${basePath}mission.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Our Mission</a>`
      : "";

  const initiativesLink =
    currentPage !== "initiatives.html"
      ? `<a href="${basePath}initiatives.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Our Initiatives</a>`
      : "";

  const launchLink =
    currentPage !== "launch.html"
      ? `<a href="${basePath}launch.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Community Launchpad</a>`
      : "";

  const localinfoLink =
    currentPage !== "localinfo.html"
      ? `<a href="${basePath}localinfo.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Local Info</a>`
      : "";

  const updatesLink =
    currentPage !== "updates.html"
      ? `<a href="${basePath}updates.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">News</a>`
      : "";

  const navItems = [
    homeLink,
    missionLink,
    initiativesLink,
    launchLink,
    localinfoLink,
    updatesLink,
  ]
        .filter(link => link)
    .join("\n                ");
    
    return `
            <div class="px-6 py-4 space-y-1">
                ${navItems}
                <div class="pt-2 mt-2 border-t border-neutral-100">
                    <a href="${basePath}index.html#get-involved" class="block cta-button text-white text-center px-5 py-2 rounded-lg font-semibold text-sm">Join Us</a>
                </div>
            </div>`;
}

// STICKY HEADER HTML - Complete header component
function generateStickyHeaderHTML() {
    const currentPath = window.location.pathname;
  const isInResearchFolder = currentPath.includes("/research/");
  const basePath = isInResearchFolder ? "../" : "";
    
    return `
    <header class="sticky-header fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm transition-all duration-300">
        <div class="container mx-auto px-6 py-2">
            <div class="flex items-center justify-between min-w-0">
                <div class="flex items-center space-x-3 flex-shrink-0">
                    <img src="${basePath}assets/images/logos/OPVoiceLogoCROP_v-1.14.png" alt="Overland Park Voice Logo" class="w-8 h-8">
                    <a href="${basePath}index.html" class="text-xl font-bold logo-gradient hover:opacity-80 transition-opacity whitespace-nowrap">Overland Park Voice</a>
                </div>
                <div id="desktop-nav-placeholder" class="flex-shrink-0"></div>
                <div class="md:hidden">
                    <button id="sticky-mobile-menu-button" class="text-brand-dark-green focus:outline-none p-2 rounded-lg hover:bg-brand-light-green/10 transition-colors">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile Menu for Sticky Header -->
        <div id="sticky-mobile-menu" class="hidden md:hidden bg-white shadow-lg border-t border-neutral-200">
            <div id="mobile-nav-placeholder"></div>
        </div>
    </header>
`;
}

// FOOTER HTML - Complete footer component  
function generateFooterHTML() {
    const currentPath = window.location.pathname;
  const isInResearchFolder = currentPath.includes("/research/");
  const basePath = isInResearchFolder ? "../" : "";
    
    return `
    <footer class="bg-brand-gray py-8">
        <div class="container mx-auto px-6 text-center text-neutral-600">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                 <div class="flex items-center space-x-2">
                    <img src="${basePath}assets/images/logos/OPVoiceLogoCROP_v-1.14.png" alt="Overland Park Voice Logo" class="w-6 h-6">
                    <span class="font-bold text-brand-dark-green">OPVOICE.ORG</span>
                </div>
                <div class="flex flex-col items-center space-y-2">
                    <p>&copy; 2025 Overland Park Voice. All Rights Reserved.</p>
                    <div class="flex justify-center space-x-4">
                        <a href="https://x.com/VoiceOf_OP" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-brand-light-green transition-colors" aria-label="Follow us on X (Twitter)">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61578842542286" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-brand-light-green transition-colors" aria-label="Follow us on Facebook">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-brand-light-green transition-colors" aria-label="Join our Discord">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0002 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9554 2.4189-2.1568 2.4189Z"/></svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-brand-light-green transition-colors" aria-label="Join our Reddit community">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer" class="text-neutral-500 hover:text-brand-light-green transition-colors" aria-label="Subscribe to our YouTube channel">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                    </div>
                </div>
                 <div class="flex justify-center space-x-4">
                    <a href="#" id="privacy-policy-link" class="text-neutral-500 hover:text-brand-light-green">Privacy Policy</a>
                    <a href="${basePath}index.html#get-involved" class="text-neutral-500 hover:text-brand-light-green">Contact Us</a>
                </div>
            </div>
        </div>
    </footer>
`;
}

// WIP BANNER CONFIGURATION
// Add or modify banners for specific pages here
const WIP_BANNERS = {
  "index.html": {
        title: "Work in Progress: This site is currently under construction.",
    message:
      "We're building our platform for meaningful community engagement. Have ideas or want to get involved? We'd love to hear from you.",
    },
  "mission.html": {
        title: "Mission Content: Being Expanded",
    message:
      "Our core mission is established, but we're adding more detailed information about our approach and impact.",
    },
  "initiatives.html": {
        title: "Work in Progress: Our initiatives are actively developing",
    message:
      "Content will be updated as our advocacy efforts progress and take shape.",
    },
  "launch.html": {
        title: "Community Launchpad: Building Our Tools",
    message:
      "We're developing the resources and processes to help residents launch their advocacy efforts.",
    },
  "localinfo.html": {
        title: "Local Information: Verifying All Data Sources",
    message:
      "We're verifying all government contacts and information with official sources. Visit the <a href='https://www.opkansas.org/city-government/' target='_blank' rel='noopener noreferrer' class='underline hover:no-underline font-semibold'>official city government page</a> for the most current information. Found something incorrect? Please let us know!",
    },
  "updates.html": {
        title: "News Section: Coming Soon",
    message:
      "We'll share updates about our progress, upcoming events, and civic opportunities.",
  },
};

// WIP BANNER HTML Generator
function generateWIPBanner() {
    const currentPage = getCurrentPage();
    console.log('Generating WIP banner for page:', currentPage);
    const banner = WIP_BANNERS[currentPage];
    
    if (!banner) {
        console.log('No banner found for page:', currentPage);
        return "";
    }

    console.log('Found banner for', currentPage, ':', banner.title);
    
    // Remove margin since header positioning handles spacing
    const marginClass = "";
    
    return `
        <div id="wip-banner" class="bg-warn-300 text-warn-800 text-center py-4 px-6 ${marginClass}">
            <div class="flex items-center justify-center space-x-2 text-base mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span class="font-semibold">${banner.title}</span>
            </div>
            <div class="max-w-3xl mx-auto">
                <p class="text-sm font-medium">${banner.message}</p>
            </div>
        </div>
    `;
}

// MAIN INITIALIZATION FUNCTION
// This runs when the page loads and sets up all the shared components
function initializeSharedComponents() {
  console.log('Initializing shared components...');

  // Load shared styles from external files
  loadSharedStyles();
    
    // Force disable animations on mobile devices via JavaScript
  if (
    window.innerWidth <= 767 ||
    /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    const style = document.createElement("style");
        style.textContent = `
            .hero-bg::before,
            .hero-bg::after {
                animation: none !important;
                transform: none !important;
                filter: none !important;
                transition: none !important;
            }
        `;
        document.head.appendChild(style);
        
        // Also remove any existing animations via JavaScript
        setTimeout(() => {
      const heroElements = document.querySelectorAll(
        ".hero-bg::before, .hero-bg::after, .hero-bg"
      );
            heroElements.forEach(el => {
                if (el.style) {
          el.style.animation = "none";
          el.style.transform = "none";
          el.style.filter = "none";
                }
            });
        }, 100);
    }
    
    // Insert header if placeholder exists
  const headerPlaceholder = document.getElementById("header-placeholder");
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = generateStickyHeaderHTML();
        
        // Wait for DOM to update before populating navigation
        setTimeout(() => {
            // Insert navigation into header
      const desktopNavPlaceholder = document.getElementById(
        "desktop-nav-placeholder"
      );
            if (desktopNavPlaceholder) {
                desktopNavPlaceholder.innerHTML = generateNavigation();
            }
            
            // Insert mobile navigation
      const mobileNavPlaceholder = document.getElementById(
        "mobile-nav-placeholder"
      );
            if (mobileNavPlaceholder) {
                mobileNavPlaceholder.innerHTML = generateMobileNavigation();
            }
            
            // Set up mobile menu functionality for sticky header
            setupMobileMenuToggle();
            
            // Header visibility is now handled by setupIndexPageStickyHeader() function
            // which considers WIP banner position differences between pages
        }, 0);

        // Setup header positioning based on WIP banner location (different per page)
        // setupIndexPageStickyHeader(); // This line is removed as per the edit hint
    }
    
    // Insert footer if placeholder exists
  const footerPlaceholder = document.getElementById("footer-placeholder");
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooterHTML();

        // Initialize privacy policy modal after footer is loaded
        if (window.PrivacyPolicyModal) {
            window.PrivacyPolicyModal.addTrigger('#privacy-policy-link');
        }
    }
    
    // Insert WIP banner if placeholder exists
  const wipPlaceholder = document.getElementById("wip-banner-placeholder");
    if (wipPlaceholder) {
        const bannerHTML = generateWIPBanner();
        console.log('Inserting WIP banner HTML:', bannerHTML.substring(0, 100) + '...');
        wipPlaceholder.innerHTML = bannerHTML;

        // Verify the banner was inserted
        setTimeout(() => {
            const insertedBanner = document.getElementById("wip-banner");
            if (insertedBanner) {
                console.log('WIP banner successfully inserted with ID');
            } else {
                console.log('WIP banner insertion failed - no element with ID found');
            }
        }, 10);
    } else {
        console.log('WIP banner placeholder not found');
    }
    
    // Setup header positioning AFTER WIP banner is inserted
    setTimeout(() => {
        setupHeaderVisibility();
    }, 50);
    
  // Final check for index page header visibility
  const finalCurrentPage = getCurrentPage();
  if (finalCurrentPage === "index.html" || finalCurrentPage === "") {
    const finalHeader = document.querySelector(".sticky-header");
    if (finalHeader) {
      finalHeader.classList.remove("hidden");
      finalHeader.style.transform = "translateY(0)";
      finalHeader.style.opacity = "1";
      document.body.classList.add("has-sticky-header");
      console.log('Final check: Index page header forced visible');
    }
  }

  // eslint-disable-next-line no-console
  console.log("✅ Shared components initialized for:", finalCurrentPage);
}

// Mobile menu toggle functionality
function setupMobileMenuToggle() {
  const stickyMobileMenuButton = document.getElementById(
    "sticky-mobile-menu-button"
  );
  const stickyMobileMenu = document.getElementById("sticky-mobile-menu");
    
    if (stickyMobileMenuButton && stickyMobileMenu) {
    stickyMobileMenuButton.addEventListener("click", () => {
      stickyMobileMenu.classList.toggle("hidden");
        });
    }
}

/**
 * Privacy Policy Modal Module
 *
 * This module provides a modal overlay for displaying the privacy policy.
 */
class PrivacyPolicyModal {
    constructor() {
        this.modalId = 'privacy-policy-modal';
        this.isInitialized = false;
    }

    /**
     * Create and inject the modal HTML into the page
     */
    createModal() {
        if (document.getElementById(this.modalId)) {
            return; // Modal already exists
        }

        const modalHTML = `
            <div id="${this.modalId}" class="hidden fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
                <div class="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] flex flex-col border-4 border-brand-light-green">
                    <!-- Modal Header -->
                    <div class="flex justify-between items-center p-4 border-b border-neutral-200 bg-brand-light-green text-white rounded-t-lg">
                        <h2 class="text-xl font-bold">Privacy Policy</h2>
                        <button id="close-${this.modalId}" class="text-white hover:text-neutral-200 text-3xl leading-none">&times;</button>
                    </div>
                    <!-- Modal Body -->
                    <div class="flex-1 overflow-y-auto">
                        <div class="p-6">
                            <div class="text-center mb-6">
                                <p class="text-neutral-600 mb-4">*Last updated: July 07, 2025*</p>
                                <p class="text-sm text-neutral-500">Overland Park Voice ("us", "we", or "our") operates the opvoice.org website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.</p>
                            </div>

                            <div class="prose prose-lg max-w-none">
                                <h3 class="text-lg font-semibold text-brand-dark-green mb-3">Information We Collect</h3>
                                <p class="mb-4">Our goal is to collect as little information as possible. We do not use cookies, tracking pixels, or analytics services. The only personal information we collect is what you voluntarily provide to us.</p>

                                <h4 class="font-medium text-brand-dark-green mb-2">Contact Information</h4>
                                <p class="mb-2">When you use the contact form on our website, we collect:</p>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Message content</li>
                                </ul>
                                <p class="mb-4 text-sm">This information is collected solely for the purpose of responding to your inquiry.</p>

                                <h4 class="font-medium text-brand-dark-green mb-2">Technical Information</h4>
                                <p class="mb-2">We automatically collect certain technical information when you visit our website:</p>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li>IP address (used only for basic security and rate limiting)</li>
                                    <li>Browser type and version</li>
                                    <li>Operating system</li>
                                    <li>Referring website (if applicable)</li>
                                </ul>
                                <p class="mb-4 text-sm">This technical information is not stored permanently and is used only for website security and performance monitoring.</p>

                                <h3 class="text-lg font-semibold text-brand-dark-green mb-3">How We Use Your Information</h3>
                                <p class="mb-2">The information you provide is used only for these purposes:</p>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li><strong>Respond to inquiries</strong>: We use contact form information to respond to your questions and comments</li>
                                    <li><strong>Website security</strong>: Technical information helps us protect against abuse and maintain service availability</li>
                                    <li><strong>Service improvement</strong>: Anonymous technical data helps us identify and fix website issues</li>
                                </ul>
                                <p class="mb-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>

                                <h3 class="text-lg font-semibold text-brand-dark-green mb-3">Third-Party Services</h3>
                                <p class="mb-2">Our website relies on the following third-party services:</p>

                                <h4 class="font-medium text-brand-dark-green mb-2">Content Delivery Networks (CDNs)</h4>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li><strong>Tailwind CSS</strong>: Hosted CSS framework (cdn.tailwindcss.com)</li>
                                    <li><strong>Chart.js</strong>: JavaScript charting library (cdn.jsdelivr.net)</li>
                                    <li><strong>Chart.js Plugin</strong>: Chart annotations (cdn.jsdelivr.net)</li>
                                </ul>
                                <p class="mb-4 text-sm">These CDNs serve static files and do not collect personal information.</p>

                                <h4 class="font-medium text-brand-dark-green mb-2">Form Processing</h4>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li><strong>Formspree</strong>: Secure form processing service (formspree.io)</li>
                                </ul>
                                <p class="mb-2 text-sm">Contact form submissions are sent directly to Formspree's secure servers.</p>
                                <p class="mb-2 text-sm">Formspree forwards submissions to our email.</p>
                                <p class="mb-4 text-sm">We do not store form data on our servers.</p>

                                <h4 class="font-medium text-brand-dark-green mb-2">Social Media</h4>
                                <p class="mb-2 text-sm">Our website links to social media platforms:</p>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li><strong>X (formerly Twitter)</strong>: @VoiceOf_OP</li>
                                    <li><strong>Facebook</strong>: Overland Park Voice page</li>
                                </ul>
                                <p class="mb-4 text-sm">Clicking these links will take you to the respective platforms. We do not control their privacy practices.</p>

                                <h3 class="text-lg font-semibold text-brand-dark-green mb-3">Data Security</h3>
                                <p class="mb-2">The security of your data is important to us. We implement appropriate technical and organizational measures:</p>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li><strong>HTTPS encryption</strong> for all data transmission</li>
                                    <li><strong>Secure third-party services</strong> for form processing</li>
                                    <li><strong>No permanent data storage</strong> on our servers</li>
                                    <li><strong>Regular security updates</strong> to all services and software</li>
                                </ul>
                                <p class="mb-4">However, please remember that no method of transmission over the Internet is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>

                                <h3 class="text-lg font-semibold text-brand-dark-green mb-3">Data Retention</h3>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li><strong>Contact form data</strong>: Deleted immediately after processing your inquiry (typically within 30 days)</li>
                                    <li><strong>Technical logs</strong>: Automatically deleted within 24 hours</li>
                                    <li><strong>No long-term data storage</strong>: We do not maintain databases of personal information</li>
                                </ul>

                                <h3 class="text-lg font-semibold text-brand-dark-green mb-3">Your Rights</h3>
                                <p class="mb-2">Under applicable privacy laws (including GDPR), you have the right to:</p>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li><strong>Access</strong>: Request information about what personal data we hold about you</li>
                                    <li><strong>Rectification</strong>: Request correction of inaccurate personal data</li>
                                    <li><strong>Erasure</strong>: Request deletion of your personal data</li>
                                    <li><strong>Portability</strong>: Request transfer of your personal data</li>
                                    <li><strong>Withdraw consent</strong>: Opt out of any communications at any time</li>
                                </ul>
                                <p class="mb-4 text-sm">To exercise these rights, please contact us using the information below.</p>

                                <h3 class="text-lg font-semibold text-brand-dark-green mb-3">Contact Us</h3>
                                <p class="mb-2">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                                <ul class="list-disc pl-5 mb-4 text-sm">
                                    <li><strong>Email</strong>: overlandpark.voice@gmail.com (preferred method)</li>
                                    <li><strong>Contact Form</strong>: Use the form on our website at opvoice.org</li>
                                    <li><strong>Mail</strong>: Overland Park Voice, PO Box [Address], Overland Park, KS 66212</li>
                                </ul>
                                <p class="text-sm">We will respond to your inquiry within 5 business days.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        this.bindEvents();
        this.isInitialized = true;
    }

    /**
     * Bind event listeners for modal interaction
     */
    bindEvents() {
        const modal = document.getElementById(this.modalId);
        const closeButton = document.getElementById(`close-${this.modalId}`);

        // Close button
        if (closeButton) {
            closeButton.addEventListener('click', () => this.close());
        }

        // Click outside to close
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.close();
                }
            });
        }

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                this.close();
            }
        });
    }

    /**
     * Open the modal
     */
    open() {
        if (!this.isInitialized) {
            this.createModal();
        }

        const modal = document.getElementById(this.modalId);
        if (modal) {
            modal.classList.remove('hidden');
            document.body.classList.add('modal-open');
        }
    }

    /**
     * Close the modal
     */
    close() {
        const modal = document.getElementById(this.modalId);
        if (modal) {
            modal.classList.add('hidden');
            document.body.classList.remove('modal-open');
        }
    }

    /**
     * Add a trigger link to open the modal
     * @param {string} selector - CSS selector for the trigger element
     * @param {string} text - Text content for the link (optional)
     */
    addTrigger(selector, text = 'Privacy Policy') {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            if (text && element.textContent.trim() === '') {
                element.textContent = text;
            }
            element.style.cursor = 'pointer';
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.open();
            });
        });
    }
}

// Create global instance and set up auto-initialization
window.PrivacyPolicyModal = window.PrivacyPolicyModal || new PrivacyPolicyModal();

// Privacy policy modal is now initialized after footer is loaded (see above)

// Setup header visibility based on page type
function setupHeaderVisibility() {
    const header = document.querySelector(".sticky-header");
    const currentPage = getCurrentPage();
    const wipBanner = document.getElementById("wip-banner");

    console.log('Setting up header visibility for page:', currentPage);
    console.log('WIP banner exists:', !!wipBanner);

    if (!header) {
        console.log('Header element not found!');
        return;
    }

    if (currentPage === "index.html" || currentPage === "") {
        // Index page: WIP banner comes after hero, so use scroll-based logic
        console.log('Index page: Using scroll-based header logic');
        setupScrollBasedHeader();
    } else {
        // Other pages: WIP banner comes before main content, so header is visible from start
        console.log('Other page: Setting header visible from start');
        header.classList.remove("hidden");
        document.body.classList.add("has-sticky-header");
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
    }
}

// Setup scroll-based header for pages where WIP banner appears before main content
function setupScrollBasedHeader() {
    const header = document.querySelector(".sticky-header");
    const currentPage = getCurrentPage();

    console.log('Setup scroll-based header called for page:', currentPage);

    if (!header) {
        console.log('Header not found in setupScrollBasedHeader');
        return;
    }

    // Only hide header if this is NOT the index page
    if (currentPage !== "index.html" && currentPage !== "") {
        console.log('Hiding header for non-index page');
        header.classList.add("hidden");
    } else {
        console.log('NOT hiding header - this should be index page');
    }
    
    function updateStickyHeader() {
        const wipBanner = document.getElementById("wip-banner");

        if (wipBanner) {
            const bannerRect = wipBanner.getBoundingClientRect();
            const bannerBottom = bannerRect.bottom;

            // Header should appear when WIP banner is scrolled past the top of viewport
            if (bannerBottom <= 0) {
                header.classList.remove("hidden");
                document.body.classList.add("has-sticky-header");
            } else {
                header.classList.add("hidden");
                document.body.classList.remove("has-sticky-header");
            }
        } else {
            // Fallback: show header after some scroll
            if (window.scrollY > 100) {
                header.classList.remove("hidden");
                document.body.classList.add("has-sticky-header");
            } else {
                header.classList.add("hidden");
                document.body.classList.remove("has-sticky-header");
            }
        }
    }
    
    // Listen for scroll events
    window.addEventListener("scroll", updateStickyHeader);
    
    // Initial check
    setTimeout(updateStickyHeader, 100);
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSharedComponents);
} else {
    initializeSharedComponents();
}

// Export functions for manual use if needed
window.OPVoiceShared = {
    initializeSharedComponents,
    getCurrentPage,
    generateNavigation,
    generateMobileNavigation,
  generateWIPBanner,
};
