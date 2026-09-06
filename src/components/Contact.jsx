import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const contactDetails = [
  {
    icon: "📧",
    label: "Email",
    value: "binhn3832@gmail.com",
    link: "mailto:binhn3832@gmail.com",
    actionText: "Send an Email",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "(+84) 94-636-2901",
    link: "tel:+84946362901",
    actionText: "Call Me",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Hoa Xuan, Da Nang, Vietnam",
    link: null,
    actionText: null,
  },
  {
    icon: "🌐",
    label: "GitHub",
    value: "github.com/AnBinh05",
    link: "https://github.com/AnBinh05",
    actionText: "Visit GitHub",
  },
];

const Contact = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden items-stretch`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl flex flex-col justify-between'
      >
        <div>
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <p className='mt-3 text-secondary text-[16px] leading-[28px]'>
            I'm currently looking for new opportunities and open for collaboration. Feel free to connect or reach out directly through any of the channels below!
          </p>

          <div className='mt-8 flex flex-col gap-4'>
            {contactDetails.map((item, index) => (
              <div
                key={index}
                className='flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-tertiary/60 hover:bg-tertiary border border-white/5 transition-all duration-300'
              >
                <div className='flex items-center gap-3'>
                  <span className='text-2xl p-2 rounded-lg bg-black-200'>{item.icon}</span>
                  <div>
                    <p className='text-secondary text-xs font-semibold uppercase tracking-wider'>{item.label}</p>
                    <p className='text-white font-medium text-[15px]'>{item.value}</p>
                  </div>
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target={item.link.startsWith("http") ? "_blank" : undefined}
                    rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                    className='mt-3 sm:mt-0 text-center text-xs font-semibold py-2 px-4 rounded-lg bg-[#915EFF] text-white hover:bg-[#804dee] transition-colors duration-200'
                  >
                    {item.actionText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='mt-8 pt-6 border-t border-white/10 text-center text-secondary text-xs'>
          Ready to build something great together.
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

