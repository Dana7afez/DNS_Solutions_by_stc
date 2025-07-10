# DNS Solutions by stc - Complete Website

A modern, comprehensive website for Solutions by stc featuring FAQs, User Guides, Knowledge Base, and Blogs with professional design and enhanced user experience.

## 🚀 Live Demo

Visit the live site: [https://dana7afez.github.io/DNS_Solutions_by_stc/](https://dana7afez.github.io/DNS_Solutions_by_stc/)

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons
- **PNPM** - Fast, disk space efficient package manager

## 📋 Features

### 🏠 **Main Website**
- ✅ **Professional navigation header** with dropdowns and mobile menu
- ✅ **Responsive design** for all devices
- ✅ **Consistent hero sections** across all pages
- ✅ **Modern STC brand-compliant styling**
- ✅ **Optimized performance and SEO**

### ❓ **FAQ Page**
- ✅ **Category-based FAQ navigation**
- ✅ **Collapsible FAQ items** with smooth animations
- ✅ **Professional illustrations**
- ✅ **Enhanced search functionality**
- ✅ **Multiple categories** (Registration, Billing, Technical, Transfer, Restore)

### 📖 **User Guide**
- ✅ **Step-by-step domain registration guide**
- ✅ **Contact management instructions**
- ✅ **Domain actions and DNS management**
- ✅ **Domain transfer procedures**
- ✅ **Domain restoration process**
- ✅ **Payment information management**
- ✅ **Visual step guides with screenshots**

### 🎓 **Knowledge Base**
- ✅ **Comprehensive documentation**
- ✅ **Organized information structure**
- ✅ **Easy navigation and search**

### 📝 **Blog Section**
- ✅ **Detailed articles and tutorials**
- ✅ **Rich content with images and formatting**
- ✅ **Responsive blog layout**

### 🎨 **Design & UX**
- ✅ **Consistent branding throughout**
- ✅ **Professional button styling**
- ✅ **Smooth animations and transitions**
- ✅ **Mobile-first responsive design**
- ✅ **Accessibility considerations**

## 🏃‍♂️ Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dana7afez/DNS_Solutions_by_stc.git
   cd DNS_Solutions_by_stc
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the main branch triggers a new deployment.

### Manual Deployment Steps:

1. **Build the project:**
   ```bash
   pnpm build
   # or
   npm run build
   ```

2. **Export static files:**
   ```bash
   pnpm export
   # or
   npm run export
   ```

3. **Deploy to GitHub Pages:**
   The GitHub Action will handle this automatically.

## 📁 Project Structure

```
DNS_Solutions_by_stc/
├── app/
│   ├── faqs/
│   │   └── page.tsx              # FAQ page with categories
│   ├── user-guide/
│   │   └── page.tsx              # Step-by-step user guide
│   ├── knowledge-base/
│   │   └── page.tsx              # Knowledge base hub
│   ├── blogs/
│   │   ├── page.tsx              # Blog listing page
│   │   └── [id]/
│   │       └── page.tsx          # Individual blog posts
│   ├── globals.css               # Global styles and components
│   └── layout.tsx                # Root layout with header
├── components/
│   ├── header.tsx                # Main navigation header
│   ├── footer.tsx                # Site footer
│   ├── back-button.tsx           # Reusable back button
│   ├── category-selector.tsx     # FAQ category selector
│   ├── faq-list.tsx             # FAQ items display
│   ├── faq-item.tsx             # Individual FAQ component
│   └── ui/                       # Shadcn UI components
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       └── ...                   # Other UI components
├── hooks/
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
├── lib/
│   ├── utils.ts                 # Utility functions
│   └── assets.ts                # Asset path helpers
├── public/
│   ├── logo.svg                 # STC logo
│   ├── browser tab icon.svg     # Favicon
│   ├── faq-illustration.png     # FAQ page illustration
│   ├── azer-logo.png           # Azer logo
│   ├── blog*.png               # Blog post images
│   ├── step*.png               # User guide screenshots
│   └── placeholder.svg         # Placeholder image
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── next.config.js              # Next.js configuration
├── next.config.mjs             # ES module config
├── tailwind.config.ts          # Tailwind CSS config
├── components.json             # Shadcn components config
├── pnpm-lock.yaml             # PNPM lock file
└── package.json               # Dependencies and scripts
```

## 🎨 Design System

The project follows the DNS Solutions by stc design system:

### Color Palette
- **Primary Color:** `#ff375e` (Pink/Red) - Main action buttons
- **Secondary Color:** `#29c0ff` (Blue) - Secondary elements  
- **Info Color:** `#4f018c` (Purple) - Navigation and links
- **Success Color:** `#00c48c` (Green) - Success states
- **Warning Color:** `#ffaf43` (Orange) - Warnings
- **Typography:** STC font family with system fallbacks

### Component Standards
- **Buttons:** 8px border-radius with hover animations
- **Cards:** 16px border-radius with subtle shadows
- **Hero Sections:** Consistent 50vh height across all pages
- **Back Buttons:** Compact, professional styling
- **Navigation:** Purple default with gray hover states

### Responsive Breakpoints
- **Mobile:** ≤480px
- **Tablet:** ≤768px  
- **Desktop:** >768px

## 🌐 Pages Overview

### 🏠 **Home/Landing**
- Main navigation hub
- Professional hero section
- Quick access to all sections

### ❓ **FAQ Section** (`/faqs`)
- **Registration:** Domain registration questions
- **Billing:** Payment and subscription queries  
- **Technical:** DNS and technical support
- **Transfer:** Domain transfer procedures
- **Restore:** Domain restoration process

### 📖 **User Guide** (`/user-guide`)
- **Register New Domain:** Complete registration walkthrough
- **Contacts:** Contact management instructions
- **Domain Actions:** DNS management and actions
- **Domain Transfer:** Transfer procedures
- **Domain Restore:** Restoration guidelines  
- **Payment Information:** Payment setup and management

### 🎓 **Knowledge Base** (`/knowledge-base`)
- Comprehensive documentation
- Best practices and tutorials
- Advanced topics and troubleshooting

### 📝 **Blog Section** (`/blogs`)
- Latest news and updates
- Technical articles and tutorials
- Industry insights and tips

## 🌐 Pages Overview

### 🏠 **Home/Landing**
- Main navigation hub
- Professional hero section
- Quick access to all sections

### ❓ **FAQ Section** (`/faqs`)
- **Registration:** Domain registration questions
- **Billing:** Payment and subscription queries  
- **Technical:** DNS and technical support
- **Transfer:** Domain transfer procedures
- **Restore:** Domain restoration process

### 📖 **User Guide** (`/user-guide`)
- **Register New Domain:** Complete registration walkthrough
- **Contacts:** Contact management instructions
- **Domain Actions:** DNS management and actions
- **Domain Transfer:** Transfer procedures
- **Domain Restore:** Restoration guidelines  
- **Payment Information:** Payment setup and management

### 🎓 **Knowledge Base** (`/knowledge-base`)
- Comprehensive documentation
- Best practices and tutorials
- Advanced topics and troubleshooting

### 📝 **Blog Section** (`/blogs`)
- Latest news and updates
- Technical articles and tutorials
- Industry insights and tips

## 📱 Responsive Design

- **Mobile First:** Optimized for mobile devices with touch-friendly interfaces
- **Tablet Support:** Enhanced layout for tablets with improved spacing
- **Desktop:** Full-featured desktop experience with optimized navigation
- **Touch Friendly:** Large touch targets and gesture support
- **Performance:** Optimized images and lazy loading for fast mobile experience

## 🔧 Configuration

### Environment Variables

No environment variables are required for this project.

### Next.js Configuration

The project uses static export configuration for GitHub Pages deployment:

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/DNS_Solutions_by_stc'
}
```

### Key Features
- **Static Site Generation (SSG)** for optimal performance
- **GitHub Pages compatibility** with proper asset paths
- **TypeScript** for type safety and better development experience
- **Modern ES modules** with Next.js 14 App Router

## 🚀 Performance & SEO

- ✅ **Static Site Generation (SSG)** for optimal performance
- ✅ **GitHub Pages compatibility** with proper asset paths
- ✅ **TypeScript** for type safety and better development experience
- ✅ **Responsive design** optimized for all devices
- ✅ **SEO-friendly** markup and meta tags


## 📄 License

This project was developed to enhance the Solutions by stc domain services website.

## 📞 Support

For Solutions by stc domain services:
- **Website:** [https://domains.solutions.com.sa](https://domains.solutions.com.sa)

---

Built with ❤️ for Solutions by stc | Enhancing domain management experience


