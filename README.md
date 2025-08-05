# 🌟 Website Tin Tức Việt Nam

Một website tin tức Việt Nam hiện đại, responsive và đầy đủ tính năng được xây dựng bằng HTML, CSS và JavaScript.

## ✨ Tính năng nổi bật

### 🎨 Giao diện
- **Thiết kế hiện đại**: Giao diện đẹp mắt với gradient màu sắc và hiệu ứng sinh động
- **Responsive**: Tương thích hoàn hảo trên mọi thiết bị (desktop, tablet, mobile)
- **Animations**: Hiệu ứng chuyển động mượt mà và chuyên nghiệp
- **Typography**: Sử dụng font Roboto cho khả năng đọc tốt

### 📰 Nội dung tin tức
- **Tin nổi bật**: Hiển thị tin tức quan trọng với hình ảnh lớn
- **Tin mới nhất**: Grid layout hiển thị các tin tức mới
- **Breaking News**: Thanh tin nóng với hiệu ứng cuộn tự động
- **Phân loại tin**: Thời sự, Kinh tế, Thể thao, Giải trí, Công nghệ, Sức khỏe, Giáo dục

### 🔧 Tính năng tương tác
- **Tìm kiếm**: Chức năng tìm kiếm tin tức với validation
- **Đăng nhập/Đăng ký**: Modal form với validation email
- **Newsletter**: Đăng ký nhận tin tức qua email
- **Thời tiết**: Widget hiển thị thông tin thời tiết Hà Nội
- **Tin đọc nhiều**: Danh sách tin tức được đọc nhiều nhất

### 📱 Responsive Design
- **Mobile-first**: Tối ưu cho thiết bị di động
- **Mobile menu**: Menu hamburger cho màn hình nhỏ
- **Flexible layout**: Grid system linh hoạt
- **Touch-friendly**: Các nút và liên kết dễ chạm

### ⚡ Hiệu suất
- **Lazy loading**: Tải hình ảnh theo nhu cầu
- **Smooth animations**: Hiệu ứng mượt mà không lag
- **Optimized images**: Hình ảnh được tối ưu từ Unsplash
- **Fast loading**: Tải trang nhanh chóng

## 🚀 Cách sử dụng

### 1. Tải xuống
```bash
git clone https://github.com/hieu251205/demo_genAI.git
cd demo_genAI
```

### 2. Mở website
- Mở file `index.html` trong trình duyệt web
- Hoặc sử dụng live server để chạy local

### 3. Tính năng có thể test
- **Tìm kiếm**: Nhập từ khóa vào ô tìm kiếm
- **Navigation**: Click vào các menu để xem hiệu ứng
- **Đăng nhập/Đăng ký**: Click nút để mở modal
- **Newsletter**: Nhập email để đăng ký
- **Responsive**: Thay đổi kích thước cửa sổ trình duyệt

## 📁 Cấu trúc file

```
demo_genAI/
├── index.html          # File HTML chính
├── styles.css          # File CSS styling
├── script.js           # File JavaScript tương tác
└── README.md           # Hướng dẫn sử dụng
```

## 🎯 Các tính năng chi tiết

### Header
- Logo với icon báo chí
- Thanh tìm kiếm với validation
- Nút đăng nhập/đăng ký
- Menu navigation với hiệu ứng hover

### Breaking News
- Hiển thị tin nóng với animation cuộn
- Icon sấm sét với hiệu ứng pulse
- Tự động thay đổi tin tức mỗi 8 giây

### Main Content
- **Featured News**: Tin nổi bật với layout 2 cột
- **Latest News**: Grid 4 cột hiển thị tin mới
- **Sidebar**: Widget thời tiết, tin đọc nhiều, quảng cáo

### Footer
- Thông tin về website
- Danh sách chuyên mục
- Thông tin liên hệ
- Form đăng ký newsletter
- Social media links

### JavaScript Features
- **Search functionality**: Tìm kiếm với notification
- **Navigation**: Chuyển đổi active state
- **Weather widget**: Cập nhật thời tiết tự động
- **Newsletter**: Validation email và subscription
- **Animations**: Intersection Observer cho fade-in
- **Mobile menu**: Hamburger menu cho mobile
- **Lazy loading**: Tải hình ảnh theo nhu cầu
- **Scroll effects**: Header hide/show khi scroll
- **Notification system**: Hiển thị thông báo đẹp mắt
- **Modal system**: Form đăng nhập/đăng ký

## 🎨 Màu sắc và thiết kế

### Color Palette
- **Primary**: `#667eea` - `#764ba2` (Gradient)
- **Accent**: `#ffd700` (Gold)
- **Success**: `#28a745` (Green)
- **Error**: `#dc3545` (Red)
- **Warning**: `#ffc107` (Yellow)
- **Info**: `#17a2b8` (Blue)

### Typography
- **Font**: Roboto (Google Fonts)
- **Weights**: 300, 400, 500, 700
- **Sizes**: Responsive từ 12px đến 32px

### Spacing
- **Container**: max-width 1200px
- **Gap**: 20px, 25px, 30px, 40px
- **Padding**: 15px, 20px, 25px
- **Border-radius**: 8px, 10px, 12px, 15px, 25px

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🔧 Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa biến CSS trong file `styles.css`:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --accent-color: #ffd700;
    --success-color: #28a745;
    --error-color: #dc3545;
}
```

### Thêm tin tức mới
Chỉnh sửa HTML trong file `index.html`:
```html
<article class="news-card">
    <div class="news-image">
        <img src="path/to/image.jpg" alt="Tin tức mới">
        <div class="news-category">Thể thao</div>
    </div>
    <div class="news-content">
        <h4>Tiêu đề tin tức</h4>
        <p>Nội dung tóm tắt...</p>
        <div class="news-meta">
            <span><i class="far fa-clock"></i> 2 giờ trước</span>
            <span><i class="far fa-eye"></i> 1.5K lượt xem</span>
        </div>
    </div>
</article>
```

### Thay đổi thời tiết
Chỉnh sửa trong file `script.js`:
```javascript
const weatherConditions = [
    { temp: '25°C', desc: 'Nhiều mây', icon: 'fa-cloud-sun', humidity: '75%', wind: '10 km/h' },
    // Thêm điều kiện thời tiết mới
];
```

## 🌟 Tính năng nâng cao

### SEO Optimized
- Meta tags đầy đủ
- Semantic HTML structure
- Alt text cho hình ảnh
- Schema markup ready

### Accessibility
- ARIA labels
- Keyboard navigation
- High contrast colors
- Screen reader friendly

### Performance
- Optimized images
- Minified CSS/JS (production)
- CDN for external resources
- Caching strategies

## 📞 Hỗ trợ

Nếu có bất kỳ câu hỏi hoặc góp ý nào, vui lòng liên hệ:
- **Email**: info@tintucvietnam.com
- **GitHub**: [hieu251205/demo_genAI](https://github.com/hieu251205/demo_genAI)

## 📄 License

Dự án này được phát hành dưới MIT License. Xem file LICENSE để biết thêm chi tiết.

---

**Tác giả**: Hieu251205  
**Phiên bản**: 1.0.0  
**Ngày tạo**: 2024  
**Công nghệ**: HTML5, CSS3, JavaScript ES6+ 