/**
 * Site-Wide Data Manager
 * Extends the concept to manage all site data from centralized JSON files
 */

class SiteDataManager {
    constructor() {
        this.dataCache = {};
        this.dataSources = {
            localInfo: 'data/localinfo-data.json',
            organization: 'data/organization-data.json',
            // Add more data sources as needed:
            // team: 'data/team-data.json',
            // initiatives: 'data/initiatives-data.json',
            // events: 'data/events-data.json',
            // siteContent: 'data/site-content.json'
        };
    }

    // Load any data file
    async loadData(dataType) {
        if (this.dataCache[dataType]) {
            return this.dataCache[dataType];
        }

        try {
            const response = await fetch(this.dataSources[dataType]);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.dataCache[dataType] = await response.json();
            return this.dataCache[dataType];
        } catch (error) {
            console.error(`Error loading ${dataType} data:`, error);
            return null;
        }
    }

    // Get specific data value by path (e.g., 'localInfo.executiveLeadership.mayorName')
    async getValue(dataPath) {
        const [dataType, ...path] = dataPath.split('.');
        const data = await this.loadData(dataType);
        
        if (!data) return '';
        
        return path.reduce((current, key) => {
            return current && current[key] ? current[key] : '';
        }, data);
    }

    // Create reusable data components
    createDataElement(dataPath, tag = 'span', className = '') {
        const element = document.createElement(tag);
        if (className) element.className = className;
        
        this.getValue(dataPath).then(value => {
            element.textContent = value || '[Data Not Available]';
        });
        
        return element;
    }

    // Auto-populate data attributes
    async populateDataAttributes() {
        const elementsWithData = document.querySelectorAll('[data-site-value]');
        
        for (const element of elementsWithData) {
            const dataPath = element.getAttribute('data-site-value');
            const value = await this.getValue(dataPath);
            element.textContent = value || element.textContent;
        }
    }
}

// Initialize site data manager
const siteDataManager = new SiteDataManager();

// Auto-populate on page load
document.addEventListener('DOMContentLoaded', async () => {
    await siteDataManager.populateDataAttributes();
});

// Export for global use
window.siteDataManager = siteDataManager;
