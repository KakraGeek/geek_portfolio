import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { seoKeywords, metaDescriptions, pageTitles } from '@/data/seo-keywords';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
}

export default function SEO({
  title,
  description,
  keywords = [],
  image = '/hero_image_1.jpg',
  url,
  type = 'website'
}: SEOProps) {
  const location = useLocation();
  const currentUrl = url || `https://desmonds-webdev-portfolio.vercel.app${location.pathname}`;
  
  // Get page-specific data
  const getPageData = () => {
    switch (location.pathname) {
      case '/':
        return {
          title: pageTitles.home,
          description: metaDescriptions.home,
          keywords: [
            ...seoKeywords.primary,
            ...seoKeywords.geographic,
            ...seoKeywords.business
          ]
        };
      case '/about':
        return {
          title: pageTitles.about,
          description: metaDescriptions.about,
          keywords: [
            ...seoKeywords.primary,
            ...seoKeywords.technical,
            ...seoKeywords.geographic
          ]
        };
      case '/contact':
        return {
          title: pageTitles.contact,
          description: metaDescriptions.contact,
          keywords: [
            ...seoKeywords.primary,
            ...seoKeywords.services,
            ...seoKeywords.geographic
          ]
        };
      default:
        return {
          title: title || 'Desmond - The Geek Toolbox',
          description: description || 'Professional web developer creating custom digital tools and web applications for businesses in Ghana.',
          keywords: keywords.length > 0 ? keywords : seoKeywords.primary
        };
    }
  };

  const pageData = getPageData();
  const finalTitle = title || pageData.title;
  const finalDescription = description || pageData.description;
  const finalKeywords = keywords.length > 0 ? keywords : pageData.keywords;

  // Structured data for rich snippets
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Desmond",
    "jobTitle": "Professional Web Developer",
    "description": "Custom digital tools and web applications for businesses, teams, and entrepreneurs in Ghana",
    "url": "https://desmonds-webdev-portfolio.vercel.app",
    "image": "https://desmonds-webdev-portfolio.vercel.app/hero_image_1.jpg",
    "sameAs": [
      "mailto:desmond.asiedu@gmail.com",
      "mailto:thegeektoolbox@gmail.com"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Ghana"
    },
    "knowsAbout": [
      "Web Development",
      "Custom Web Applications",
      "Workflow Automation",
      "Business Process Improvement",
      "React Development",
      "TypeScript Development",
      "Digital Solutions"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "The Geek Toolbox",
      "description": "Digital studio specializing in custom digital tools and web applications"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords.join(', ')} />
      <meta name="author" content="Desmond" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`https://desmonds-webdev-portfolio.vercel.app${image}`} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="The Geek Toolbox" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`https://desmonds-webdev-portfolio.vercel.app${image}`} />
      <meta name="twitter:creator" content="@thegeektoolbox" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="The Geek Toolbox" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <link rel="apple-touch-icon" href="/Geek_Logo_res-removebg-preview.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Additional Structured Data for Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "The Geek Toolbox",
          "url": "https://desmonds-webdev-portfolio.vercel.app",
          "logo": "https://desmonds-webdev-portfolio.vercel.app/Geek_Logo_res-removebg-preview.png",
          "description": "Custom digital tools and web applications for businesses, teams, and entrepreneurs in Ghana",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Ghana"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+233244299095",
            "contactType": "customer service",
            "email": "desmond.asiedu@gmail.com"
          },
          "sameAs": [
            "mailto:desmond.asiedu@gmail.com",
            "mailto:thegeektoolbox@gmail.com"
          ]
        })}
      </script>
      
      {/* Service Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Web Development Services",
          "provider": {
            "@type": "Organization",
            "name": "The Geek Toolbox"
          },
          "description": "Custom web applications, workflow automation, and digital tools for businesses",
          "areaServed": {
            "@type": "Country",
            "name": "Ghana"
          },
          "serviceType": [
            "Web Development",
            "Custom Software Development",
            "Business Process Automation",
            "Workflow Management Systems"
          ]
        })}
      </script>
    </Helmet>
  );
} 