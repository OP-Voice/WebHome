# Overland Park Voice

**Completing the Civic Dialogue.**

A platform for community engagement and civic participation in Overland Park, Kansas. We empower Overland Park's community workforce by making local government accessible, responsive, and a worthwhile investment of your time.

## 🌟 Our Mission

We build a more engaged and collaborative city by ensuring the people who power our economy have a meaningful voice in its future. Overland Park Voice fills the gap in civic participation by making involvement more accessible and impactful for our community workforce—retail workers, teachers, healthcare staff, and renters.

## 🚀 Features

- **Local Government Directory**: Comprehensive contact information for city officials, ward representatives, and city departments
- **Civic Engagement Tools**: Resources to help residents participate in local government
- **Community Launchpad**: Support for residents to launch their own city-focused advocacy efforts
- **Meeting Information**: City council meetings, public hearings, and civic events
- **Ward Finder**: Tools to help residents identify their ward and representatives

## 🎯 Core Principles

- **Collaborative**: We seek to build bridges, not walls
- **Accessible**: We work to demystify the civic process and lower barriers to participation
- **Data-Driven**: We advocate for policies based on transparent data and personal stories
- **Results-Oriented**: We focus on achievable goals that deliver real returns on community investment

## 📂 Project Structure

```
WebHome/
├── index.html              # Main homepage with hero and overview
├── mission.html            # Our mission and strategic pillars
├── initiatives.html        # Current civic initiatives and projects
├── launch.html             # Community Launchpad for resident advocacy
├── localinfo.html          # Local government contacts and resources
├── updates.html            # News, updates, and community announcements
├── shared-components.js    # Centralized styling and component system
├── sitemap.xml             # XML sitemap for search engines
├── robots.txt              # Search engine crawler instructions
├── TODO.md                 # Project roadmap and task tracking
├── README.md               # This file - project documentation
├── BackEnd/                # Assets and backend resources
│   ├── OPVoiceLogo_v-1.14.png      # Main logo file
│   ├── OPVoiceLogoCROP_v-1.14.png  # Cropped logo variant
│   └── privacy-policy.md            # Privacy policy documentation
├── LocalInfo/              # Local government resources
│   └── Ward+Precinct Map.pdf        # Ward boundary maps
├── research/               # Development and content research
│   ├── assets/             # Research-specific assets
│   ├── data/               # JSON data files and research data
│   ├── housing-advisory-commission.html  # Example advocacy page
│   ├── housing-modal.js    # Modal component examples
│   ├── _modal-template.js  # Reusable modal templates
│   ├── _template.html      # HTML page templates
│   ├── README.md           # Research documentation
│   └── TOPICS.md           # Research topics and priorities
├── OLD/                    # Archived files and backup components
└── updates/                # News articles and update content
    └── *.md               # Individual update/news files
```

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS for responsive design + Custom CSS animations
- **Components**: Shared component system via `shared-components.js`
- **Architecture**: Static site with dynamic JavaScript injection
- **Hosting**: GitHub Pages
- **Version Control**: Git/GitHub
- **Development**: Local HTTP server (Python/Node.js)

### Key Technical Features
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Performance Optimized**: Animations disabled on mobile devices
- **Component Architecture**: Centralized styling and layout management
- **Accessibility**: Semantic HTML and keyboard navigation support
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, structured data
- **Search Engine Ready**: XML sitemap, robots.txt, canonical URLs

## 🌐 Website

