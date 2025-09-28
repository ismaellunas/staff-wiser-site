import { motion } from 'framer-motion'
import { FaInstagram, FaCode, FaPalette, FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa'
import { useState } from 'react'

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(0)

  const jobs = [
    {
      title: "Senior Social Media Manager",
      location: "Remote",
      type: "Full-time Virtual Position",
      experience: "3+ years in social media management",
      icon: <FaInstagram className="w-8 h-8" />,
      responsibilities: [
        "Develop and execute social media strategies for multiple clients",
        "Create engaging content across various platforms",
        "Analyze performance metrics and optimize campaigns",
        "Collaborate with design and content teams",
        "Manage client relationships and expectations",
        "Stay updated with social media trends and best practices"
      ],
      requirements: [
        "Proven track record in social media management",
        "Experience with major social platforms and analytics tools",
        "Excellent communication and project management skills",
        "Portfolio of successful campaigns",
        "Creative thinking and content creation abilities",
        "Understanding of brand voice and messaging"
      ],
      benefits: [
        "Competitive salary and performance bonuses",
        "Flexible working hours",
        "Professional development opportunities",
        "Work with diverse clients across industries",
        "Remote work environment",
        "Growth opportunities within the company"
      ]
    },
    {
      title: "Full-Stack Web Developer",
      location: "Remote",
      type: "Full-time Virtual Position",
      experience: "4+ years in web development",
      icon: <FaCode className="w-8 h-8" />,
      responsibilities: [
        "Build custom websites and web applications for clients",
        "Develop and maintain Shopify themes and customizations",
        "Collaborate with design teams to implement user interfaces",
        "Optimize websites for performance and SEO",
        "Troubleshoot and debug web applications",
        "Stay current with web development technologies"
      ],
      requirements: [
        "Proficiency in HTML, CSS, JavaScript, React, Next.js",
        "Experience with Shopify development and APIs",
        "Understanding of responsive design principles",
        "Strong problem-solving and debugging skills",
        "Experience with version control (Git)",
        "Knowledge of web performance optimization"
      ],
      benefits: [
        "Competitive salary and project bonuses",
        "Latest development tools and software",
        "Opportunity to work on diverse projects",
        "Remote work flexibility",
        "Technical skill development support",
        "Collaborative team environment"
      ]
    },
    {
      title: "Creative Graphic Designer",
      location: "Remote",
      type: "Full-time Virtual Position",
      experience: "2+ years in graphic design",
      icon: <FaPalette className="w-8 h-8" />,
      responsibilities: [
        "Create visual branding materials for diverse clients",
        "Design marketing collateral, digital assets, and print materials",
        "Collaborate with marketing teams on campaign visuals",
        "Maintain brand consistency across all design projects",
        "Present design concepts and iterate based on feedback",
        "Manage multiple design projects simultaneously"
      ],
      requirements: [
        "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign)",
        "Strong portfolio demonstrating diverse design skills",
        "Understanding of brand identity and visual storytelling",
        "Excellent attention to detail and deadline management",
        "Experience with both print and digital design",
        "Strong communication and presentation skills"
      ],
      benefits: [
        "Competitive salary and creative project bonuses",
        "Access to premium design tools and resources",
        "Creative freedom and diverse project portfolio",
        "Remote work environment",
        "Professional development and skill enhancement",
        "Collaboration with talented creative teams"
      ]
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
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a dynamic team that's transforming how businesses connect with 
            exceptional virtual talent. Explore exciting career opportunities with Staff Wiser.
          </p>
        </motion.div>

        {/* Job Navigation */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          {jobs.map((job, index) => (
            <motion.button
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedJob(index)}
              className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                selectedJob === index
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-secondary hover:bg-gray-200'
              }`}
            >
              <div className={selectedJob === index ? 'text-white' : 'text-primary'}>
                {job.icon}
              </div>
              <div className="text-left">
                <div className="font-semibold">{job.title}</div>
                <div className="text-sm opacity-75">{job.location}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Job Details */}
        <motion.div
          key={selectedJob}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-primary mb-4">
                  {jobs[selectedJob].icon}
                </div>
                <h3 className="text-2xl font-etna font-semibold text-secondary mb-4">
                  {jobs[selectedJob].title}
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{jobs[selectedJob].location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBriefcase className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{jobs[selectedJob].type}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">{jobs[selectedJob].experience}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full btn-primary"
                >
                  Apply Now
                </motion.button>
              </div>
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Responsibilities */}
              <div>
                <h4 className="text-xl font-etna font-semibold text-secondary mb-4">
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {jobs[selectedJob].responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-xl font-etna font-semibold text-secondary mb-4">
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {jobs[selectedJob].requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-etna font-semibold text-secondary mb-4">
                  What We Offer
                </h4>
                <ul className="space-y-2">
                  {jobs[selectedJob].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-600">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Application Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg"
        >
          <h3 className="text-3xl font-etna font-semibold text-secondary mb-6">
            Ready to Apply?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our team of exceptional virtual professionals and help us continue 
            transforming businesses through outstanding talent and service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-10 py-4"
            >
              Submit Application
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary text-lg px-10 py-4"
            >
              Learn More About Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Careers
