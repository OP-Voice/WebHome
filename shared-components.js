// ===================================
// OVERLAND PARK VOICE - SHARED COMPONENTS
// ===================================
// This file contains all the repeated HTML components (header, footer, etc.)
// and it updates across all pages automatically!

// Inject shared CSS styles into the page
function injectSharedStyles() {
    // Check if styles are already injected
    if (document.getElementById('op-voice-shared-styles')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'op-voice-shared-styles';
    style.textContent = `
        /* ===== SHARED HERO BACKGROUND STYLES ===== */
        .hero-bg {
            position: relative;
            overflow: hidden;
            background: linear-gradient(135deg, #F0F7EC 0%, #DCEECC 100%);
        }
        
        .hero-bg::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: 
                radial-gradient(ellipse 80% 50% at 50% 120%, rgba(106, 153, 78, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse 60% 80% at 0% 50%, rgba(46, 83, 57, 0.45) 0%, transparent 50%),
                radial-gradient(ellipse 60% 80% at 100% 50%, rgba(106, 153, 78, 0.5) 0%, transparent 50%),
                radial-gradient(circle at 25% 25%, rgba(106, 153, 78, 0.35) 0%, transparent 40%),
                radial-gradient(circle at 75% 75%, rgba(46, 83, 57, 0.3) 0%, transparent 35%),
                radial-gradient(circle at 90% 10%, rgba(106, 153, 78, 0.28) 0%, transparent 30%),
                radial-gradient(circle at 10% 90%, rgba(46, 83, 57, 0.25) 0%, transparent 25%),
                radial-gradient(ellipse 120% 60% at 30% 80%, rgba(106, 153, 78, 0.4) 0%, transparent 45%),
                radial-gradient(ellipse 90% 70% at 70% 20%, rgba(46, 83, 57, 0.32) 0%, transparent 40%),
                radial-gradient(circle at 60% 60%, rgba(106, 153, 78, 0.22) 0%, transparent 20%),
                radial-gradient(circle at 40% 40%, rgba(46, 83, 57, 0.18) 0%, transparent 18%),
                radial-gradient(ellipse 100% 80% at 80% 70%, rgba(106, 153, 78, 0.26) 0%, transparent 35%),
                radial-gradient(ellipse 110% 90% at 20% 30%, rgba(46, 83, 57, 0.24) 0%, transparent 30%),
                radial-gradient(circle at 85% 85%, rgba(106, 153, 78, 0.2) 0%, transparent 22%),
                radial-gradient(circle at 15% 15%, rgba(46, 83, 57, 0.16) 0%, transparent 15%),
                radial-gradient(ellipse 130% 100% at 50% 50%, rgba(106, 153, 78, 0.14) 0%, transparent 50%);
            z-index: 0;
        }
        
        .hero-bg::after {
            content: '';
            position: absolute;
            top: -30%;
            left: -30%;
            width: 160%;
            height: 160%;
            background: 
                radial-gradient(ellipse 70% 60% at 30% 80%, rgba(106, 153, 78, 0.3) 0%, transparent 40%),
                radial-gradient(ellipse 80% 50% at 80% 20%, rgba(46, 83, 57, 0.25) 0%, transparent 35%),
                radial-gradient(circle at 20% 30%, rgba(106, 153, 78, 0.2) 0%, transparent 30%),
                radial-gradient(circle at 80% 80%, rgba(46, 83, 57, 0.18) 0%, transparent 25%),
                radial-gradient(ellipse 90% 70% at 60% 40%, rgba(106, 153, 78, 0.15) 0%, transparent 35%);
            z-index: 1;
        }
        
        .hero-bg > * {
            position: relative;
            z-index: 2;
        }
        
        /* Disable animations on mobile - explicitly set to none */
        @media (max-width: 767px) {
            .hero-bg::before,
            .hero-bg::after {
                animation: none !important;
                transform: translate(0, 0) rotate(0deg) scale(1) !important;
                filter: none !important;
            }
        }
        
        /* Animation only on desktop */
        @media (min-width: 768px) {
            .hero-bg::before {
                animation: heroBackgroundShift 12s ease-in-out infinite;
            }
            
            .hero-bg::after {
                animation: heroBackgroundCounter 8s ease-in-out infinite reverse;
            }
        }
        
        @keyframes heroBackgroundShift {
            0%, 100% {
                transform: translate(0, 0) rotate(0deg) scale(1);
                filter: blur(0px);
            }
            25% {
                transform: translate(-12%, 16%) rotate(3deg) scale(1.08);
                filter: blur(6px);
            }
            50% {
                transform: translate(16%, -12%) rotate(-2.4deg) scale(0.92);
                filter: blur(10px);
            }
            75% {
                transform: translate(-10%, -16%) rotate(3.6deg) scale(1.06);
                filter: blur(8px);
            }
        }
        
        @keyframes heroBackgroundCounter {
            0%, 100% {
                transform: translate(0, 0) rotate(0deg) scale(1);
                filter: blur(2px);
            }
            33% {
                transform: translate(12%, -10%) rotate(-2.4deg) scale(1.06);
                filter: blur(0px);
            }
            66% {
                transform: translate(-16%, 12%) rotate(3deg) scale(0.94);
                filter: blur(12px);
            }
        }
        
        /* ===== SHARED HEADER STYLES ===== */
        .header-bg {
            background: 
                radial-gradient(circle at 15% 50%, rgba(106, 153, 78, 0.18) 0%, transparent 45%),
                radial-gradient(circle at 85% 30%, rgba(46, 83, 57, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 50% 80%, rgba(106, 153, 78, 0.12) 0%, transparent 35%),
                radial-gradient(circle at 75% 10%, rgba(46, 83, 57, 0.10) 0%, transparent 30%),
                linear-gradient(135deg, rgba(220, 238, 204, 0.85) 0%, rgba(240, 247, 236, 0.9) 50%, rgba(245, 245, 245, 0.85) 100%);
            border-bottom: 2px solid rgba(106, 153, 78, 0.25);
            box-shadow: 0 2px 10px rgba(106, 153, 78, 0.1);
        }
        
        .logo-gradient {
            background: linear-gradient(135deg, #2E5339 0%, #6A994E 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .nav-item {
            position: relative;
            overflow: hidden;
        }
        
        .nav-item::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #6A994E, #2E5339);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        
        .nav-item:hover::before {
            width: 100%;
        }
        
        .cta-button {
            background: linear-gradient(135deg, #6A994E 0%, #2E5339 100%);
            box-shadow: 0 4px 15px rgba(106, 153, 78, 0.3);
            transition: all 0.3s ease;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(106, 153, 78, 0.4);
        }

        /* ===== SHARED STICKY HEADER STYLES ===== */
        .sticky-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 50;
            transform: translateY(-100%);
            transition: transform 0.3s ease-in-out;
            background: rgba(245, 245, 245, 0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(106, 153, 78, 0.2);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .sticky-header.visible {
            transform: translateY(0);
        }

        .sticky-header .nav-item {
            position: relative;
            overflow: hidden;
        }

        .sticky-header .nav-item::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg, #6A994E, #2E5339);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }

        .sticky-header .nav-item:hover::before {
            width: 100%;
        }

        .sticky-header .cta-button {
            background: linear-gradient(135deg, #6A994E 0%, #2E5339 100%);
            box-shadow: 0 2px 8px rgba(106, 153, 78, 0.3);
            transition: all 0.3s ease;
        }

        .sticky-header .cta-button:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(106, 153, 78, 0.4);
        }
    `;
    
    document.head.appendChild(style);
}

// Get current page filename for navigation highlighting
function getCurrentPage() {
    const path = window.location.pathname;
    const filename = path.split('/').pop() || 'index.html';
    
    // Handle research pages - treat them as separate from main navigation
    if (path.includes('/research/')) {
        return filename; // Return just the filename, not the full path
    }
    
    return filename;
}

// Check if current page matches the link
function isCurrentPage(href) {
    const currentPage = getCurrentPage();
    const linkPage = href.split('/').pop();
    
    // Handle home page special case
    if (currentPage === '' || currentPage === 'index.html') {
        return linkPage === 'index.html' || href === '#get-involved';
    }
    
    return currentPage === linkPage;
}

// Generate navigation HTML with current page highlighting
function generateNavigation() {
    const currentPage = getCurrentPage();
    const currentPath = window.location.pathname;
    const isInResearchFolder = currentPath.includes('/research/');
    
    // Adjust link paths if we're in the research folder
    const basePath = isInResearchFolder ? '../' : '';
    
    // Don't show Home link if we're on the home page (but show it when in research folder)
    const homeLink = (currentPage !== 'index.html' && currentPage !== '') || isInResearchFolder ? 
        `<a href="${basePath}index.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium">Home</a>` : '';
    
    const missionLink = currentPage !== 'mission.html' ? 
        `<a href="${basePath}mission.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium">Our Mission</a>` : '';
    
    const initiativesLink = currentPage !== 'initiatives.html' ? 
        `<a href="${basePath}initiatives.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium">Our Initiatives</a>` : '';
    
    const launchLink = currentPage !== 'launch.html' ? 
        `<a href="${basePath}launch.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium">Community Launchpad</a>` : '';
    
    const localinfoLink = currentPage !== 'localinfo.html' ? 
        `<a href="${basePath}localinfo.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium">Local Info</a>` : '';
    
    const updatesLink = currentPage !== 'updates.html' ? 
        `<a href="${basePath}updates.html" class="nav-item text-neutral-600 hover:text-brand-light-green transition-colors font-medium">News</a>` : '';
    
    // Build navigation with proper spacing
    const navItems = [homeLink, missionLink, initiativesLink, launchLink, localinfoLink, updatesLink]
        .filter(link => link) // Remove empty strings
        .join('\n                    ');
    
    return `
                <nav class="hidden md:flex items-center space-x-6">
                    ${navItems}
                    <div class="w-px h-5 bg-neutral-300 mx-2"></div>
                    <a href="${basePath}index.html#get-involved" class="cta-button text-white px-5 py-2 rounded-full font-semibold transition-all text-sm">Join Us</a>
                </nav>`;
}

// Generate mobile navigation HTML
function generateMobileNavigation() {
    const currentPage = getCurrentPage();
    const currentPath = window.location.pathname;
    const isInResearchFolder = currentPath.includes('/research/');
    
    // Adjust link paths if we're in the research folder
    const basePath = isInResearchFolder ? '../' : '';
    
    const homeLink = (currentPage !== 'index.html' && currentPage !== '') || isInResearchFolder ? 
        `<a href="${basePath}index.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Home</a>` : '';
    
    const missionLink = currentPage !== 'mission.html' ? 
        `<a href="${basePath}mission.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Our Mission</a>` : '';
    
    const initiativesLink = currentPage !== 'initiatives.html' ? 
        `<a href="${basePath}initiatives.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Our Initiatives</a>` : '';
    
    const launchLink = currentPage !== 'launch.html' ? 
        `<a href="${basePath}launch.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Community Launchpad</a>` : '';
    
    const localinfoLink = currentPage !== 'localinfo.html' ? 
        `<a href="${basePath}localinfo.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">Local Info</a>` : '';
    
    const updatesLink = currentPage !== 'updates.html' ? 
        `<a href="${basePath}updates.html" class="block py-2 px-4 text-neutral-700 hover:text-brand-light-green hover:bg-brand-light-green/5 font-medium rounded-lg transition-colors">News</a>` : '';
    
    const navItems = [homeLink, missionLink, initiativesLink, launchLink, localinfoLink, updatesLink]
        .filter(link => link)
        .join('\n                ');
    
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
    const isInResearchFolder = currentPath.includes('/research/');
    const basePath = isInResearchFolder ? '../' : '';
    
    return `
    <header class="sticky-header fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200 shadow-sm transition-all duration-300">
        <div class="container mx-auto px-6 py-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center space-x-3">
                    <img src="${basePath}BackEnd/OPVoiceLogoCROP_v-1.14.png" alt="Overland Park Voice Logo" class="w-8 h-8">
                    <a href="${basePath}index.html" class="text-xl font-bold logo-gradient hover:opacity-80 transition-opacity">Overland Park Voice</a>
                </div>
                <div id="desktop-nav-placeholder"></div>
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
    const isInResearchFolder = currentPath.includes('/research/');
    const basePath = isInResearchFolder ? '../' : '';
    
    return `
    <footer class="bg-brand-gray py-8">
        <div class="container mx-auto px-6 text-center text-neutral-600">
            <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                 <div class="flex items-center space-x-2">
                    <img src="${basePath}BackEnd/OPVoiceLogoCROP_v-1.14.png" alt="Overland Park Voice Logo" class="w-6 h-6">
                    <span class="font-bold text-brand-dark-green">OPVOICE.ORG</span>
                </div>
                <div class="flex flex-col items-center space-y-2">
                    <p>&copy; 2024 Overland Park Voice. All Rights Reserved.</p>
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
    'index.html': {
        title: "Work in Progress: This site is currently under construction.",
        message: "We're building our platform for meaningful community engagement. Have ideas or want to get involved? We'd love to hear from you."
    },
    'mission.html': {
        title: "Mission Content: Being Expanded",
        message: "Our core mission is established, but we're adding more detailed information about our approach and impact."
    },
    'initiatives.html': {
        title: "Work in Progress: Our initiatives are actively developing",
        message: "Content will be updated as our advocacy efforts progress and take shape."
    },
    'launch.html': {
        title: "Community Launchpad: Building Our Tools",
        message: "We're developing the resources and processes to help residents launch their advocacy efforts."
    },
    'localinfo.html': {
        title: "Local Information: Expanding Our Database",
        message: "We're continuously adding government contacts, meeting schedules, and civic resources."
    },
    'updates.html': {
        title: "News Section: Coming Soon",
        message: "We'll share updates about our progress, upcoming events, and civic opportunities."
    }
};

// WIP BANNER HTML Generator
function generateWIPBanner() {
    const currentPage = getCurrentPage();
    const banner = WIP_BANNERS[currentPage];
    
    if (!banner) return '';
    
    // Add top margin on non-index pages to account for sticky header
    const marginClass = currentPage === 'index.html' || currentPage === '' ? '' : 'mt-16';
    
    return `
        <div class="bg-warn-300 text-warn-800 text-center py-4 px-6 ${marginClass}">
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
    // First, inject shared styles
    injectSharedStyles();
    
    // Insert header if placeholder exists
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = generateStickyHeaderHTML();
        
        // Wait for DOM to update before populating navigation
        setTimeout(() => {
            // Insert navigation into header
            const desktopNavPlaceholder = document.getElementById('desktop-nav-placeholder');
            if (desktopNavPlaceholder) {
                desktopNavPlaceholder.innerHTML = generateNavigation();
            }
            
            // Insert mobile navigation
            const mobileNavPlaceholder = document.getElementById('mobile-nav-placeholder');
            if (mobileNavPlaceholder) {
                mobileNavPlaceholder.innerHTML = generateMobileNavigation();
            }
            
            // Set up mobile menu functionality for sticky header
            setupMobileMenuToggle();
            
            // Make header visible on non-index pages
            const currentPage = getCurrentPage();
            if (currentPage !== 'index.html' && currentPage !== '') {
                const header = document.querySelector('.sticky-header');
                if (header) {
                    header.classList.add('visible');
                }
            }
        }, 0);
        
        // Special handling for index.html - position header below hero and WIP banner
        if (getCurrentPage() === 'index.html' || getCurrentPage() === '') {
            setupIndexPageStickyHeader();
        }
    }
    
    // Insert footer if placeholder exists
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = generateFooterHTML();
    }
    
    // Insert WIP banner if placeholder exists
    const wipPlaceholder = document.getElementById('wip-banner-placeholder');
    if (wipPlaceholder) {
        wipPlaceholder.innerHTML = generateWIPBanner();
    }
    
    console.log('✅ Shared components initialized for:', getCurrentPage());
}

// Mobile menu toggle functionality
function setupMobileMenuToggle() {
    const stickyMobileMenuButton = document.getElementById('sticky-mobile-menu-button');
    const stickyMobileMenu = document.getElementById('sticky-mobile-menu');
    
    if (stickyMobileMenuButton && stickyMobileMenu) {
        stickyMobileMenuButton.addEventListener('click', () => {
            stickyMobileMenu.classList.toggle('hidden');
        });
    }
}

// Special setup for index.html to position header below hero and WIP banner
function setupIndexPageStickyHeader() {
    const header = document.querySelector('.sticky-header');
    
    if (!header) return;
    
    // Initially hide the header on index page
    header.style.transform = 'translateY(-100%)';
    header.style.opacity = '0';
    
    // Calculate when to show header (after hero + WIP banner)
    function updateStickyHeader() {
        const heroSection = document.querySelector('.hero-bg');
        const wipBanner = document.querySelector('[id*="wip-banner"]');
        
        if (heroSection) {
            let triggerPoint = heroSection.offsetHeight;
            
            // Add WIP banner height if it exists
            if (wipBanner) {
                triggerPoint += wipBanner.offsetHeight;
            }
            
            // Show header when scrolled past hero + WIP banner
            if (window.scrollY > triggerPoint - 50) { // 50px buffer for smooth transition
                header.style.transform = 'translateY(0)';
                header.style.opacity = '1';
            } else {
                header.style.transform = 'translateY(-100%)';
                header.style.opacity = '0';
            }
        }
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', updateStickyHeader);
    
    // Initial check
    updateStickyHeader();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSharedComponents);
} else {
    initializeSharedComponents();
}

// Export functions for manual use if needed
window.OPVoiceShared = {
    initializeSharedComponents,
    getCurrentPage,
    generateNavigation,
    generateMobileNavigation,
    generateWIPBanner
};
