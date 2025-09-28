import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import { FaAward, FaUsers, FaHandshake, FaRocket, FaChartLine, FaGlobe } from 'react-icons/fa'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      image: "/api/placeholder/200/200",
      bio: "With over 10 years in staffing and HR, Sarah founded Staff Wiser to bridge the gap between businesses and exceptional virtual talent.",
      expertise: ["Strategic Planning", "Team Building", "Business Development"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Operations",
      image: "/api/placeholder/200/200",
      bio: "Michael oversees our day-to-day operations, ensuring seamless client experiences and maintaining our high standards of service.",
      expertise: ["Process Optimization", "Quality Assurance", "Client Relations"]
    },
    {
      name: "Emily Chen",
      role: "Talent Acquisition Director",
      image: "/api/placeholder/200/200",
      bio: "Emily leads our talent acquisition efforts, identifying and vetting top-tier virtual professionals across various industries.",
      expertise: ["Talent Sourcing", "Skills Assessment", "Cultural Fit"]
    }
  ]

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "Staff Wiser was established with a vision to revolutionize virtual staffing"
    },
    {
      year: "2019",
      title: "First 100 Placements",
      description: "Reached our first major milestone of successful client placements"
    },
    {
      year: "2020",
      title: "Remote Work Revolution",
      description: "Adapted and thrived during the global shift to remote work"
    },
    {
      year: "2021",
      title: "500+ Clients Served",
      description: "Expanded our client base across multiple industries and regions"
    },
    {
      year: "2022",
      title: "Award Recognition",
      description: "Received industry recognition for excellence in virtual staffing"
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Extended our services to serve clients worldwide"
    }
  ]

  return (
    <>
      <Head>
        <title>About Us - Staff Wiser | Your Trusted Virtual Staffing Partner</title>
        <meta name="description" content="Learn about Staff Wiser's journey since 2018, our mission, values, and the team behind our success in virtual staffing solutions." />
        <meta name="keywords" content="about staff wiser, virtual staffing company, remote work experts, staffing agency history" />
        <meta property="og:title" content="About Us - Staff Wiser" />
        <meta property="og:description" content="Learn about our journey and mission in virtual staffing since 2018." />
        <link rel="canonical" href="https://staffwiser.com/about" />
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
                  About Staff Wiser
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Since 2018, we've been connecting businesses with exceptional virtual talent, 
                  helping them scale efficiently and achieve their goals.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl md:text-4xl font-etna font-bold text-secondary mb-6">
                    Our Story
                  </h2>
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
            </div>
          </section>

          {/* Mission & Values */}
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
                  Our Mission & Values
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We're driven by a commitment to excellence, partnership, and innovation 
                  in everything we do.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
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
                ].map((value, index) => (
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
                    <h3 className="text-xl font-etna font-semibold text-secondary mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Team */}
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
                  Meet Our Team
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The passionate professionals behind Staff Wiser's success, 
                  dedicated to connecting businesses with exceptional virtual talent.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-48 h-48 bg-gradient-to-br from-primary to-pink-300 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-etna font-semibold text-secondary mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="space-y-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <div key={skillIndex} className="text-sm text-gray-500">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
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
                  Our Journey
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Key milestones in our mission to revolutionize virtual staffing 
                  and connect businesses with exceptional talent.
                </p>
              </motion.div>

              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary"></div>
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-8 ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <div className="text-2xl font-etna font-bold text-primary mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-xl font-etna font-semibold text-secondary mb-2">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                      <div className="flex-1"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
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
                  Our Impact
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Numbers that reflect our commitment to excellence and client success.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: <FaUsers className="w-8 h-8" />, number: "500+", label: "Happy Clients" },
                  { icon: <FaChartLine className="w-8 h-8" />, number: "98%", label: "Satisfaction Rate" },
                  { icon: <FaAward className="w-8 h-8" />, number: "7+", label: "Years Experience" },
                  { icon: <FaGlobe className="w-8 h-8" />, number: "24/7", label: "Support Available" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-primary mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-etna font-bold text-secondary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
