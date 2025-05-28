import { useEffect } from 'react';

interface PageTitleProps {
  title: string;
}

// This component directly sets document.title on every render
const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  useEffect(() => {
    // Set the title immediately
    const prevTitle = document.title;
    document.title = title;
    console.log(`PageTitle: Setting title to ${title}`);
    
    // Cleanup when component unmounts
    return () => {
      console.log(`PageTitle: Removing title ${title}, restoring ${prevTitle}`);
      document.title = prevTitle;
    };
  }, [title]);
  
  return null;
};

export default PageTitle; 