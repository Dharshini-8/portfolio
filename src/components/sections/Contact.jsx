import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_dharshini',
        'template_gyiax4h',
        formRef.current,
        'C2tevYIVWYZv_EXZy'
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        e.target.reset();
        setTimeout(() => setSubmitStatus(null), 3000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        setIsSubmitting(false);
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 3000);
      });
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or looking for a full stack intern? Let's talk!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-700">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 bg-slate-900 p-10 lg:p-12 text-white flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-12 text-lg">
                Fill up the form and I will get back to you within 24 hours.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <FiMapPin className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-1 uppercase tracking-wider">Location</h4>
                    <p className="text-slate-100">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <FiMail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-1 uppercase tracking-wider">Email</h4>
                    <a href={`mailto:vtdharshini8@gmail.com`} className="text-slate-100 hover:text-blue-400 transition-colors break-all">
                      📧 vtdharshini8@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <FiPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-1 uppercase tracking-wider">Phone</h4>
                    <p className="text-slate-100">9345402107</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-3/5 p-10 lg:p-12"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    placeholder="John Doe"
                    className="input-field"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    className="input-field"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  required 
                  placeholder="How can I help you?"
                  className="input-field"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows="5" 
                  required 
                  placeholder="Write your message here..."
                  className="input-field resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : submitStatus === 'success' ? (
                  "Message Sent Successfully!"
                ) : submitStatus === 'error' ? (
                  "Error sending message. Please try again."
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
