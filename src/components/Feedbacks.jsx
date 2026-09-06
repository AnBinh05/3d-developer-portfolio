import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({
  index,
  title,
  issuer,
  issue_date,
  description,
  badge_url,
  credential_link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-6 sm:p-8 rounded-3xl xs:w-[360px] w-full flex flex-col justify-between border border-[#ffffff10] hover:border-[#915EFF] transition-all duration-300'
  >
    <div>
      <div className='flex items-center justify-between gap-4'>
        <img
          src={badge_url}
          alt={title}
          className='w-20 h-20 object-contain drop-shadow-[0_0_12px_rgba(145,94,255,0.4)]'
        />
        <span className='text-[12px] bg-[#915EFF20] text-[#915EFF] font-semibold px-3 py-1 rounded-full border border-[#915EFF40]'>
          {issue_date}
        </span>
      </div>

      <div className='mt-5'>
        <h3 className='text-white font-bold text-[20px]'>{title}</h3>
        <p className='text-[#915EFF] font-semibold text-[14px] mt-1'>
          {issuer}
        </p>
        <p className='mt-3 text-secondary text-[14px] leading-relaxed'>
          {description}
        </p>
      </div>
    </div>

    <div className='mt-6 pt-4 border-t border-[#ffffff15] flex justify-between items-center'>
      <span className='text-[13px] text-white-100 font-medium'>
        Issued to: <span className='text-white font-semibold'>Lê An Bình</span>
      </span>
      {credential_link && (
        <a
          href={credential_link}
          target='_blank'
          rel='noopener noreferrer'
          className='text-[13px] font-bold text-[#915EFF] hover:text-white transition-colors flex items-center gap-1'
        >
          Verify Credential ↗
        </a>
      )}
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Verified Credentials</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7 justify-center`}>
        {certificates.map((cert, index) => (
          <CertificateCard key={cert.title} index={index} {...cert} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "certifications");
