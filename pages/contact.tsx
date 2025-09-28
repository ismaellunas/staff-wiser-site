import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheck, FaCalendarAlt, FaHeadset } from 'react-icons/fa'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <FaPhone className="w-8 h-8" />,
      title: "Phone Consultation",
      description: "Speak directly with our team to discuss your needs",
      details: "+1 (555) 123-4567",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: <FaEnvelope className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us a detailed message about your requirements",
      details: "hello@staffwiser.com",
      availability: "Response within 24 hours"
    },
    {
      icon: <FaCalendarAlt className="w-8 h-8" />,
      title: "Schedule Meeting",
      description: "Book a free consultation to discuss your project",
      details: "30-minute discovery call",
      availability: "Available slots daily"
    },
    {
      icon: <FaHeadset className="w-8 h-8" />,
      title: "Live Chat",
      description: "Get instant answers to your questions",
      details: "Available on website",
      availability: "Mon-Fri 9AM-6PM EST"
    }
  ]

  const faqs = [
    {
      question: "How quickly can you find a virtual professional for my business?",
      answer: "Our typical timeline is 1-3 weeks depending on the role complexity. We prioritize quality over speed to ensure the perfect match for your needs."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve businesses across various industries including e-commerce, technology, healthcare, finance, marketing agencies, and more. Our virtual professionals have diverse backgrounds."
    },
    {
      question: "Do you provide ongoing support after placement?",
      answer: "Yes, we offer 24/7 support and regular check-ins to ensure smooth integration and ongoing success. We're committed to long-term partnerships."
    },
    {
      question: "What's included in your service packages?",
      answer: "Our packages include talent sourcing, vetting, placement, onboarding support, and ongoing management. Pricing varies based on role complexity and requirements."
    },
    {
      question: "Can I interview candidates before making a decision?",
      answer: "Absolutely! We facilitate interviews between you and pre-screened candidates to ensure cultural fit and alignment with your expectations."
    },
    {
      question: "What if I'm not satisfied with the placement?",
      answer: "We offer a satisfaction guarantee. If you're not happy with your virtual professional, we'll work to find a replacement at no additional cost."
    }
  ]

  return (
    <>
      <Head>
        <title>Contact Us - Staff Wiser | Get Your Virtual Team Started</title>
        <meta name="description" content="Contact Staff Wiser to discuss your virtual staffing needs. Schedule a free consultation and discover how we can help transform your business operations." />
        <meta name="keywords" content="contact staff wiser, virtual staffing consultation, get started, schedule meeting, virtual team" />
        <meta property="og:title" content="Contact Us - Staff Wiser" />
        <meta property="og:description" content="Get in touch to discuss your virtual staffing needs and schedule a free consultation." />
        <link rel="canonical" href="https://staffwiser.com/contact" />
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
                  Get In Touch
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Ready to find your perfect virtual team member? Let's discuss how we can 
                  help transform your business operations with exceptional talent.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-etna font-bold text-secondary mb-6">
                  How Would You Like to Connect?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Choose the communication method that works best for you. 
                  We're here to help you find the perfect virtual team member.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-primary mb-4 flex justify-center">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-etna font-semibold text-secondary mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <div className="text-sm text-gray-500 mb-2 font-medium">
                      {method.details}
                    </div>
                    <div className="text-xs text-gray-400">
                      {method.availability}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <Contact />

          {/* FAQ Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-etna font-bold text-secondary mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get answers to common questions about our virtual staffing services 
                  and how we can help your business.
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto space-y-6">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <h3 className="text-lg font-etna font-semibold text-secondary mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-primary to-pink-300 rounded-3xl p-12 text-white">
                  <h2 className="text-3xl md:text-4xl font-etna font-bold mb-6">
                    Ready to Get Started?
                  </h2>
                  <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                    Join hundreds of businesses that have transformed their operations 
                    with our exceptional virtual talent. Schedule your free consultation today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                    >
                      Schedule Free Consultation
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
                    >
                      Call Us Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
