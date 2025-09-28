import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Careers from '../components/Careers'
import Contact from '../components/Contact'
import { motion } from 'framer-motion'
import { FaInstagram, FaCode, FaPalette, FaMapMarkerAlt, FaClock, FaBriefcase, FaUsers, FaRocket } from 'react-icons/fa'

export default function CareersPage() {
  const benefits = [
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Collaborative Environment",
      description: "Work with talented professionals from around the world in a supportive, inclusive environment."
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "Advance your career with continuous learning opportunities and professional development programs."
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Enjoy work-life balance with flexible hours and the freedom to work from anywhere."
    },
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "Diverse Projects",
      description: "Work on exciting projects across various industries and help businesses achieve their goals."
    }
  ]

  const applicationProcess = [
    {
      step: "01",
      title: "Submit Application",
      description: "Fill out our application form and upload your resume and portfolio."
    },
    {
      step: "02",
      title: "Initial Screening",
      description: "Our team reviews your application and conducts an initial skills assessment."
    },
    {
      step: "03",
      title: "Interview Process",
      description: "Participate in video interviews to discuss your experience and fit."
    },
    {
      step: "04",
      title: "Final Decision",
      description: "Receive feedback and join our team of exceptional virtual professionals."
    }
  ]

  return (
    <>
      <Head>
        <title>Careers - Staff Wiser | Join Our Virtual Team</title>
        <meta name="description" content="Join Staff Wiser's team of exceptional virtual professionals. Explore career opportunities in social media management, web development, graphic design, and more." />
        <meta name="keywords" content="careers staff wiser, virtual jobs, remote work opportunities, social media manager jobs, web developer jobs, graphic designer jobs" />
        <meta property="og:title" content="Careers - Staff Wiser" />
        <meta property="og:description" content="Join our team of exceptional virtual professionals and help businesses achieve their goals." />
        <link rel="canonical" href="https://staffwiser.com/careers" />
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
                  Join Our Team
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Be part of a dynamic team that's transforming how businesses connect with 
                  exceptional virtual talent. Explore exciting career opportunities with Staff Wiser.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Why Work With Us */}
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
                  Why Work With Us?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Join a company that values your expertise, supports your growth, 
                  and provides opportunities to work with amazing clients worldwide.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-primary mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-etna font-semibold text-secondary mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Job Listings */}
          <Careers />

          {/* Application Process */}
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
                  Application Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our streamlined application process is designed to identify the best talent 
                  and ensure a smooth onboarding experience.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {applicationProcess.map((process, index) => (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-etna font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-etna font-semibold text-secondary mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {process.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Company Culture */}
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
                    Our Culture
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      At Staff Wiser, we believe that great work happens when talented people 
                      come together in an environment that values collaboration, innovation, 
                      and personal growth.
                    </p>
                    <p>
                      Our remote-first culture promotes work-life balance, continuous learning, 
                      and the freedom to work from anywhere in the world. We celebrate diversity, 
                      encourage creativity, and support each team member's professional development.
                    </p>
                    <p>
                      Join us and be part of a company that's not just changing how businesses 
                      operate, but also how virtual professionals work and grow in their careers.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-primary to-pink-300 rounded-3xl p-8 text-white"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-etna font-semibold mb-6">
                      Ready to Join Us?
                    </h3>
                    <p className="mb-6 opacity-90">
                      Start your journey with Staff Wiser and help us continue 
                      transforming businesses through exceptional virtual talent.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
                    >
                      View Open Positions
                    </motion.button>
                  </div>
                </motion.div>
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