Visit our live website: [opvoice.org](https://opvoice.org) *(coming soon)*

## 🤝 Get Involved

### Ways to Participate

1. **Stay Informed**: Sign up for updates on our website
2. **Attend Events**: Join us at city council meetings and community events
3. **Share Ideas**: Use our Community Launchpad to propose civic initiatives
4. **Volunteer**: Help with research, outreach, and community engagement

### Contact Us

- **Website**: [opvoice.org](https://opvoice.org)
- **Social Media**: 
  - Twitter/X: [@VoiceOf_OP](https://x.com/VoiceOf_OP)
  - Facebook: [Overland Park Voice](https://www.facebook.com/profile.php?id=61578842542286)
- **Email**: Contact form available on our website

## 📋 Local Development

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OP-Voice/WebHome.git
   cd WebHome
   ```

2. **Serve locally** (choose one method):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Visit** `http://localhost:8000` in your browser

### Development Workflow

#### Adding New Pages
1. **Create HTML file** in root directory following existing structure
2. **Add to navigation** in `shared-components.js` navigation array
3. **Include shared components** by adding the script tag:
   ```html
   <script src="shared-components.js"></script>
   ```
4. **Use shared CSS classes** like `hero-bg` for consistent styling

#### Modifying Shared Components
- **Edit** `shared-components.js` to update headers, footers, navigation, or global styles
- **Test changes** across all pages to ensure consistency
- **Mobile optimization** is handled automatically via media queries

#### Content Updates
- **News/Updates**: Add markdown files to `updates/` folder
- **Research**: Use `research/` folder for development and content research
- **Local Info**: Update government contacts in `localinfo.html`

#### File Organization
- **Active files**: Keep in root directory
- **Archived files**: Move to `OLD/` folder
- **Development assets**: Store in `research/` folder
- **Static assets**: Place in `BackEnd/` folder

#### SEO Best Practices
- **Meta Tags**: All pages include comprehensive meta descriptions, keywords, and Open Graph tags
- **Structured Data**: JSON-LD markup for organization information on homepage
- **Sitemap**: XML sitemap automatically includes all main pages
- **Robots.txt**: Proper crawler instructions excluding development folders
- **Canonical URLs**: Each page has canonical link to prevent duplicate content
- **Social Sharing**: Twitter Cards and Open Graph optimized for social media

### 🔧 Build Process

This is a **static website** with **no build step required**. The site uses:
- Pure HTML/CSS/JavaScript
- Dynamic component injection via `shared-components.js`
- Tailwind CSS via CDN
- Direct file serving (no compilation needed)

### 🚀 Deployment

**Automatic deployment** via GitHub Pages:
1. Push changes to `main` branch
2. GitHub Pages automatically serves the site
3. Changes are live within minutes

**Manual deployment** to other hosts:
1. Copy all files to web server
2. Ensure server can serve static files
3. No special configuration required

## �️ Future Development Guide

### Phase 1: Content & Functionality
- **Government Contact Database**: Expand local officials directory
- **Ward Finder Tool**: Interactive map for ward identification
- **Event Calendar**: City council meetings and civic events
- **Document Library**: Policy documents and meeting minutes

### Phase 2: Community Features
- **Comment System**: Community discussion on local issues
- **Advocacy Toolkit**: Templates and guides for civic engagement
- **Newsletter System**: Automated updates and notifications
- **Multi-language Support**: Spanish and other community languages

### Phase 3: Advanced Features
- **User Accounts**: Personalized civic engagement tracking
- **API Integration**: Real-time city data and meeting schedules
- **Mobile App**: Progressive Web App for enhanced mobile experience
- **Analytics Dashboard**: Community engagement metrics

### Development Priorities
1. **Accessibility**: WCAG 2.1 AA compliance
2. **Performance**: Lighthouse scores 90+ across all metrics
3. **SEO**: Comprehensive meta tags and structured data
4. **Security**: HTTPS, CSP headers, and secure forms

### Technical Roadmap
- **Backend Development**: Consider Node.js/Express for dynamic features
- **Database Integration**: PostgreSQL or MongoDB for user data
- **CI/CD Pipeline**: Automated testing and deployment
- **Monitoring**: Error tracking and performance monitoring

### Content Strategy
- **Regular Updates**: Weekly news and civic information
- **Community Stories**: Resident advocacy success stories
- **Educational Content**: Guides for civic participation
- **Research Publications**: Policy analysis and recommendations

## 🏛️ Strategic Focus Areas

### Current Initiatives
- **Government Transparency**: Making city information more accessible
- **Civic Education**: Helping residents understand local government processes
- **Community Engagement**: Creating pathways for meaningful participation

### Policy Priorities
- **Comprehensive Housing Policy**: Protecting renters and expanding housing opportunities
- **Fiscally Responsible Growth**: Ensuring public investments benefit the entire community
- **Empowering Community Stewards**: Lowering barriers to civic participation

## 📄 FrameworkOP Alignment

Our advocacy efforts align with [FrameworkOP](https://www.opkansas.org/city-services/planning-development/long-range-planning/comprehensive-plan/), Overland Park's official comprehensive plan adopted in May 2024. This ensures our initiatives are focused, constructive, and aligned with the city's own stated goals.

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- City of Overland Park for their commitment to transparency
- Community members who participate in local government
- All volunteers and contributors to this project

## 📊 Project Stats

- **Launch Date**: 2024
- **Community Focus**: Overland Park, Kansas
- **Population Served**: 195,000+ residents
- **Wards Covered**: 6 city wards

---

**Overland Park Voice** - *Making local government accessible, one voice at a time.*