import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import { FaInstagram, FaDesktop, FaPalette, FaCode, FaShoppingCart, FaCogs } from 'react-icons/fa'

export default function ServicesPage() {
  const detailedServices = [
    {
      icon: <FaInstagram className="w-12 h-12" />,
      title: "Social Media Manager",
      description: "Transform your brand's online presence with strategic social media management and content creation.",
      features: [
        "Content Strategy Development",
        "Community Management",
        "Social Media Analytics & Reporting",
        "Brand Voice & Messaging",
        "Campaign Management",
        "Influencer Partnerships",
        "Crisis Management",
        "Platform Optimization"
      ],
      benefits: [
        "Increased brand awareness and engagement",
        "Professional content that resonates with your audience",
        "Data-driven insights for better decision making",
        "Consistent brand presence across all platforms",
        "Time savings for your internal team",
        "Expert knowledge of platform algorithms and best practices"
      ],
      pricing: "Starting at $2,500/month",
      timeline: "2-3 weeks to find the perfect match"
    },
    {
      icon: <FaDesktop className="w-12 h-12" />,
      title: "Virtual Assistance",
      description: "Streamline your operations with comprehensive administrative support and business management.",
      features: [
        "Email & Calendar Management",
        "Administrative Tasks",
        "Project Coordination",
        "Customer Service",
        "Data Entry & Organization",
        "Travel Planning",
        "Research & Analysis",
        "Document Preparation"
      ],
      benefits: [
        "Increased productivity and efficiency",
        "More time to focus on core business activities",
        "Professional communication with clients and partners",
        "Organized systems and processes",
        "Scalable support as your business grows",
        "Cost-effective alternative to hiring full-time staff"
      ],
      pricing: "Starting at $1,800/month",
      timeline: "1-2 weeks to find the perfect match"
    },
    {
      icon: <FaPalette className="w-12 h-12" />,
      title: "Graphics Design",
      description: "Elevate your brand with professional visual identity and marketing materials.",
      features: [
        "Brand Identity Design",
        "Marketing Collateral",
        "Digital Assets",
        "Print Design",
        "Social Media Graphics",
        "Web Design Elements",
        "Presentation Design",
        "Packaging Design"
      ],
      benefits: [
        "Professional brand identity that stands out",
        "Consistent visual communication across all touchpoints",
        "High-quality designs that convert",
        "Access to latest design trends and tools",
        "Faster turnaround times",
        "Scalable design solutions"
      ],
      pricing: "Starting at $2,200/month",
      timeline: "2-3 weeks to find the perfect match"
    },
    {
      icon: <FaCode className="w-12 h-12" />,
      title: "Website Development",
      description: "Build powerful web solutions that showcase your business and drive conversions.",
      features: [
        "Custom Website Development",
        "Responsive Design",
        "SEO Optimization",
        "Performance Optimization",
        "Content Management Systems",
        "E-commerce Integration",
        "Third-party Integrations",
        "Maintenance & Updates"
      ],
      benefits: [
        "Professional web presence that converts visitors",
        "Mobile-optimized for all devices",
        "Fast loading times and excellent user experience",
        "SEO-friendly structure for better search rankings",
        "Scalable solutions that grow with your business",
        "Ongoing support and maintenance"
      ],
      pricing: "Starting at $3,500/month",
      timeline: "3-4 weeks to find the perfect match"
    },
    {
      icon: <FaShoppingCart className="w-12 h-12" />,
      title: "Shopify Theme Development",
      description: "Maximize your e-commerce potential with custom Shopify solutions.",
      features: [
        "Custom Theme Development",
        "Theme Customization",
        "App Integrations",
        "Mobile Optimization",
        "Conversion Optimization",
        "Performance Tuning",
        "SEO Implementation",
        "Analytics Setup"
      ],
      benefits: [
        "Higher conversion rates and sales",
        "Unique store design that reflects your brand",
        "Mobile-optimized shopping experience",
        "Faster page load times",
        "Better search engine visibility",
        "Scalable e-commerce solutions"
      ],
      pricing: "Starting at $2,800/month",
      timeline: "2-3 weeks to find the perfect match"
    },
    {
      icon: <FaCogs className="w-12 h-12" />,
      title: "Custom Services",
      description: "Tailored solutions designed specifically for your unique business requirements.",
      features: [
        "Bespoke Solutions",
        "Industry-Specific Expertise",
        "Scalable Systems",
        "Integration Services",
        "Process Automation",
        "Data Management",
        "Technical Support",
        "Ongoing Optimization"
      ],
      benefits: [
        "Solutions designed specifically for your business",
        "Expert knowledge of your industry",
        "Flexible and adaptable services",
        "Long-term partnership approach",
        "Continuous improvement and optimization",
        "Dedicated support and attention"
      ],
      pricing: "Custom pricing based on requirements",
      timeline: "2-4 weeks to find the perfect match"
    }
  ]

  return (
    <>
      <Head>
        <title>Our Services - Staff Wiser | Virtual Staffing Solutions</title>
        <meta name="description" content="Comprehensive virtual staffing services including social media management, web development, graphic design, virtual assistance, and custom solutions." />
        <meta name="keywords" content="virtual staffing services, social media management, web development, graphic design, virtual assistance, custom solutions" />
        <meta property="og:title" content="Our Services - Staff Wiser" />
        <meta property="og:description" content="Comprehensive virtual staffing services to transform your business operations." />
        <link rel="canonical" href="https://staffwiser.com/services" />
      </Head>

      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-20 pb-16 bg-gradient-to-br from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-etna font-bold text-secondary mb-6">
                  Our Expert Services
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Comprehensive virtual staffing solutions designed to elevate your business operations 
                  and drive sustainable growth across all digital channels.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Detailed Services */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="space-y-20">
                {detailedServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="text-primary mb-6">
                        {service.icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-etna font-bold text-secondary mb-6">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                          <h3 className="text-lg font-etna font-semibold text-secondary mb-4">
                            What We Provide
                          </h3>
                          <ul className="space-y-2">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center text-gray-600">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-lg font-etna font-semibold text-secondary mb-4">
                            Key Benefits
                          </h3>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-center text-gray-600">
                                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <div className="bg-primary text-white px-6 py-3 rounded-lg font-semibold">
                          {service.pricing}
                        </div>
                        <div className="text-gray-600">
                          {service.timeline}
                        </div>
                      </div>
                    </div>

                    {/* Visual */}
                    <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                      <div className="bg-gradient-to-br from-primary to-pink-300 rounded-3xl p-12 text-white text-center">
                        <div className="text-6xl mb-6">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-etna font-semibold mb-4">
                          {service.title}
                        </h3>
                        <p className="opacity-90">
                          Professional solutions tailored to your business needs
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-etna font-bold text-secondary mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                  Let's discuss how our expert virtual professionals can help you achieve your business goals.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary text-lg px-10 py-4"
                >
                  Schedule Your Consultation
                </motion.button>
              </motion.div>
            </div>
          </section>

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
