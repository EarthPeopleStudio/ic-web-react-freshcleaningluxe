import React from 'react';
import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const SEOv2: React.FC<SEOProps> = ({
  title = 'Professional Cleaning Services | Fresh Cleaning Luxe',
  description = 'Top-rated 24/7 cleaning services in Utah County',
  keywords = 'cleaning services, house cleaning'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
  }, [title, description, keywords]);
  
  const updateMetaTag = (name: string, content: string) => {
    let meta = document.querySelector(`meta[name="${name}"]`);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', name);
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };
  
  return null;
};

export default SEOv2; 