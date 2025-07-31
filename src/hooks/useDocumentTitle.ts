import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Define the title mapping for different routes
const titleMap: Record<string, string> = {
  '/': 'Desmond - Home',
  '/about': 'Desmond - About',
  '/contact': 'Contact Desmond'
};

// Default title for unknown routes
const defaultTitle = 'Desmond - The Geek Toolbox';

export function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    // Get the title for the current path, or use default
    const pageTitle = titleMap[location.pathname] || defaultTitle;
    
    // Update the document title
    document.title = pageTitle;
  }, [location.pathname]); // Re-run when the pathname changes
} 