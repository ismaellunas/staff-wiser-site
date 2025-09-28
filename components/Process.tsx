import { motion } from 'framer-motion'
import { FaHandshake, FaSearch, FaRocket } from 'react-icons/fa'

const Process = () => {
  const steps = [
    {
      icon: <FaHandshake className="w-12 h-12" />,
      title: "Consultation",
      description: "We begin with a comprehensive consultation to understand your business needs, goals, and specific requirements for your virtual team member.",
      details: [
        "Business needs assessment",
        "Role requirements definition",
        "Timeline and budget planning",
        "Success metrics establishment"
      ]
    },
    {
      icon: <FaSearch className="w-12 h-12" />,
      title: "Matching",
      description: "Our expert team carefully screens and matches you with the perfect virtual professional who aligns with your culture and requirements.",
      details: [
        "Talent screening and vetting",
        "Skills and experience matching",
        "Cultural fit assessment",
        "Reference verification"
      ]
    },
    {
      icon: <FaRocket className="w-12 h-12" />,
      title: "Onboarding",
      description: "We facilitate seamless integration and provide ongoing support to ensure your new team member becomes a valuable asset from day one.",
      details: [
        "Smooth integration process",
        "Training and orientation",
        "Ongoing performance monitoring",
        "Continuous support and optimization"
      ]
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
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
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined approach that ensures you find the perfect virtual team member 
            who will drive your business forward from day one.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center mb-6">
                  <div className="text-primary mr-4">
                    {step.icon}
                  </div>
                  <div className="text-3xl font-etna font-bold text-secondary">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                
                <h3 className="text-3xl font-etna font-semibold text-secondary mb-4">
                  {step.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                <ul className="space-y-3">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="w-80 h-80 bg-gradient-to-br from-primary to-pink-300 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-white text-6xl">
                    {step.icon}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-etna font-semibold text-secondary mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how we can help you find the perfect virtual team member for your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-4"
            >
              Schedule Your Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process
