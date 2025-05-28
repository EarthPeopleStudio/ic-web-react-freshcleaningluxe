import React, { useState } from 'react';
import '../styles/FAQ.css';

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  const faqItems: FAQItem[] = [
    {
      question: "What cleaning services do you offer in Utah County?",
      answer: "We offer a wide range of cleaning services throughout Utah including residential cleaning, commercial cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, carpet cleaning, and specialized cleaning services. We serve all of Utah.",
      category: "services"
    },
    {
      question: "How much does house cleaning cost in Utah County?",
      answer: "Cleaning costs vary based on the size of your home, the type of cleaning needed, and specific requirements. Our residential cleaning services in Utah County typically range from $120-$250. We provide free, no-obligation quotes tailored to your specific needs.",
      category: "pricing"
    },
    {
      question: "Are your cleaning professionals insured and background checked?",
      answer: "Yes, all of our cleaning professionals are fully insured, bonded, and have undergone thorough background checks. We prioritize your safety and security, and only hire trusted professionals to service your home or business in Utah County.",
      category: "company"
    },
    {
      question: "What areas in Utah do you service?",
      answer: "We proudly serve throughout the entire state of Utah. If you have any questions about our service area, please contact us directly.",
      category: "services"
    },
    {
      question: "How far in advance should I book your cleaning services?",
      answer: "We recommend booking at least 3-5 days in advance for regular cleaning services to ensure availability. However, we understand that emergencies happen, and we do our best to accommodate last-minute requests when possible.",
      category: "booking"
    },
    {
      question: "Do I need to provide cleaning supplies or equipment?",
      answer: "No, our professional cleaners bring all necessary cleaning supplies, equipment, and eco-friendly products. If you have specific products you prefer we use in your home, just let us know in advance.",
      category: "services"
    },
    {
      question: "What is your cancellation policy?",
      answer: "We request at least 24 hours' notice for cancellations to avoid any cancellation fees. We understand that emergencies happen, so please contact us as soon as possible if you need to reschedule.",
      category: "policy"
    },
    {
      question: "Do you offer recurring cleaning services in Utah County?",
      answer: "Yes, we offer weekly, bi-weekly, and monthly recurring cleaning services throughout Utah County. Regular clients receive priority scheduling and special pricing packages.",
      category: "services"
    },
    {
      question: "What cleaning products do you use?",
      answer: "We primarily use eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. If you have specific allergies or product preferences, please let us know, and we'll accommodate your needs.",
      category: "services"
    },
    {
      question: "How long does a typical cleaning service take?",
      answer: "The duration depends on the size of your property and the type of cleaning service. A standard cleaning for a 2,000 square foot home typically takes 2-3 hours with a team of 2 cleaners. Deep cleaning services may take longer.",
      category: "services"
    },
    {
      question: "Do I need to be home during the cleaning service?",
      answer: "No, you don't need to be present during the cleaning service. Many of our clients provide a key or entry instructions. We maintain strict security protocols for handling keys and accessing properties.",
      category: "booking"
    },
    {
      question: "What's included in your standard cleaning package?",
      answer: "Our standard cleaning includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and general tidying. We offer customizable cleaning plans, so you can add or remove services based on your specific needs.",
      category: "services"
    }
  ];
  
  // Extract unique categories and ensure they are all strings
  const uniqueCategories = Array.from(new Set(faqItems.map(item => item.category || "uncategorized")));
  const categories: string[] = ["all", ...uniqueCategories];
  
  const filteredFAQs = activeCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);
  
  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Common questions about our cleaning services in Utah County</p>
        
        <div className="faq-categories">
          {categories.map((category, index) => (
            <button 
              key={index}
              className={`category-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="faq-container">
          {filteredFAQs.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-toggle">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Still have questions about our cleaning services in Utah County?</p>
          <a href="/contact" className="btn-primary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 