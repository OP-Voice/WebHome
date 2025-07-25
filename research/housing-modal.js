/**
 * Housing Advisory Commission Modal Module
 * 
 * This module provides a reusable modal component for displaying
 * the Housing Advisory Commission research content across multiple pages.
 */

class HousingModal {
    constructor() {
        this.modalId = 'housing-advisory-modal';
        this.isInitialized = false;
        this.chartsInitialized = false;
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
                <div class="bg-neutral-50 rounded-lg shadow-2xl w-full max-w-6xl max-h-[95vh] flex flex-col border-4 border-brand-light-green">
                    <!-- Modal Header -->
                    <div class="flex justify-between items-center p-4 border-b border-neutral-200 bg-brand-light-green text-white rounded-t-lg">
                        <h2 class="text-xl font-bold">Housing Advisory Commission Research</h2>
                        <button id="close-${this.modalId}" class="text-white hover:text-neutral-200 text-3xl leading-none">&times;</button>
                    </div>
                    <!-- Modal Body -->
                    <div class="flex-1 overflow-y-auto bg-neutral-50">
                        <div class="p-4 md:p-6">
                            <div class="text-center mb-6">
                                <p class="text-neutral-600 mb-4">View the complete research and interactive charts:</p>
                                <a href="research/housing-advisory-commission.html" 
                                   target="_blank" 
                                   class="inline-block bg-brand-light-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-dark-green transition-colors">
                                    Open Full Research Page
                                </a>
                            </div>
                            
                            <!-- Quick Summary -->
                            <div class="bg-neutral-100 rounded-lg p-6 mb-6">
                                <h3 class="text-2xl font-bold text-brand-dark-green mb-4">Quick Summary</h3>
                                <div class="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 class="font-semibold text-brand-dark-green mb-2">The Issue</h4>
                                        <ul class="text-sm text-neutral-700 space-y-1">
                                            <li>• 38% of OP households are renters (31,000+ homes)</li>
                                            <li>• No formal representation in housing policy</li>
                                            <li>• Widespread affordability gaps</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-brand-dark-green mb-2">The Solution</h4>
                                        <ul class="text-sm text-neutral-700 space-y-1">
                                            <li>• Housing Advisory Commission</li>
                                            <li>• 1/3 seats reserved for renters</li>
                                            <li>• Only 0.1% of city budget</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Mini Charts Preview -->
                            <div class="grid md:grid-cols-2 gap-6">
                                <div class="bg-white rounded-lg p-4 shadow-sm border">
                                    <h4 class="font-semibold text-center mb-3">Household Composition</h4>
                                    <div style="position: relative; height: 200px;">
                                        <canvas id="mini-renter-chart"></canvas>
                                    </div>
                                </div>
                                <div class="bg-white rounded-lg p-4 shadow-sm border">
                                    <h4 class="font-semibold text-center mb-3">Budget Impact</h4>
                                    <div class="text-center">
                                        <div class="text-4xl font-bold text-info-orange mb-2">0.1%</div>
                                        <p class="text-sm text-neutral-600">of General Fund</p>
                                        <p class="text-xs text-neutral-500 mt-2">$1 for every $1,000</p>
                                    </div>
                                </div>
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
     * Initialize mini charts in the modal
     */
    initializeMiniCharts() {
        if (this.chartsInitialized) return;

        const miniChartCtx = document.getElementById('mini-renter-chart');
        if (miniChartCtx && window.Chart) {
            new Chart(miniChartCtx.getContext('2d'), {
                type: 'doughnut',
                data: {
                    labels: ['Renters', 'Homeowners'],
                    datasets: [{
                        data: [38, 62],
                        backgroundColor: ['#6A994E', '#2E5339'],
                        borderWidth: 2,
                        borderColor: '#fff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '60%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                font: { size: 10 }
                            }
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => `${context.label}: ${context.parsed}%`
                            }
                        }
                    }
                }
            });
        }

        this.chartsInitialized = true;
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

            // Initialize charts after modal is visible
            setTimeout(() => {
                this.initializeMiniCharts();
            }, 100);
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
    addTrigger(selector, text = 'Housing Research') {
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

// Create global instance
window.HousingModal = window.HousingModal || new HousingModal();

// Auto-initialize for common link patterns
document.addEventListener('DOMContentLoaded', function() {
    const housingModal = window.HousingModal;
    
    // Look for common housing link patterns
    const selectors = [
        '#housing-link',
        '.housing-link',
        'a[href*="housing"]',
        'a[data-modal="housing"]'
    ];
    
    selectors.forEach(selector => {
        try {
            housingModal.addTrigger(selector);
        } catch (e) {
            // Silently continue if selector doesn't exist
        }
    });
});

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = HousingModal;
}
