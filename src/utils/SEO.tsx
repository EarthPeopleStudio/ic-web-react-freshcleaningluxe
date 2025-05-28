import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  location?: string;
  schemaType?: 'Organization' | 'LocalBusiness' | 'Service' | 'FAQPage' | 'Article';
  keywords?: string;
  businessAddress?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  businessPhone?: string;
  businessEmail?: string;
  businessName?: string;
  isHomePage?: boolean;
  pageType?: 'home' | 'about' | 'services' | 'contact' | 'blog' | 'service';
  serviceName?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Professional Cleaning Services | Fresh Cleaning Luxe | Utah County',
  description = 'Top-rated 24/7 cleaning services in Utah County. Residential, commercial, and deep cleaning in Spanish Fork, Payson, Provo, Salem & surrounding areas. Licensed and insured professionals.',
  canonicalUrl = 'https://freshcleaningluxe.com',
  ogType = 'website',
  ogImage = '/og-image.jpg',
  location = 'Utah County, Spanish Fork, Payson, Provo, Salem',
  schemaType = 'LocalBusiness',
  keywords = 'cleaning services, house cleaning, commercial cleaning, cleaning company, maid service, Utah County, Spanish Fork, Payson, Provo, Salem, professional cleaners, deep cleaning, move-in cleaning, 24 hour cleaning service, bathroom cleaning, kitchen cleaning',
  businessAddress = {
    street: 'Spanish Fork',
    city: 'Spanish Fork',
    region: 'UT',
    postalCode: '84660',
    country: 'United States'
  },
  businessPhone = '+13855654128',
  businessEmail = 'book@freshcleaningluxe.com',
  businessName = 'Fresh Cleaning Luxe, LLC',
  isHomePage = false,
  pageType = 'home',
  serviceName = ''
}) => {
  
  // Create appropriate schema based on page type
  let schemaObj: any = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: businessName,
    description: description,
    url: canonicalUrl,
    telephone: businessPhone,
    email: businessEmail,
    image: '/logo.jpg',
    logo: '/logo.jpg',
    slogan: '24/7 Professional Cleaning Services in Utah County',
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessAddress.street,
      addressLocality: businessAddress.city,
      addressRegion: businessAddress.region,
      postalCode: businessAddress.postalCode,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '40.1153',
      longitude: '-111.6550'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Spanish Fork',
        sameAs: 'https://en.wikipedia.org/wiki/Spanish_Fork,_Utah'
      },
      {
        '@type': 'City',
        name: 'Payson',
        sameAs: 'https://en.wikipedia.org/wiki/Payson,_Utah'
      },
      {
        '@type': 'City',
        name: 'Provo',
        sameAs: 'https://en.wikipedia.org/wiki/Provo,_Utah'
      },
      {
        '@type': 'City',
        name: 'Salem',
        sameAs: 'https://en.wikipedia.org/wiki/Salem,_Utah'
      },
      {
        '@type': 'City',
        name: 'Springville',
        sameAs: 'https://en.wikipedia.org/wiki/Springville,_Utah'
      },
      {
        '@type': 'City',
        name: 'Mapleton',
        sameAs: 'https://en.wikipedia.org/wiki/Mapleton,_Utah'
      }
    ],
    sameAs: [
      'https://www.facebook.com/share/1XzoFC5K7K/',
      'https://www.instagram.com/freshcleaningluxe',
      'https://freshcleaningluxe.com'
    ],
    priceRange: '$$',
    paymentAccepted: ['Credit Card', 'Debit Card', 'Cash'],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
      ],
      opens: '00:00',
      closes: '23:59'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Cleaning Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Cleaning',
            description: 'Professional house cleaning services throughout Utah County, customized to your needs.',
            areaServed: 'Utah County'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Cleaning',
            description: 'Comprehensive cleaning services for businesses and commercial properties in Utah County.',
            areaServed: 'Utah County'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Deep Cleaning & Maintenance',
            description: 'Thorough deep cleaning services to eliminate buildup, grime, and hidden dirt.',
            areaServed: 'Utah County'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Move-In/Move-Out Cleaning',
            description: 'Specialized cleaning services for residential properties during moves.',
            areaServed: 'Utah County'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Post-Construction Cleaning',
            description: 'Detailed cleaning services after construction or renovation projects.',
            areaServed: 'Utah County'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: '24/7 Cleaning Services',
            description: 'Around-the-clock cleaning services available to accommodate any schedule.',
            areaServed: 'Utah County'
          }
        }
      ]
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://freshcleaningluxe.com/book',
        inLanguage: 'en-US',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/IOSPlatform',
          'http://schema.org/AndroidPlatform'
        ]
      },
      result: {
        '@type': 'Reservation',
        name: 'Book Cleaning Service'
      }
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Language and Locale */}
      <html lang="en" />
      <meta name="geo.region" content="US-UT" />
      <meta name="geo.placename" content={location} />
      <meta name="geo.position" content="40.1153;-111.6550" />
      <meta name="ICBM" content="40.1153, -111.6550" />
      
      {/* Local Business Information */}
      <meta name="business:contact_data:street_address" content={businessAddress.street} />
      <meta name="business:contact_data:locality" content={businessAddress.city} />
      <meta name="business:contact_data:region" content={businessAddress.region} />
      <meta name="business:contact_data:postal_code" content={businessAddress.postalCode} />
      <meta name="business:contact_data:country_name" content={businessAddress.country} />
      <meta name="business:contact_data:email" content={businessEmail} />
      <meta name="business:contact_data:phone_number" content={businessPhone} />
      <meta name="business:contact_data:website" content={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Fresh Cleaning Luxe" />
      <meta property="og:locale" content="en_US" />
      <meta property="business:hours:day" content="monday" />
      <meta property="business:hours:start" content="00:00" />
      <meta property="business:hours:end" content="23:59" />
      <meta property="business:hours:day" content="tuesday" />
      <meta property="business:hours:start" content="00:00" />
      <meta property="business:hours:end" content="23:59" />
      <meta property="business:hours:day" content="wednesday" />
      <meta property="business:hours:start" content="00:00" />
      <meta property="business:hours:end" content="23:59" />
      <meta property="business:hours:day" content="thursday" />
      <meta property="business:hours:start" content="00:00" />
      <meta property="business:hours:end" content="23:59" />
      <meta property="business:hours:day" content="friday" />
      <meta property="business:hours:start" content="00:00" />
      <meta property="business:hours:end" content="23:59" />
      <meta property="business:hours:day" content="saturday" />
      <meta property="business:hours:start" content="00:00" />
      <meta property="business:hours:end" content="23:59" />
      <meta property="business:hours:day" content="sunday" />
      <meta property="business:hours:start" content="00:00" />
      <meta property="business:hours:end" content="23:59" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Local Business / Service Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaObj)}
      </script>
      
      {/* Add breadcrumbs schema if not homepage */}
      {!isHomePage && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://freshcleaningluxe.com'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': pageType.charAt(0).toUpperCase() + pageType.slice(1),
                'item': `https://freshcleaningluxe.com/${pageType}`
              },
              ...(serviceName ? [{
                '@type': 'ListItem',
                'position': 3,
                'name': serviceName,
                'item': `https://freshcleaningluxe.com/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`
              }] : [])
            ]
          })}
        </script>
      )}
      
      {/* Mobile optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      
      {/* Alternate Language Pages */}
      <link rel="alternate" href="https://freshcleaningluxe.com" hrefLang="en-us" />
    </Helmet>
  );
};

export default SEO; 