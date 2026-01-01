import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/30">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Contact Twinkling Petals Pre School & Day Care in Bengaluru
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visit us or reach out to learn more about admissions and programs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div className="space-y-6">
            <div>
              <h3 className="font-display font-bold text-2xl">
                Twinkling Petals – Pre School / Day Care
              </h3>
            </div>

            <div className="p-4 bg-card rounded-2xl shadow-soft">
              <MapPin className="w-6 h-6 mb-2 text-primary" />
              <address className="not-italic text-muted-foreground text-sm">
                701, 7th Cross, KHB Colony Main Rd,
                <br />
                Kaval Bairasandra, Bengaluru,
                <br />
                Karnataka 560032
              </address>
            </div>

            <a
              href="tel:+919035854071"
              className="block p-4 bg-card rounded-2xl shadow-soft"
            >
              <Phone className="w-6 h-6 mb-2 text-primary" />
              <p>+91 90358 54071</p>
            </a>

            <a
              href="mailto:twinklingpetalspreschool@gmail.com"
              className="block p-4 bg-card rounded-2xl shadow-soft"
            >
              <Mail className="w-6 h-6 mb-2 text-primary" />
              <p>twinklingpetalspreschool@gmail.com</p>
            </a>

            <div className="p-4 bg-card rounded-2xl shadow-soft">
              <Clock className="w-6 h-6 mb-2 text-primary" />
              <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
              <p>Saturday: 9:00 AM – 1:00 PM</p>
            </div>
          </motion.div>

          <div className="h-[400px] rounded-3xl overflow-hidden shadow-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.094845094429!2d77.6027468957012!3d13.01823395817262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae171a1734cec9%3A0xa829b95a888a9fc8!2sTwinkling%20Petals!5e0!3m2!1sen!2sin!4v1767289467490!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Twinkling Petals Pre School & Day Care Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
