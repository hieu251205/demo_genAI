// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functions
    initSearch();
    initNavigation();
    initBreakingNews();
    initWeatherWidget();
    initNewsletter();
    initAnimations();
    initMobileMenu();
    initLazyLoading();
    initScrollEffects();
});

// Search functionality
function initSearch() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
}

function performSearch(query) {
    if (query.trim() === '') {
        showNotification('Vui lòng nhập từ khóa tìm kiếm', 'warning');
        return;
    }
    
    // Simulate search
    showNotification(`Đang tìm kiếm: "${query}"`, 'info');
    
    // In a real application, you would make an API call here
    setTimeout(() => {
        showNotification(`Tìm thấy 15 kết quả cho "${query}"`, 'success');
    }, 1000);
}

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Simulate page navigation
            const category = this.textContent;
            showNotification(`Đang chuyển đến: ${category}`, 'info');
        });
    });
}

// Breaking news ticker
function initBreakingNews() {
    const breakingContent = document.querySelector('.breaking-content span');
    
    if (breakingContent) {
        // Add more breaking news items
        const breakingNews = [
            'Việt Nam đạt thành tích xuất sắc tại SEA Games 2024',
            'Chính phủ ban hành chính sách mới hỗ trợ doanh nghiệp',
            'Thời tiết miền Bắc chuyển lạnh, nhiệt độ giảm mạnh',
            'Giá xăng dầu giảm mạnh trong tuần này',
            'U23 Việt Nam giành vé vào bán kết U23 Châu Á'
        ];
        
        let currentIndex = 0;
        
        setInterval(() => {
            currentIndex = (currentIndex + 1) % breakingNews.length;
            breakingContent.textContent = breakingNews[currentIndex];
        }, 8000);
    }
}

// Weather widget
function initWeatherWidget() {
    const weatherWidget = document.querySelector('.weather-widget');
    
    if (weatherWidget) {
        // Simulate weather updates
        const weatherConditions = [
            { temp: '25°C', desc: 'Nhiều mây', icon: 'fa-cloud-sun', humidity: '75%', wind: '10 km/h' },
            { temp: '28°C', desc: 'Nắng đẹp', icon: 'fa-sun', humidity: '60%', wind: '8 km/h' },
            { temp: '22°C', desc: 'Mưa nhẹ', icon: 'fa-cloud-rain', humidity: '85%', wind: '15 km/h' }
        ];
        
        let weatherIndex = 0;
        
        setInterval(() => {
            const weather = weatherConditions[weatherIndex];
            updateWeatherDisplay(weather);
            weatherIndex = (weatherIndex + 1) % weatherConditions.length;
        }, 30000); // Update every 30 seconds
    }
}

function updateWeatherDisplay(weather) {
    const icon = document.querySelector('.weather-icon i');
    const temp = document.querySelector('.temperature');
    const desc = document.querySelector('.description');
    const details = document.querySelector('.details');
    
    if (icon) icon.className = `fas ${weather.icon}`;
    if (temp) temp.textContent = weather.temp;
    if (desc) desc.textContent = weather.desc;
    if (details) {
        details.innerHTML = `
            <span>Độ ẩm: ${weather.humidity}</span>
            <span>Gió: ${weather.wind}</span>
        `;
    }
}

