import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/QuoteForm.css';
import SuccessModal from './SuccessModal';
import mrsD2 from '../assets/img/mrs_d_2.png';

// Interface for form validation errors
interface FormErrors {
  [key: string]: string;
}

const QuoteForm: React.FC = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<string>("");
  
  // Get current date for min date attribute
  const today = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
  
  // Get current time for time validation
  const now = new Date();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  
  // Form errors state
  const [errors, setErrors] = useState<FormErrors>({});
  const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});

  const [formData, setFormData] = useState({
    serviceType: '',
    serviceTypeOther: '',
    size: '',
    sizeOther: '',
    additionalServices: {
      windows: false,
      carpet: false,
      appliances: false,
      disinfection: false,
      other: false
    },
    additionalServicesOther: '',
    address: '',
    city: '',
    dateTimeOption: 'select', // 'select' or 'manual'
    date: '',
    time: '',
    manualDateTime: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const validateField = (name: string, value: string): string => {
    // Skip validation for optional fields
    if (name === 'notes' || 
        (name === 'serviceTypeOther' && formData.serviceType !== 'other') ||
        (name === 'sizeOther' && formData.size !== 'other') ||
        (name === 'additionalServicesOther' && !formData.additionalServices.other) ||
        (name === 'date' && formData.dateTimeOption !== 'select') ||
        (name === 'time' && formData.dateTimeOption !== 'select') ||
        (name === 'manualDateTime' && formData.dateTimeOption !== 'manual')) {
      return '';
    }

    // Required field validation
    if (!value.trim()) {
      return 'This field is required';
    }

    // Email validation
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
    }

    // Phone validation
    if (name === 'phone') {
      const phoneRegex = /^[\d\s()+-]{10,15}$/;
      if (!phoneRegex.test(value)) {
        return 'Please enter a valid phone number';
      }
    }
    
    // Time validation for same-day appointments
    if (name === 'time' && formData.dateTimeOption === 'select' && formData.date === today) {
      const [hours, minutes] = value.split(':').map(Number);
      
      // If time is in the past for today
      if (hours < currentHours || (hours === currentHours && minutes <= currentMinutes)) {
        return 'Please select a future time';
      }
    }
    
    // Date validation for manual date entry
    if (name === 'manualDateTime' && formData.dateTimeOption === 'manual') {
      // Simple check to prevent obvious past dates
      const pastDateIndicators = [
        'yesterday', 'last week', 'last month', 'ago', 
        'past', 'previous', 'earlier', 'before'
      ];
      
      const lowerCaseValue = value.toLowerCase();
      if (pastDateIndicators.some(indicator => lowerCaseValue.includes(indicator))) {
        return 'Please select a future date';
      }
    }

    return '';
  };

  // Function to generate a unique order number
  const generateOrderNumber = (): string => {
    const prefix = 'SUW';
    
    // Use serviceType and size to make it more unique (first characters)
    const serviceChar = formData.serviceType.charAt(0).toUpperCase() || 'X';
    const sizeChar = formData.size.charAt(0).toUpperCase() || 'X';
    
    // Generate 4 digits based on date + time + random element
    const randomDigit = Math.floor(Math.random() * 10);
    const timeDigits = (currentHours * 100 + currentMinutes).toString().padStart(4, '0');
    
    // Combine into order number
    return `${prefix}-${serviceChar}${sizeChar}${timeDigits.substring(0, 2)}${randomDigit}`;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    
    // Mark field as touched
    setTouchedFields(prev => ({
      ...prev,
      [name]: true
    }));
    
    // Validate on blur
    const value = e.target.value;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('additionalServices.')) {
      const serviceName = name.split('.')[1];
      setFormData(prevState => ({
        ...prevState,
        additionalServices: {
          ...prevState.additionalServices,
          [serviceName]: (e.target as HTMLInputElement).checked
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
      
      // Special handling for date/time combinations to ensure future dates
      if (name === 'date' || name === 'time') {
        // Revalidate time when date changes or vice versa (for same-day validation)
        if (name === 'date' && formData.time && value === today) {
          const timeError = validateField('time', formData.time);
          setErrors(prev => ({
            ...prev,
            time: timeError
          }));
        } else if (name === 'time' && formData.date === today) {
          const timeError = validateField('time', value);
          setErrors(prev => ({
            ...prev,
            time: timeError
          }));
        }
      }
      
      // If field is touched, validate it
      if (touchedFields[name]) {
        const error = validateField(name, value);
        setErrors(prev => ({
          ...prev,
          [name]: error
        }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    // Validate each required field
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === 'string') {
        const error = validateField(key, value);
        if (error) {
          newErrors[key] = error;
          isValid = false;
        }
      }
    });

    // Set all fields as touched
    const newTouchedFields: { [key: string]: boolean } = {};
    Object.keys(formData).forEach(key => {
      if (typeof formData[key as keyof typeof formData] === 'string') {
        newTouchedFields[key] = true;
      }
    });

    setTouchedFields(newTouchedFields);
    setErrors(newErrors);
    return isValid;
  };

  // Format date and time for better readability
  const formatDateTime = (): string => {
    if (formData.dateTimeOption === 'select') {
      if (formData.date && formData.time) {
        const date = new Date(formData.date);
        const formattedDate = date.toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        return `${formattedDate} at ${formData.time}`;
      }
      return 'Not specified';
    } else {
      return formData.manualDateTime || 'Not specified';
    }
  };

  // Format additional services for better readability
  const formatAdditionalServices = (): string => {
    const services = [];
    if (formData.additionalServices.windows) services.push('Window Cleaning');
    if (formData.additionalServices.carpet) services.push('Carpet Washing');
    if (formData.additionalServices.appliances) services.push('Appliance Cleaning');
    if (formData.additionalServices.disinfection) services.push('Disinfection Services');
    if (formData.additionalServices.other && formData.additionalServicesOther) {
      services.push(`Other: ${formData.additionalServicesOther}`);
    }
    
    return services.length > 0 ? services.join(', ') : 'None';
  };

  // Format service type for better readability
  const formatServiceType = (): string => {
    const serviceTypes: {[key: string]: string} = {
      'residential': 'Residential Cleaning',
      'commercial': 'Commercial Cleaning',
      'deep': 'Deep Cleaning & Maintenance',
      'move-in-out': 'Move-In/Move-Out Cleaning',
      'post-construction': 'Post-Construction Cleaning'
    };
    
    if (formData.serviceType === 'other') {
      return `Other: ${formData.serviceTypeOther}`;
    }
    
    return serviceTypes[formData.serviceType] || 'Not specified';
  };

  // Format size for better readability
  const formatSize = (): string => {
    const sizeTypes: {[key: string]: string} = {
      'studio': 'Studio/1 Bedroom',
      '2-3bedrooms': '2-3 Bedrooms',
      '4+bedrooms': '4+ Bedrooms',
      'small-office': 'Small Office (up to 1000 sq ft)',
      'medium-office': 'Medium Office (1000-3000 sq ft)',
      'large-office': 'Large Office (3000+ sq ft)'
    };
    
    if (formData.size === 'other') {
      return `Other: ${formData.sizeOther}`;
    }
    
    return sizeTypes[formData.size] || 'Not specified';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // Generate the order number
        const newOrderNumber = generateOrderNumber();
        setOrderNumber(newOrderNumber);
        
        // Prepare data for Web3Forms
        const formattedData = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: formatServiceType(),
          space_size: formatSize(),
          additional_services: formatAdditionalServices(),
          address: formData.address,
          city: formData.city,
          preferred_date_time: formatDateTime(),
          notes: formData.notes || 'No additional notes provided',
          order_number: newOrderNumber
        };
        
        // Create the payload - use text rather than HTML to ensure proper rendering
        const data = {
          access_key: "4a28a534-a9ff-421f-9c8c-e1d438028c72",
          subject: `Fresh Cleaning Luxe - Order #${newOrderNumber} - Quote Request from ${formData.name}`,
          from_name: 'Fresh Cleaning Luxe Website',
          to_email: "book@freshcleaningluxe.com",
          botcheck: '',
          // Send formatted data as individual fields rather than HTML template
          ...formattedData
        };
        
        // Send to Web3Forms API
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (result.success) {
          console.log('Form submitted successfully:', result);
          setShowModal(true);
        } else {
          console.error('Form submission failed:', result);
          alert('There was an error submitting the form. Please try again later.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting the form. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Scroll to the first error
      const firstErrorField = document.querySelector('.error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    
    // Reset form after submission
    setFormData({
      serviceType: '',
      serviceTypeOther: '',
      size: '',
      sizeOther: '',
      additionalServices: {
        windows: false,
        carpet: false,
        appliances: false,
        disinfection: false,
        other: false
      },
      additionalServicesOther: '',
      address: '',
      city: '',
      dateTimeOption: 'select',
      date: '',
      time: '',
      manualDateTime: '',
      name: '',
      phone: '',
      email: '',
      notes: ''
    });
    
    setTouchedFields({});
    setErrors({});
    
    // Navigate to home page
    navigate('/');
  };

  return (
    <div className="quote-form-container">
      <div className="quote-form-content">
        <div className="quote-form-header">
          <h2>Request Your Free Quote</h2>
          <p>Fill out the form below and we'll get back to you within 24 hours</p>
        </div>
        
        <form className="quote-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touchedFields.name ? 'error' : ''}
              required 
              placeholder="John Doe"
            />
            {errors.name && touchedFields.name && (
              <div className="error-message">
                <span className="error-icon">!</span> {errors.name}
              </div>
            )}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touchedFields.email ? 'error' : ''}
                required 
                placeholder="your@email.com"
              />
              {errors.email && touchedFields.email && (
                <div className="error-message">
                  <span className="error-icon">!</span> {errors.email}
                </div>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.phone && touchedFields.phone ? 'error' : ''}
                required 
                placeholder="(555) 123-4567"
              />
              {errors.phone && touchedFields.phone && (
                <div className="error-message">
                  <span className="error-icon">!</span> {errors.phone}
                </div>
              )}
            </div>
          </div>
          
          {/* Hidden honeypot field to prevent spam */}
          <div style={{ display: 'none' }}>
            <input type="checkbox" name="botcheck" />
          </div>
          
          <div className="form-group">
            <label htmlFor="serviceType">Type of Service Required *</label>
            <select 
              id="serviceType" 
              name="serviceType" 
              value={formData.serviceType} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.serviceType && touchedFields.serviceType ? 'error' : ''}
              required
            >
              <option value="">Select a service</option>
              <option value="residential">Residential Cleaning</option>
              <option value="commercial">Commercial Cleaning</option>
              <option value="deep">Deep Cleaning & Maintenance</option>
              <option value="move-in-out">Move-In/Move-Out Cleaning</option>
              <option value="post-construction">Post-Construction Cleaning</option>
              <option value="other">Other</option>
            </select>
            {errors.serviceType && touchedFields.serviceType && (
              <div className="error-message">
                <span className="error-icon">!</span> {errors.serviceType}
              </div>
            )}
            {formData.serviceType === 'other' && (
              <input
                type="text"
                name="serviceTypeOther"
                value={formData.serviceTypeOther}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.serviceTypeOther && touchedFields.serviceTypeOther ? 'error' : ''}
                placeholder="Please specify"
                required
              />
            )}
            {formData.serviceType === 'other' && errors.serviceTypeOther && touchedFields.serviceTypeOther && (
              <div className="error-message">
                <span className="error-icon">!</span> {errors.serviceTypeOther}
              </div>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="size">Size of the Space to be Cleaned *</label>
            <select 
              id="size" 
              name="size" 
              value={formData.size} 
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.size && touchedFields.size ? 'error' : ''}
              required
            >
              <option value="">Select size</option>
              <option value="studio">Studio/1 Bedroom</option>
              <option value="2-3bedrooms">2-3 Bedrooms</option>
              <option value="4+bedrooms">4+ Bedrooms</option>
              <option value="small-office">Small Office (up to 1000 sq ft)</option>
              <option value="medium-office">Medium Office (1000-3000 sq ft)</option>
              <option value="large-office">Large Office (3000+ sq ft)</option>
              <option value="other">Other</option>
            </select>
            {errors.size && touchedFields.size && (
              <div className="error-message">
                <span className="error-icon">!</span> {errors.size}
              </div>
            )}
            {formData.size === 'other' && (
              <input
                type="text"
                name="sizeOther"
                value={formData.sizeOther}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.sizeOther && touchedFields.sizeOther ? 'error' : ''}
                placeholder="Please specify"
                required
              />
            )}
            {formData.size === 'other' && errors.sizeOther && touchedFields.sizeOther && (
              <div className="error-message">
                <span className="error-icon">!</span> {errors.sizeOther}
              </div>
            )}
          </div>
          
          <div className="form-group">
            <label>Additional Services</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="windows"
                  name="additionalServices.windows"
                  checked={formData.additionalServices.windows}
                  onChange={handleChange}
                />
                <label htmlFor="windows">Window Cleaning</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="carpet"
                  name="additionalServices.carpet"
                  checked={formData.additionalServices.carpet}
                  onChange={handleChange}
                />
                <label htmlFor="carpet">Carpet Washing</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="appliances"
                  name="additionalServices.appliances"
                  checked={formData.additionalServices.appliances}
                  onChange={handleChange}
                />
                <label htmlFor="appliances">Appliance Cleaning (Refrigerator, Oven, etc.)</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="disinfection"
                  name="additionalServices.disinfection"
                  checked={formData.additionalServices.disinfection}
                  onChange={handleChange}
                />
                <label htmlFor="disinfection">Disinfection Services</label>
              </div>
              
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  id="other-service"
                  name="additionalServices.other"
                  checked={formData.additionalServices.other}
                  onChange={handleChange}
                />
                <label htmlFor="other-service">Other</label>
              </div>
              
              {formData.additionalServices.other && (
                <input
                  type="text"
                  name="additionalServicesOther"
                  value={formData.additionalServicesOther}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.additionalServicesOther && touchedFields.additionalServicesOther ? 'error' : ''}
                  placeholder="Please specify"
                  required
                />
              )}
              {formData.additionalServices.other && errors.additionalServicesOther && touchedFields.additionalServicesOther && (
                <div className="error-message">
                  <span className="error-icon">!</span> {errors.additionalServicesOther}
                </div>
              )}
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.address && touchedFields.address ? 'error' : ''}
                required 
                placeholder="123 Main St"
              />
              {errors.address && touchedFields.address && (
                <div className="error-message">
                  <span className="error-icon">!</span> {errors.address}
                </div>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city} 
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.city && touchedFields.city ? 'error' : ''}
                required 
                placeholder="City"
              />
              {errors.city && touchedFields.city && (
                <div className="error-message">
                  <span className="error-icon">!</span> {errors.city}
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label>Preferred Date and Time</label>
            <div className="date-time-selection">
              <div className="radio-group">
                <div className="radio-item">
                  <input
                    type="radio"
                    id="select-date-time"
                    name="dateTimeOption"
                    value="select"
                    checked={formData.dateTimeOption === 'select'}
                    onChange={handleChange}
                  />
                  <label htmlFor="select-date-time">Select from calendar</label>
                </div>
                
                <div className="radio-item">
                  <input
                    type="radio"
                    id="manual-date-time"
                    name="dateTimeOption"
                    value="manual"
                    checked={formData.dateTimeOption === 'manual'}
                    onChange={handleChange}
                  />
                  <label htmlFor="manual-date-time">Enter manually</label>
                </div>
              </div>
              
              {formData.dateTimeOption === 'select' ? (
                <div className="date-time-inputs">
                  <div className="form-group">
                    <label htmlFor="date">Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      name="date" 
                      value={formData.date} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.date && touchedFields.date ? 'error' : ''}
                      required={formData.dateTimeOption === 'select'} 
                      min={today}
                    />
                    {errors.date && touchedFields.date && (
                      <div className="error-message">
                        <span className="error-icon">!</span> {errors.date}
                      </div>
                    )}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="time">Time</label>
                    <input 
                      type="time" 
                      id="time" 
                      name="time" 
                      value={formData.time} 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.time && touchedFields.time ? 'error' : ''}
                      required={formData.dateTimeOption === 'select'} 
                    />
                    {errors.time && touchedFields.time && (
                      <div className="error-message">
                        <span className="error-icon">!</span> {errors.time}
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="form-group">
                  <label htmlFor="manualDateTime">Date and Time</label>
                  <input 
                    type="text" 
                    id="manualDateTime" 
                    name="manualDateTime" 
                    value={formData.manualDateTime} 
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.manualDateTime && touchedFields.manualDateTime ? 'error' : ''}
                    required={formData.dateTimeOption === 'manual'} 
                    placeholder="e.g., July 10, 2:30 PM"
                  />
                  {errors.manualDateTime && touchedFields.manualDateTime && (
                    <div className="error-message">
                      <span className="error-icon">!</span> {errors.manualDateTime}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="notes">Additional Notes</label>
            <textarea 
              id="notes" 
              name="notes" 
              value={formData.notes} 
              onChange={handleChange}
              placeholder="Any specific requirements or questions?"
              rows={4}
            />
          </div>
          
          <div className="form-footer">
            <p className="form-notice">
              We operate 24/7 to accommodate your schedule
            </p>
            <button 
              type="submit" 
              className="btn-primary enhanced"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span>SENDING...</span>
              ) : (
                <>
                  <span className="desktop-text">REQUEST FREE QUOTE</span>
                  <span className="mobile-text">GET QUOTE</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      
      <div className="quote-form-image">
        <div className="image-container">
          <img src={mrsD2} alt="Professional cleaning service" />
        </div>
        <div className="quote-benefits">
          <h3>Why Choose Our Service?</h3>
          <ul>
            <li>✓ Free, no-obligation quotes</li>
            <li>✓ Experienced and insured professionals</li>
            <li>✓ Flexible scheduling - 24 hours available</li>
            <li>✓ Eco-friendly cleaning options</li>
          </ul>
        </div>
      </div>
      
      {/* Success Modal */}
      <SuccessModal 
        isOpen={showModal} 
        onClose={closeModal}
        orderNumber={orderNumber}
      />
    </div>
  );
};

export default QuoteForm; 