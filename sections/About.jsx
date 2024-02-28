'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Global Printers" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Welcome To Global Printers</span> at Global Printers, we transcend geographical boundaries to provide cutting-edge printing solutions tailored to meet the needs of businesses and individuals worldwide.
        and unwavering commitment to quality.{' '}
        <span className="font-extrabold text-white">
          Global Printers
        </span>{' '}
        With our state-of-the-art technology{' '}
        <span className="font-extrabold text-white">GP</span> devices you can
        we're your trusted partner in printing excellence{' '}
        <span className="font-extrabold text-white">explore</span> the prestige
        of Sublimation & Ecosolvent printing
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
