import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaHandshake, FaRocket } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Excellence",
      description: "We maintain the highest standards in talent selection and service delivery, ensuring every client receives exceptional results."
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Partnership",
      description: "We believe in building long-term relationships with our clients, becoming an extension of their team rather than just a service provider."
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Trust",
      description: "Transparency, reliability, and integrity form the foundation of every interaction and decision we make."
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Innovation",
      description: "We continuously evolve our processes and embrace new technologies to deliver cutting-edge solutions for our clients."
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
            About Staff Wiser
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2018, we've been connecting businesses with exceptional virtual talent, 
            helping them scale efficiently and achieve their goals.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-etna font-semibold text-secondary mb-6">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded in 2018, Staff Wiser emerged from a simple yet powerful vision: 
                to bridge the gap between businesses seeking exceptional talent and skilled 
                professionals looking for meaningful remote opportunities.
              </p>
              <p>
                Over the past 7+ years, we've refined our approach to virtual staffing, 
                developing a proven methodology that ensures perfect matches between 
                businesses and virtual professionals. Our success is measured not just 
                in placements, but in the lasting partnerships we create.
              </p>
              <p>
                Today, we're proud to have helped over 500 businesses scale their operations 
                with top-tier virtual talent, from startups to established enterprises across 
                various industries.
              </p>
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-pink-300 rounded-3xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl font-etna font-bold mb-4">7+</div>
                <div className="text-xl mb-6">Years of Excellence</div>
                <div className="text-sm opacity-90">
                  Connecting businesses with exceptional virtual talent since 2018
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
              <FaAward className="w-12 h-12 text-primary" />
            </div>
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 text-center mb-16 shadow-lg"
        >
          <h3 className="text-3xl font-etna font-semibold text-secondary mb-6">
            Our Mission
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            To empower businesses with exceptional virtual talent that drives growth, 
            innovation, and success. We believe that the right people, working remotely 
            with passion and expertise, can transform any business regardless of size or industry.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-etna font-semibold text-secondary text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h4 className="text-xl font-etna font-semibold text-secondary mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-etna font-semibold text-secondary text-center mb-12">
            Why Choose Staff Wiser?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-etna font-bold text-primary mb-4">500+</div>
              <div className="text-lg font-semibold text-secondary mb-2">Successful Placements</div>
              <div className="text-gray-600">Proven track record of matching businesses with exceptional talent</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-etna font-bold text-primary mb-4">98%</div>
              <div className="text-lg font-semibold text-secondary mb-2">Client Satisfaction</div>
              <div className="text-gray-600">Consistently high satisfaction rates from our clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-etna font-bold text-primary mb-4">24/7</div>
              <div className="text-lg font-semibold text-secondary mb-2">Ongoing Support</div>
              <div className="text-gray-600">Round-the-clock support for all our placements</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
