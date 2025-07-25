# Research Folder

This folder contains detailed research pages and reusable components for complex content that may be referenced across multiple pages.

## Current Research Pages

### Housing Advisory Commission (`housing-advisory-commission.html`)
- **Purpose**: Comprehensive research and proposal for establishing a Housing Advisory Commission in Overland Park
- **Content**: Interactive charts, data analysis, representation gaps, affordability analysis, and implementation roadmap
- **Usage**: 
  - Standalone page accessible via navigation
  - Referenced from main site pages
  - Can be embedded or linked as needed

## Templates for New Research

### Page Template (`_template.html`)
- **Purpose**: Standardized HTML structure for new research topics
- **Features**: Consistent styling, chart containers, executive summary format
- **Usage**: Copy and customize placeholders marked with `[BRACKETS]`

### Modal Template (`_modal-template.js`)
- **Purpose**: JavaScript template for creating reusable modal components
- **Features**: Auto-initialization, mini chart previews, responsive design
- **Usage**: Copy, rename, and replace placeholder values

## Modular Components

### Housing Modal (`housing-modal.js`)
- **Purpose**: Lightweight modal component for displaying housing research summary
- **Features**: 
  - Auto-initialization for common link patterns
  - Mini charts preview
  - Link to full research page
  - Responsive design
- **Usage**: Include script tag and add `class="housing-link"` or `id="housing-link"` to trigger elements

## Benefits of This Structure

### 1. **Reusability**
- Research content can be referenced from multiple pages
- Components can be imported as needed
- Reduces code duplication

### 2. **Maintainability** 
- Single source of truth for research content
- Updates propagate automatically
- Easier to keep data and charts current

### 3. **Performance**
- Heavy content isolated to dedicated pages
- Main pages load faster
- Charts and complex scripts only load when needed

### 4. **SEO & Accessibility**
- Each research topic gets its own URL
- Better search engine discoverability
- Can be shared directly as standalone content

### 5. **Scalability**
- Easy to add new research topics
- Modular structure supports future expansion
- Clear organization for growing content library

## Future Research Topics

As Overland Park Voice grows, this folder can accommodate additional research:

- **Budget Transparency**: Interactive budget breakdowns, spending analysis, and fiscal accountability tools
- **Development Projects**: Community impact assessments, TIF analysis, and benefit-cost evaluations  
- **Transportation**: Multi-modal transportation research, bike/walk infrastructure proposals
- **Environmental**: Sustainability initiatives, green infrastructure, and climate resilience studies
- **Economic Development**: Job creation analysis, wage studies, and workforce development research
- **Public Safety**: Community policing research, emergency preparedness, and safety improvement studies
- **City Services**: Efficiency analysis, service delivery studies, and resident satisfaction research
- **Parks & Recreation**: Usage studies, accessibility analysis, and community programming research

## Recommended Research Structure

Each research topic should follow this pattern:

```
research/
├── [topic-name].html           # Main research page
├── [topic-name]-modal.js       # Optional modal component
├── data/
│   ├── [topic-name].json       # Raw data files
│   └── [topic-name].csv        # Spreadsheet data
└── assets/
    ├── [topic-name]-chart1.png # Static chart images (fallbacks)
    └── [topic-name]-doc.pdf    # Supporting documents
```

## Implementation Patterns

### Adding New Research Pages

#### 1. Create the Research Page
```bash
# Copy template and rename
cp _template.html budget-transparency.html

# Customize placeholders:
# [TOPIC NAME] → Budget Transparency
# [SUBTITLE/DESCRIPTION] → Your description
# [KEY FINDING 1] → Your findings
# etc.
```

#### 2. Add to Navigation (Optional)
```javascript
// In shared-components.js, add to research dropdown or direct link
const budgetLink = !currentPage.includes('budget-transparency.html') ? 
    '<a href="research/budget-transparency.html" class="nav-item">Budget Research</a>' : '';
```

#### 3. Link from Main Pages
```html
<!-- Direct link -->
<a href="research/budget-transparency.html">View Budget Research</a>

<!-- Or create modal component -->
<a href="#" class="budget-link">Quick Preview</a>
```

#### 4. Create Modal Component (Optional)
```bash
# Copy modal template and customize
cp _modal-template.js budget-modal.js

# Replace placeholders:
# [TopicName] → Budget
# [topic-name] → budget-transparency
# [TOPIC NAME] → Budget Transparency
# etc.
```

### Linking to Research
```html
<!-- Direct link -->
<a href="research/housing-advisory-commission.html">View Research</a>

<!-- Modal trigger (if using housing-modal.js) -->
<a href="#" class="housing-link">Quick Preview</a>

<!-- Research dropdown in navigation -->
<div class="research-dropdown">
    <a href="research/housing-advisory-commission.html">Housing Research</a>
    <a href="research/budget-transparency.html">Budget Research</a>
</div>
```

### Data Organization
```
research/
├── housing-advisory-commission.html
├── housing-modal.js
├── budget-transparency.html
├── budget-modal.js
├── transportation-study.html
├── data/
│   ├── housing-data.json
│   ├── budget-data.csv
│   └── transportation-survey.json
├── assets/
│   ├── housing-charts/
│   ├── budget-graphics/
│   └── transportation-maps/
└── _templates/
    ├── _template.html
    └── _modal-template.js
```

### Navigation Integration
Research pages automatically inherit the site's header/footer via `shared-components.js`, maintaining consistent branding and navigation.
