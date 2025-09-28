import React from 'react';

const services = [
  {
    title: 'Social Media Manager',
    description: 'Expert social media management to grow your brand presence and engage your audience across all platforms.',
    icon: '📱'
  },
  {
    title: 'Virtual Assistance',
    description: 'Professional virtual assistants to handle administrative tasks and support your business operations.',
    icon: '💼'
  },
  {
    title: 'Graphics Design',
    description: 'Creative graphic design services for branding, marketing materials, and visual communications.',
    icon: '🎨'
  },
  {
    title: 'Website Development',
    description: 'Custom website development solutions to establish your professional online presence.',
    icon: '💻'
  },
  {
    title: 'Shopify Development',
    description: 'Specialized Shopify store development and optimization for e-commerce success.',
    icon: '🛒'
  },
  {
    title: 'Custom Services',
    description: 'Tailored staffing solutions to meet your unique business requirements and objectives.',
    icon: '⭐'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E69395] to-[#d17d7f] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-serif">
            Staff Wiser
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto opacity-95">
            Professional Staffing Solutions for Your Business Success
          </p>
          <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto opacity-90">
            We connect you with skilled professionals to elevate your business through expert social media management, virtual assistance, design, and development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="bg-white text-[#E69395] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#E69395] transition-colors inline-block"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3B3B3B] mb-4 font-serif">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive staffing solutions tailored to meet your business needs and drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-[#3B3B3B] mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3B3B3B] mb-6 font-serif">
                Why Choose Staff Wiser?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At Staff Wiser, we understand that finding the right talent is crucial for your business success. 
                Our comprehensive staffing solutions connect you with skilled professionals who align with your 
                company culture and objectives.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#E69395] text-white rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3B3B3B] mb-1">Expert Professionals</h4>
                    <p className="text-gray-600">Carefully vetted specialists in their respective fields</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#E69395] text-white rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3B3B3B] mb-1">Flexible Solutions</h4>
                    <p className="text-gray-600">Customized staffing approaches to match your unique needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#E69395] text-white rounded-full p-2 mr-4 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#3B3B3B] mb-1">Proven Results</h4>
                    <p className="text-gray-600">Track record of helping businesses achieve their goals</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#E69395] to-[#d17d7f] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4 font-serif">Ready to Get Started?</h3>
              <p className="mb-6 opacity-95">
                Let us help you find the perfect professionals to drive your business forward. 
                Contact us today for a consultation.
              </p>
              <a 
                href="#contact" 
                className="bg-white text-[#E69395] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#3B3B3B] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-serif">
            Get In Touch
          </h2>
          <p className="text-lg mb-12 opacity-90 max-w-2xl mx-auto">
            Ready to transform your business with the right talent? 
            Contact Staff Wiser today and let&apos;s discuss how we can help you succeed.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-[#E69395] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Email Us</h4>
              <p className="opacity-80">hello@staffwiser.com</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#E69395] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Call Us</h4>
              <p className="opacity-80">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#E69395] rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Visit Us</h4>
              <p className="opacity-80">123 Business Ave<br />Suite 100</p>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E69395]" 
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E69395]" 
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                <input 
                  type="text" 
                  id="company" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E69395]" 
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-[#E69395]"
                >
                  <option value="">Select a Service</option>
                  <option value="social-media">Social Media Manager</option>
                  <option value="virtual-assistant">Virtual Assistance</option>
                  <option value="graphics-design">Graphics Design</option>
                  <option value="website-dev">Website Development</option>
                  <option value="shopify-dev">Shopify Development</option>
                  <option value="custom">Custom Services</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#E69395]" 
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  className="bg-[#E69395] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#d17d7f] transition-colors w-full md:w-auto"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2a2a2a] text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 font-serif">Staff Wiser</h3>
          <p className="text-gray-400 mb-4">Professional Staffing Solutions</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#services" className="text-gray-400 hover:text-[#E69395] transition-colors">Services</a>
            <a href="#about" className="text-gray-400 hover:text-[#E69395] transition-colors">About</a>
            <a href="#contact" className="text-gray-400 hover:text-[#E69395] transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 Staff Wiser. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
