import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-gray-50 py-24 relative z-10"
    >
      <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] opacity-5 bg-repeat"></div>

      <div className="container mx-auto px-8 max-w-6xl relative">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-light mb-4 tracking-wide text-gray-800"
          >
            אודות
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-0.5 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200 mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-black rounded-full mx-auto flex items-center justify-center mb-6">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-gray-800">
                המומחיות שלנו
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              כבר למעלה מ-25 שנה אנחנו מתמחים באיתור והתאמה אישית של תכשיטים.
              הצוות המקצועי שלנו, הכולל מומחים בתחום התכשיטנות והיהלומים, עובד
              במסירות כדי להביא לכם את הפריטים המושלמים ביותר.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <div className="mb-8">
              <div className="w-20 h-20 bg-black rounded-full mx-auto flex items-center justify-center mb-6">
                <span className="text-2xl text-white">✨</span>
              </div>
              <h3 className="text-2xl font-light mb-4 text-gray-800">
                הגישה שלנו
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              אנחנו מאמינים שכל לקוח ייחודי, ולכן אנחנו מקדישים תשומת לב מיוחדת
              להבנת הצרכים והרצונות האישיים של כל אחד. השירות שלנו מותאם אישית,
              מקצועי ודיסקרטי.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
