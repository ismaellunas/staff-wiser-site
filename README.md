# Staff Wiser - Virtual Staffing Solutions

A modern, professional static website for **Staff Wiser**, an established consulting and staffing agency founded in 2018, specializing in connecting businesses with skilled virtual professionals.

## 🚀 Features

- **Modern Design**: Clean, MSTR.nl-inspired aesthetic with professional typography
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Performance Optimized**: Static export configuration for fast loading
- **SEO Ready**: Comprehensive meta tags, structured data, and semantic HTML
- **Interactive Components**: Smooth animations and hover effects using Framer Motion
- **Professional Content**: Complete business information, services, testimonials, and career listings

## 🎨 Design Specifications

### Typography
- **Primary Font**: Playfair Display (Etna Sans Serif fallback)
- **Body Font**: Inter (system font stack)

### Color Palette
- **Primary**: #E69395 (warm rose/pink)
- **Secondary**: #3B3B3B (charcoal gray)
- **Background**: #FFFFFF (white)
- **Text**: #3B3B3B for body text, white for text on colored backgrounds

## 🛠️ Technical Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel-ready configuration
- **Type**: Static website (export configuration)

## 📁 Project Structure

```
/pages
  - index.tsx (homepage)
  - services.tsx (detailed services page)
  - about.tsx (company information)
  - careers.tsx (job listings)
  - contact.tsx (contact form and info)
  - _app.tsx (global styles and fonts)
  - _document.tsx (HTML document structure)
/components
  - Header.tsx (navigation)
  - Hero.tsx (hero section)
  - Services.tsx (services showcase)
  - Process.tsx (3-step process)
  - Testimonials.tsx (client testimonials)
  - About.tsx (company story)
  - Careers.tsx (job listings)
  - Contact.tsx (contact form)
  - Footer.tsx (footer)
/styles
  - globals.css (global styles and Tailwind)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd staff-wiser-site
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run export
# or
yarn build
yarn export
```

## 📄 Pages Overview

### Homepage (`/`)
- Hero section with compelling value proposition
- Services overview with interactive cards
- 3-step process visualization
- Client testimonials carousel
- Company overview
- Contact form

### Services (`/services`)
- Detailed service descriptions
- Pricing information
- Feature lists and benefits
- Call-to-action sections

### About (`/about`)
- Company story and mission
- Team member profiles
- Timeline of company milestones
- Core values and culture
- Impact statistics

### Careers (`/careers`)
- Job listings with detailed descriptions
- Application process overview
- Company culture information
- Benefits and perks

### Contact (`/contact`)
- Multiple contact methods
- Professional contact form
- FAQ section
- Response time commitments

## 🎯 Key Features

### Professional Design
- Clean, minimal layout inspired by MSTR.nl
- Strategic use of rose accent color (#E69395)
- Professional typography hierarchy
- Abundant white space for readability

### Interactive Elements
- Smooth scroll animations
- Hover effects on cards and buttons
- Testimonial carousel
- Mobile-responsive navigation

### Business Content
- 7+ years of experience messaging
- Professional testimonials with results
- Detailed service descriptions
- Complete career listings
- Contact forms with validation

### SEO Optimization
- Comprehensive meta tags
- Structured data (JSON-LD)
- Semantic HTML structure
- Optimized images and performance

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push to main branch
3. Custom domain configuration available

### Other Static Hosts
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large Desktop (1280px+)

## 🔧 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: '#E69395',
  secondary: '#3B3B3B',
  // ... other colors
}
```

### Content
- Update company information in component files
- Modify testimonials in `Testimonials.tsx`
- Update job listings in `Careers.tsx`
- Customize contact information in `Contact.tsx`

### Styling
- Global styles in `styles/globals.css`
- Component-specific styles using Tailwind classes
- Custom animations in `tailwind.config.js`

## 📞 Support

For questions or support regarding this website:
- Email: hello@staffwiser.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is proprietary to Staff Wiser. All rights reserved.

---

**Staff Wiser** - Connecting businesses with skilled virtual professionals since 2018.