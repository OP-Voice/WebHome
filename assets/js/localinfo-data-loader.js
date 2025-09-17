/**
 * Local Info Data Loader
 * This script loads data from localinfo-data.json and populates the HTML placeholders
 */

class LocalInfoDataLoader {
    constructor() {
        this.data = null;
        this.placeholderMap = {
            // Executive Leadership
            '[Mayor Name]': 'executiveLeadership.mayorName',
            '[City Manager Name]': 'executiveLeadership.cityManagerName',
            '[Assistant City Manager Name]': 'executiveLeadership.assistantCityManagerName',
            '[City Clerk Name]': 'executiveLeadership.cityClerkName',
            
            // Department Heads
            '[Police Chief Name]': 'departmentHeads.policeChiefName',
            '[Fire Chief Name]': 'departmentHeads.fireChiefName',
            '[Public Works Director]': 'departmentHeads.publicWorksDirector',
            '[Parks Director]': 'departmentHeads.parksRecreationDirector',
            
            // Ward Representatives - Ward 1
            '[Ward 1 Council Member A Name]': 'wardRepresentatives.ward1.councilMemberA.name',
            '[ward1a@overlandpark.org]': 'wardRepresentatives.ward1.councilMemberA.email',
            '[Ward 1 Council Member B Name]': 'wardRepresentatives.ward1.councilMemberB.name',
            '[ward1b@overlandpark.org]': 'wardRepresentatives.ward1.councilMemberB.email',
            
            // Ward Representatives - Ward 2
            '[Ward 2 Council Member A Name]': 'wardRepresentatives.ward2.councilMemberA.name',
            '[ward2a@overlandpark.org]': 'wardRepresentatives.ward2.councilMemberA.email',
            '[Ward 2 Council Member B Name]': 'wardRepresentatives.ward2.councilMemberB.name',
            '[ward2b@overlandpark.org]': 'wardRepresentatives.ward2.councilMemberB.email',
            
            // Ward Representatives - Ward 3
            '[Ward 3 Council Member A Name]': 'wardRepresentatives.ward3.councilMemberA.name',
            '[ward3a@overlandpark.org]': 'wardRepresentatives.ward3.councilMemberA.email',
            '[Ward 3 Council Member B Name]': 'wardRepresentatives.ward3.councilMemberB.name',
            '[ward3b@overlandpark.org]': 'wardRepresentatives.ward3.councilMemberB.email',
            
            // Ward Representatives - Ward 4
            '[Ward 4 Council Member A Name]': 'wardRepresentatives.ward4.councilMemberA.name',
            '[ward4a@overlandpark.org]': 'wardRepresentatives.ward4.councilMemberA.email',
            '[Ward 4 Council Member B Name]': 'wardRepresentatives.ward4.councilMemberB.name',
            '[ward4b@overlandpark.org]': 'wardRepresentatives.ward4.councilMemberB.email',
            
            // Ward Representatives - Ward 5
            '[Ward 5 Council Member A Name]': 'wardRepresentatives.ward5.councilMemberA.name',
            '[ward5a@overlandpark.org]': 'wardRepresentatives.ward5.councilMemberA.email',
            '[Ward 5 Council Member B Name]': 'wardRepresentatives.ward5.councilMemberB.name',
            '[ward5b@overlandpark.org]': 'wardRepresentatives.ward5.councilMemberB.email',
            
            // Ward Representatives - Ward 6
            '[Ward 6 Council Member A Name]': 'wardRepresentatives.ward6.councilMemberA.name',
            '[ward6a@overlandpark.org]': 'wardRepresentatives.ward6.councilMemberA.email',
            '[Ward 6 Council Member B Name]': 'wardRepresentatives.ward6.councilMemberB.name',
            '[ward6b@overlandpark.org]': 'wardRepresentatives.ward6.councilMemberB.email',
            
            // Contact Information
            '[City Hall Address]': 'cityContact.cityHallAddress',
            '[City Hall Hours]': 'cityContact.cityHallHours',
            '[City Hall Phone Number]': 'cityContact.cityHallMainPhone',
            '[City Phone Number]': 'cityContact.cityHallMainPhone',
            
            // Elections & Voting
            '[Election Office Address]': 'electionsVoting.electionOfficeAddress',
            '[Election Office Phone Number]': 'electionsVoting.electionOfficePhone',
            '[Next City Election Date]': 'electionsVoting.nextCityElectionDate',
            '[Next General Election Date]': 'electionsVoting.nextGeneralElectionDate',
            
            // Public Meetings
            '[City Council Meeting Schedule]': 'publicMeetings.cityCouncilRegularSchedule',
            '[City Council Study Session Schedule]': 'publicMeetings.cityCouncilStudySessionSchedule',
            '[Meeting Location]': 'publicMeetings.cityCouncilMeetingLocation',
            '[Planning Commission Meeting Schedule]': 'publicMeetings.planningCommissionSchedule',
            '[Planning Commission Meeting Location]': 'publicMeetings.planningCommissionLocation',
            
            // Emergency Services
            '[Police Non-Emergency Phone Number]': 'emergencyServices.policeNonEmergencyPhone',
            '[Fire Non-Emergency Phone Number]': 'emergencyServices.fireNonEmergencyPhone',
            '[Animal Control Phone Number]': 'emergencyServices.animalControlPhone',
            
            // Parks & Recreation
            '[Parks Department Phone Number]': 'parksRecreation.parksDepartmentPhone',
            '[Golf Course Names]': 'parksRecreation.golfCourseNames',
            '[Arboretum Name]': 'parksRecreation.arboretumName',
            
            // Schools & Education
            '[Shawnee Mission School District Phone Number]': 'schoolsEducation.shawneeMissionPhone',
            '[Blue Valley School District Phone Number]': 'schoolsEducation.blueValleyPhone',
            '[Library Branch Name 1]': 'schoolsEducation.libraryBranches.0',
            '[Library Branch Name 2]': 'schoolsEducation.libraryBranches.1',
            '[Library Branch Name 3]': 'schoolsEducation.libraryBranches.2',
            '[Library Branch Name 4]': 'schoolsEducation.libraryBranches.3',
            
            // Transportation
            '[KCATA Phone Number]': 'transportation.kcataPhone',
            '[Interstate Highway Numbers]': 'transportation.interstateHighways',
            '[Major Street Names]': 'transportation.majorStreets',
            '[US Highway Numbers]': 'transportation.usHighways',
            
            // City Statistics
            '[City Population]': 'cityStatistics.population',
            '[City Area in square miles]': 'cityStatistics.areaSqMiles',
            '[City Founded Year]': 'cityStatistics.foundedYear'
        };
    }

