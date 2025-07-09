// Portfolio Website JavaScript

// Configuration object - EDIT THESE LINKS TO CUSTOMIZE YOUR PORTFOLIO
const portfolioConfig = {
    // Portfolio button links
    watchAnimation: 'https://youtube.com/shorts/ve-CAdQof_A?si=P284YuWbu10TbI1m',
    watchJessabee: 'https://www.youtube.com/embed/LYcWradpTpg',
    watchFrogs: 'https://youtube.com/shorts/FhBssL518RQ?feature=share',
    viewGallery: 'https://youtube.com/shorts/SaLukjY54Zc?si=vPCm3Vodvqn1k7Jb',
    
    // Social and professional links
    artstation: 'https://digitalworld.artstation.com',
    linkedin: 'https://linkedin.com/in/debbie-blackwell',
    
    // Resume download link
    downloadResume: 'https://your-resume-download-url.com'
};

// Initialize the portfolio when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
    addSmoothScrolling();
    addImageLoadingEffects();
});

// Initialize portfolio links
function initializePortfolio() {
    // Set up portfolio button links
    document.getElementById('watch-animation-btn').href = portfolioConfig.watchAnimation;
    document.getElementById('watch-jessabee-btn').href = portfolioConfig.watchJessabee;
    document.getElementById('watch-frogs-btn').href = portfolioConfig.watchFrogs;
    document.getElementById('view-gallery-btn').href = portfolioConfig.viewGallery;
    
    // Set up social links
    document.getElementById('artstation-link').href = portfolioConfig.artstation;
    document.getElementById('linkedin-link').href = portfolioConfig.linkedin;
    
    // Set up resume download
    document.getElementById('download-resume-btn').href = portfolioConfig.downloadResume;
    
    // Add click handlers for external links
    addExternalLinkHandlers();
}

// Add handlers for external links
function addExternalLinkHandlers() {
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    
    externalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Open external links in new tab
            if (!this.target) {
                this.target = '_blank';
                this.rel = 'noopener noreferrer';
            }
        });
    });
}

// Add smooth scrolling for internal links
function addSmoothScrolling() {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add image loading effects
function addImageLoadingEffects() {
    const images = document.querySelectorAll('.portfolio-image');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Add error handling for missing images
        img.addEventListener('error', function() {
            this.style.backgroundColor = '#333';
            this.style.display = 'flex';
            this.style.alignItems = 'center';
            this.style.justifyContent = 'center';
            this.innerHTML = '<span style="color: #666;">Image not found</span>';
        });
    });
}

// Utility function to update a specific link
function updateLink(linkId, newUrl) {
    const element = document.getElementById(linkId);
    if (element) {
        element.href = newUrl;
        console.log(`Updated ${linkId} to: ${newUrl}`);
    }
}

// Function to update all links at once (for advanced users)
function updateAllLinks(newConfig) {
    Object.assign(portfolioConfig, newConfig);
    initializePortfolio();
    console.log('All links updated successfully');
}

// Add some visual feedback for button interactions
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(1px)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});

// Console message for developers
console.log('🎨 Debbie Blackwell Portfolio Website');
console.log('📝 To customize links, edit the portfolioConfig object in script.js');
console.log('🖼️ To change images, replace files in the images/ folder');
console.log('🎨 To modify styling, edit style.css');

