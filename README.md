# MediCare Hospital Website

A sophisticated, modern, and fully responsive private hospital website built with Next.js 14, TypeScript, and Tailwind CSS. Features a complex design with rich content, multiple interactive sections, and professional medical aesthetics.

## ✨ Features

### 🎨 **Advanced Design**
- **Sophisticated Layout**: Multi-layered design with complex sections and visual hierarchy
- **Professional Medical Theme**: White and light blue color scheme with medical iconography
- **Rich Visual Content**: Image placeholders for medical facilities, team photos, and equipment
- **Modern Animations**: Smooth transitions, hover effects, and micro-interactions
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)

### 📱 **5 Comprehensive Pages**
- **Home**: Hero section, statistics dashboard, features grid, services preview, testimonials, news section
- **About**: Mission/vision, values, timeline, leadership team, facilities showcase, certifications
- **Services**: Detailed service cards, emergency services, technology showcase, department contacts
- **Blog**: Featured articles, news updates, health tips, medical insights, newsletter signup
- **Contact**: Multiple contact forms, emergency contacts, department directory, office hours

### 🚀 **Advanced Components**
- **Interactive Navigation**: Sticky header with mobile menu and active states
- **Contact Forms**: Multiple form types (general, appointment, telemedicine) with validation
- **Statistics Dashboard**: Animated counters and performance metrics
- **Testimonials Section**: Patient stories with ratings and service categories
- **Emergency Services**: Prominent emergency contact information and alerts
- **Image Galleries**: Placeholder structure for medical facility photos
- **Blog System**: Article categorization, search functionality, and featured content

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open in Browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
hospital-client/
├── app/
│   ├── about/
│   │   └── page.tsx          # Enhanced About page with team, timeline, facilities
│   ├── blog/
│   │   └── page.tsx          # Blog/news page with articles and categories
│   ├── contact/
│   │   └── page.tsx          # Advanced Contact page with multiple forms
│   ├── services/
│   │   └── page.tsx          # Comprehensive Services page with detailed cards
│   ├── globals.css           # Enhanced global styles with animations
│   ├── layout.tsx            # Root layout with navigation and footer
│   └── page.tsx              # Sophisticated Home page with multiple sections
├── components/
│   ├── AnimatedCounter.tsx   # Animated counter component for statistics
│   ├── FloatingElements.tsx  # Floating background elements
│   ├── Footer.tsx            # Enhanced footer with comprehensive links
│   ├── Navbar.tsx            # Advanced navigation with mobile menu
│   └── ParallaxSection.tsx   # Parallax scrolling component
├── public/
│   └── images/               # Image placeholders and assets
│       └── placeholder.txt   # List of required images
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Enhanced Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## 🎨 Design Features

### Color Palette
- **Primary**: Light blue gradient (#0ea5e9 to #0284c7)
- **Secondary**: White and light blue gradients
- **Accent**: Red for emergency elements (#dc2626)
- **Success**: Green for positive indicators (#16a34a)
- **Warning**: Yellow/Orange for alerts (#ea580c)
- **Text**: Dark gray (#111827) for optimal readability

### Responsive Design
- **Mobile First**: < 768px with touch-optimized interactions
- **Tablet**: 768px - 1024px with adaptive layouts
- **Desktop**: > 1024px with full feature sets
- **Large Screens**: > 1280px with enhanced spacing

### Advanced Components
- **Enhanced Navbar**: Sticky navigation with mobile menu and active states
- **Comprehensive Footer**: Multi-column layout with contact info and links
- **Hero Sections**: Full-screen headers with gradient overlays and CTAs
- **Service Cards**: Detailed cards with statistics, features, and procedures
- **Interactive Forms**: Multiple form types with real-time validation
- **Statistics Dashboard**: Animated counters with performance metrics
- **Testimonials**: Patient stories with ratings and service categories
- **Blog System**: Article categorization with search and filtering
- **Emergency Alerts**: Prominent emergency contact information

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your custom blue shades
  }
}
```

### Content
- Update hospital information in each page component
- Modify contact details in Footer and Contact page
- Customize services and specialties in Services page

### Styling
- All styles use Tailwind CSS utility classes
- Custom styles can be added to `app/globals.css`
- Component-specific styles are co-located with components

## Deployment

This project can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any static hosting service**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License & Copyright

**Copyright © 2024 Rukshan Malishaka**

This project and all its source code is owned by **Rukshan Malishaka**. All rights reserved.

- **Developer**: Rukshan Malishaka
- **Website**: [rukshanm.com](https://rukshanm.com)
- **Contact**: Available through the developer website

This project was created for demonstration purposes and showcases modern web development techniques using Next.js, TypeScript, and Tailwind CSS for a professional medical website.