    async loadData() {
        try {
            const response = await fetch('data/localinfo-data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            return this.data;
        } catch (error) {
            console.error('Error loading local info data:', error);
            return null;
        }
    }

    getNestedValue(obj, path) {
        return path.split('.').reduce((current, key) => {
            if (current && current.hasOwnProperty(key)) {
                return current[key];
            }
            return '';
        }, obj);
    }

    async populateContent() {
        if (!this.data) {
            await this.loadData();
        }

        if (!this.data) {
            console.error('No data available to populate content');
            return;
        }

        // Get all text nodes in the document
        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        const textNodes = [];
        let node;
        
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }

        // Replace placeholders in text nodes
        textNodes.forEach(textNode => {
            let content = textNode.textContent;
            let hasChanges = false;

            Object.keys(this.placeholderMap).forEach(placeholder => {
                if (content.includes(placeholder)) {
                    const dataPath = this.placeholderMap[placeholder];
                    const value = this.getNestedValue(this.data, dataPath);
                    
                    if (value) {
                        content = content.replace(new RegExp(escapeRegExp(placeholder), 'g'), value);
                        hasChanges = true;
                    }
                }
            });

            if (hasChanges) {
                textNode.textContent = content;
            }
        });

        // Handle phone numbers for ward representatives (special case)
        this.populateWardPhoneNumbers();
    }

    populateWardPhoneNumbers() {
        // Handle the generic [Phone Number] placeholders in ward sections
        console.log('Starting ward phone number population...');
        
        for (let wardNum = 1; wardNum <= 6; wardNum++) {
            // Find all h5 elements and check their text content
            const h5Elements = document.querySelectorAll('h5');
            let wardSection = null;
            for (let h5 of h5Elements) {
                if (h5.textContent.includes(`Ward ${wardNum}`)) {
                    wardSection = h5;
                    break;
                }
            }
            
            if (wardSection) {
                console.log(`Found Ward ${wardNum} section`);
                const wardContainer = wardSection.closest('.bg-neutral-50');
                if (wardContainer) {
                    // Find all p elements that contain phone number placeholders
                    const allPElements = wardContainer.querySelectorAll('p');
                    const phoneElements = [];
                    for (let p of allPElements) {
                        if (p.textContent.includes('[Phone Number]')) {
                            phoneElements.push(p);
                        }
                    }
                    
                    console.log(`Found ${phoneElements.length} phone placeholders in Ward ${wardNum}`);
                    
                    const wardData = this.data.wardRepresentatives[`ward${wardNum}`];
                    
                    if (phoneElements.length >= 2 && wardData) {
                        // First phone number - Council Member A
                        if (phoneElements[0] && wardData.councilMemberA.phone) {
                            phoneElements[0].textContent = phoneElements[0].textContent.replace('[Phone Number]', wardData.councilMemberA.phone);
                            console.log(`Updated Ward ${wardNum} Council Member A phone: ${wardData.councilMemberA.phone}`);
                        }
                        // Second phone number - Council Member B
                        if (phoneElements[1] && wardData.councilMemberB.phone) {
                            phoneElements[1].textContent = phoneElements[1].textContent.replace('[Phone Number]', wardData.councilMemberB.phone);
                            console.log(`Updated Ward ${wardNum} Council Member B phone: ${wardData.councilMemberB.phone}`);
                        }
                    } else {
                        console.log(`Ward ${wardNum}: Missing phone elements or data. Phone elements: ${phoneElements.length}, Ward data:`, wardData);
                    }
                } else {
                    console.log(`Ward ${wardNum}: No container found`);
                }
            } else {
                console.log(`Ward ${wardNum}: No section found`);
            }
        }
        
        console.log('Ward phone number population complete');
    }

    // Method to update data programmatically
    updateData(newData) {
        this.data = { ...this.data, ...newData };
        this.populateContent();
    }

    // Method to get current data
    getData() {
        return this.data;
    }
}

// Utility function to escape regex special characters
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Initialize and export the data loader
const localInfoDataLoader = new LocalInfoDataLoader();

// Auto-populate on page load
document.addEventListener('DOMContentLoaded', async () => {
    await localInfoDataLoader.populateContent();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LocalInfoDataLoader;
}