// Newsletter subscription
function initNewsletter() {
    const newsletterForm = document.querySelector('.newsletter');
    
    if (newsletterForm) {
        const emailInput = newsletterForm.querySelector('input');
        const subscribeButton = newsletterForm.querySelector('button');
        
        subscribeButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const email = emailInput.value.trim();
            
            if (!email) {
                showNotification('Vui lòng nhập email', 'warning');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Email không hợp lệ', 'error');
                return;
            }
            
            // Simulate subscription
            showNotification('Đang đăng ký...', 'info');
            
            setTimeout(() => {
                showNotification('Đăng ký thành công! Cảm ơn bạn đã đăng ký nhận tin.', 'success');
                emailInput.value = '';
            }, 1500);
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Animations
function initAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all news cards and widgets
    const animatedElements = document.querySelectorAll('.news-card, .widget, .featured-main');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Mobile menu
function initMobileMenu() {
    // Create mobile menu button
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.style.display = 'none';
    
    header.appendChild(mobileMenuBtn);
    
    // Mobile menu functionality
    mobileMenuBtn.addEventListener('click', function() {
        const nav = document.querySelector('.main-nav');
        nav.classList.toggle('mobile-active');
        this.innerHTML = nav.classList.contains('mobile-active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    
    // Show mobile menu button on small screens
    function checkMobileMenu() {
        if (window.innerWidth <= 768) {
            mobileMenuBtn.style.display = 'block';
            document.querySelector('.main-nav').classList.add('mobile-nav');
        } else {
            mobileMenuBtn.style.display = 'none';
            document.querySelector('.main-nav').classList.remove('mobile-nav', 'mobile-active');
        }
    }
    
    checkMobileMenu();
    window.addEventListener('resize', checkMobileMenu);
}

// Lazy loading for images
function initLazyLoading() {
    const images = document.querySelectorAll('img[src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.3s ease-in';
                
                img.onload = function() {
                    img.style.opacity = '1';
                };
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Scroll effects
function initScrollEffects() {
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector('.header');
        
        // Header scroll effect
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Parallax effect for breaking news
        const breakingNews = document.querySelector('.breaking-news');
        if (breakingNews) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            breakingNews.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease-out;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

function getNotificationColor(type) {
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    return colors[type] || colors.info;
}

// Login/Register functionality
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');
    
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            showLoginModal();
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            showRegisterModal();
        });
    }
});

function showLoginModal() {
    const modal = createModal('Đăng nhập', `
        <form id="loginForm">
            <div class="form-group">
                <label>Email:</label>
                <input type="email" required>
            </div>
            <div class="form-group">
                <label>Mật khẩu:</label>
                <input type="password" required>
            </div>
            <button type="submit" class="btn-primary">Đăng nhập</button>
        </form>
    `);
    
    document.body.appendChild(modal);
    
    const form = modal.querySelector('#loginForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Đăng nhập thành công!', 'success');
        modal.remove();
    });
}

function showRegisterModal() {
    const modal = createModal('Đăng ký', `
        <form id="registerForm">
            <div class="form-group">
                <label>Họ tên:</label>
                <input type="text" required>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" required>
            </div>
            <div class="form-group">
                <label>Mật khẩu:</label>
                <input type="password" required>
            </div>
            <div class="form-group">
                <label>Xác nhận mật khẩu:</label>
                <input type="password" required>
            </div>
            <button type="submit" class="btn-primary">Đăng ký</button>
        </form>
    `);
    
    document.body.appendChild(modal);
    
    const form = modal.querySelector('#registerForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Đăng ký thành công!', 'success');
        modal.remove();
    });
}

function createModal(title, content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="modal-body">
                ${content}
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
        }
        .modal-content {
            background: white;
            border-radius: 12px;
            padding: 0;
            max-width: 400px;
            width: 90%;
            position: relative;
            z-index: 1;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        .modal-header h3 {
            margin: 0;
            color: #333;
        }
        .modal-close {
            background: none;
            border: none;
            font-size: 18px;
            cursor: pointer;
            color: #999;
        }
        .modal-body {
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        .form-group label {
            display: block;
            margin-bottom: 5px;
            color: #333;
            font-weight: 500;
        }
        .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 14px;
        }
        .btn-primary {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 25px;
            cursor: pointer;
            font-weight: 600;
            width: 100%;
        }
    `;
    document.head.appendChild(style);
    
    // Close modal functionality
    const closeBtn = modal.querySelector('.modal-close');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', () => modal.remove());
    overlay.addEventListener('click', () => modal.remove());
    
    return modal;
}

// Add mobile menu styles
const mobileStyles = document.createElement('style');
mobileStyles.textContent = `
    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 10px;
    }
    
    @media (max-width: 768px) {
        .mobile-nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(102, 126, 234, 0.95);
            backdrop-filter: blur(10px);
            transform: translateY(-100%);
            transition: transform 0.3s ease-out;
        }
        
        .mobile-nav.mobile-active {
            transform: translateY(0);
        }
        
        .mobile-nav ul {
            flex-direction: column;
            padding: 20px;
        }
        
        .mobile-nav a {
            padding: 15px 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .mobile-nav a:last-child {
            border-bottom: none;
        }
    }
`;
document.head.appendChild(mobileStyles); 