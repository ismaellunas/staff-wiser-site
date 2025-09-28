import { motion } from 'framer-motion'
import { FaInstagram, FaDesktop, FaPalette, FaShoppingCart, FaCode, FaCogs } from 'react-icons/fa'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: <FaInstagram className="w-8 h-8" />,
      title: "Social Media Manager",
      description: "Strategic social media management and content creation to boost your brand's online presence and engagement.",
      benefits: ["Content Strategy", "Community Management", "Analytics & Reporting", "Brand Growth"]
    },
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: "Virtual Assistance",
      description: "Comprehensive administrative support and business operations management to streamline your workflow.",
      benefits: ["Administrative Tasks", "Email Management", "Calendar Scheduling", "Project Coordination"]
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "Graphics Design",
      description: "Professional visual branding and marketing materials that capture your brand's essence and drive results.",
      benefits: ["Brand Identity", "Marketing Materials", "Digital Assets", "Print Design"]
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Website Development",
      description: "Custom web solutions and digital presence that showcase your business and convert visitors into customers.",
      benefits: ["Custom Websites", "Responsive Design", "SEO Optimization", "Performance"]
    },
    {
      icon: <FaShoppingCart className="w-8 h-8" />,
      title: "Shopify Theme Development",
      description: "E-commerce platform customization and optimization to maximize your online store's potential.",
      benefits: ["Theme Customization", "E-commerce Features", "Mobile Optimization", "Conversion"]
    },
    {
      icon: <FaCogs className="w-8 h-8" />,
      title: "Custom Services",
      description: "Tailored solutions for unique business requirements, designed specifically for your industry needs.",
      benefits: ["Bespoke Solutions", "Industry Expertise", "Scalable Systems", "Ongoing Support"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-etna font-bold text-secondary mb-6">
            Our Expert Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive virtual staffing solutions designed to elevate your business operations 
            and drive sustainable growth across all digital channels.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 card-hover"
            >
              {/* Icon */}
              <div className="text-primary mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-etna font-semibold text-secondary mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-8">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:bg-opacity-90"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Ready to find your perfect virtual team member?
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-4"
            >
              Get Started Today
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
