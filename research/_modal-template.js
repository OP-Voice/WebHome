/**
 * [TOPIC NAME] Modal Module Template
 * 
 * This module provides a reusable modal component for displaying
 * [TOPIC NAME] research content across multiple pages.
 * 
 * Usage:
 * 1. Copy this file and rename to match your topic (e.g., budget-modal.js)
 * 2. Replace [TOPIC NAME] placeholders with your actual topic
 * 3. Update modal content and chart data
 * 4. Include script tag in pages that need the modal
 */

class TopicNameModal {
    constructor() {
        this.modalId = 'topic-name-modal';
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
                        <h2 class="text-xl font-bold">[TOPIC NAME] Research</h2>
                        <button id="close-${this.modalId}" class="text-white hover:text-neutral-200 text-3xl leading-none">&times;</button>
                    </div>
                    <!-- Modal Body -->
                    <div class="flex-1 overflow-y-auto bg-neutral-50">
                        <div class="p-4 md:p-6">
                            <div class="text-center mb-6">
                                <p class="text-neutral-600 mb-4">View the complete research and interactive analysis:</p>
                                <a href="research/[topic-filename].html" 
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
                                        <h4 class="font-semibold text-brand-dark-green mb-2">Key Findings</h4>
                                        <ul class="text-sm text-neutral-700 space-y-1">
                                            <li>• [KEY FINDING 1]</li>
                                            <li>• [KEY FINDING 2]</li>
                                            <li>• [KEY FINDING 3]</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="font-semibold text-brand-dark-green mb-2">Recommendations</h4>
                                        <ul class="text-sm text-neutral-700 space-y-1">
                                            <li>• [RECOMMENDATION 1]</li>
                                            <li>• [RECOMMENDATION 2]</li>
                                            <li>• [RECOMMENDATION 3]</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <!-- Mini Chart Preview -->
                            <div class="bg-white rounded-lg p-4 shadow-sm border">
                                <h4 class="font-semibold text-center mb-3">[CHART TITLE]</h4>
                                <div style="position: relative; height: 200px;">
                                    <canvas id="mini-[topic]-chart"></canvas>
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

        const miniChartCtx = document.getElementById('mini-[topic]-chart');
        if (miniChartCtx && window.Chart) {
            new Chart(miniChartCtx.getContext('2d'), {
                type: 'bar', // Customize chart type
                data: {
                    labels: ['Sample 1', 'Sample 2', 'Sample 3'],
                    datasets: [{
                        data: [10, 20, 30],
                        backgroundColor: ['#6A994E', '#2E5339', '#FFA600'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            callbacks: {
                                label: (context) => `Value: ${context.parsed.y}`
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
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
    addTrigger(selector, text = '[Topic] Research') {
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
window.TopicNameModal = window.TopicNameModal || new TopicNameModal();

// Auto-initialize for common link patterns
document.addEventListener('DOMContentLoaded', function() {
    const topicNameModal = window.TopicNameModal;
    
    // Look for common link patterns (customize these selectors)
    const selectors = [
        '#[topic]-link',
        '.[topic]-link',
        'a[href*="[topic]"]',
        'a[data-modal="[topic]"]'
    ];
    
    selectors.forEach(selector => {
        try {
            topicNameModal.addTrigger(selector);
        } catch (e) {
            // Silently continue if selector doesn't exist
        }
    });
});

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TopicNameModal;
}
