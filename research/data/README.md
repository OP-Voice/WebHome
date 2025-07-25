# Research Folder - Data Directory

This folder contains structured data files used in research pages.

## Current Data Files

- `housing-data.json` - Demographics, affordability analysis, and budget data for Housing Advisory Commission research

## Data Standards

### File Naming Convention
- Use kebab-case: `topic-name-data.json`
- Include data type if multiple files: `budget-spending-data.csv`, `budget-revenue-data.json`

### JSON Structure
```json
{
  "metadata": {
    "topic": "research-topic",
    "lastUpdated": "YYYY-MM-DD",
    "dataSource": "Source description",
    "methodology": "Brief methodology note"
  },
  "dataSection1": {
    // Organized data relevant to charts/analysis
  },
  "dataSection2": {
    // Additional data categories
  }
}
```

### CSV Files
- Include header row with clear column names
- Use consistent date formats (YYYY-MM-DD)
- Include metadata in accompanying `.json` file

## Data Management

### Version Control
- Update `lastUpdated` field when data changes
- Consider archiving old versions: `housing-data-2024.json`

### Sources
- Always document data sources in metadata
- Include links to original sources when possible
- Note any data processing or calculations performed

### Privacy
- Ensure no personally identifiable information
- Aggregate data appropriately
- Follow city data use policies
