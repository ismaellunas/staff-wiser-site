import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "CEO",
      image: "/api/placeholder/80/80",
      content: "Staff Wiser transformed our business operations. The social media manager they provided increased our engagement by 300% and helped us reach 50K followers in just 6 months. Their professionalism and expertise are unmatched.",
      rating: 5,
      results: "300% engagement increase"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "Founder",
      image: "/api/placeholder/80/80",
      content: "Working with Staff Wiser has been a game-changer. Their Shopify developer created a custom theme that boosted our conversion rate by 40%. The ongoing support and attention to detail exceeded all our expectations.",
      rating: 5,
      results: "40% conversion increase"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency Co.",
      role: "Creative Director",
      image: "/api/placeholder/80/80",
      content: "The graphic designer from Staff Wiser elevated our brand identity to new heights. Their creative vision and technical expertise helped us win 3 major client accounts. We couldn't be happier with the results.",
      rating: 5,
      results: "3 major client wins"
    },
    {
      name: "David Thompson",
      company: "Growth Ventures",
      role: "Managing Partner",
      image: "/api/placeholder/80/80",
      content: "Staff Wiser's virtual assistant has streamlined our operations significantly. From managing our calendar to coordinating projects, they've become an indispensable part of our team. Highly recommended!",
      rating: 5,
      results: "50% efficiency improvement"
    },
    {
      name: "Lisa Park",
      company: "Digital Marketing Pro",
      role: "Marketing Director",
      image: "/api/placeholder/80/80",
      content: "The web developer from Staff Wiser created a stunning website that perfectly represents our brand. Our bounce rate decreased by 60% and our lead generation increased by 200%. Outstanding work!",
      rating: 5,
      results: "200% lead increase"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

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
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about 
            their experience working with Staff Wiser's virtual professionals.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 rounded-3xl p-8 md:p-12 max-w-5xl mx-auto"
          >
            <div className="text-center">
              {/* Quote Icon */}
              <div className="text-primary text-4xl mb-6">
                <FaQuoteLeft />
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-medium">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold mb-8">
                {testimonials[currentTestimonial].results}
              </div>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="text-center md:text-left">
                  <div className="font-etna font-semibold text-secondary text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                  </div>
                  <div className="flex justify-center md:justify-start mt-2">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-etna font-bold text-primary mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-etna font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-etna font-bold text-primary mb-2">7+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-etna font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
