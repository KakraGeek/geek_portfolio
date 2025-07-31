import { useEffect } from 'react';
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

  useEffect(() => {
    // Update document title
    document.title = finalTitle;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', finalDescription);
    
    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', finalKeywords.join(', '));
    
    // Update Open Graph tags
    updateMetaTag('og:title', finalTitle);
    updateMetaTag('og:description', finalDescription);
    updateMetaTag('og:url', currentUrl);
    updateMetaTag('og:type', type);
    updateMetaTag('og:image', `https://desmonds-webdev-portfolio.vercel.app${image}`);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', `https://desmonds-webdev-portfolio.vercel.app${image}`);
    
    // Update canonical URL
    updateCanonicalUrl(currentUrl);
    
    // Add structured data
    addStructuredData();
    
  }, [location.pathname, finalTitle, finalDescription, finalKeywords, currentUrl, type, image]);

  // Helper function to update meta tags
  const updateMetaTag = (property: string, content: string) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`) || 
                  document.querySelector(`meta[name="${property}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      if (property.startsWith('og:')) {
        metaTag.setAttribute('property', property);
      } else if (property.startsWith('twitter:')) {
        metaTag.setAttribute('name', property);
      }
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };

  // Helper function to update canonical URL
  const updateCanonicalUrl = (url: string) => {
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  };

  // Helper function to add structured data
  const addStructuredData = () => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Person structured data
    const personData = {
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
    
    addStructuredDataScript(personData);
    
    // Organization structured data
    const organizationData = {
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
    };
    
    addStructuredDataScript(organizationData);
    
    // Service structured data
    const serviceData = {
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
    };
    
    addStructuredDataScript(serviceData);
  };

  // Helper function to add structured data script
  const addStructuredDataScript = (data: any) => {
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  // This component doesn't render anything visible
  return null;
} 