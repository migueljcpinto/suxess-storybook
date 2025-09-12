import { type Transition, type Variants, motion } from 'framer-motion';
import type React from 'react';

interface EntranceAnimationProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  duration?: number;
  easing?: 'ease' | 'easeIn' | 'easeOut' | 'easeInOut' | 'spring';
  stagger?: number;
}

const EntranceAnimation: React.FC<EntranceAnimationProps> = ({
  children,
  delay = 0.1,
  direction = 'up',
  distance = 60,
  duration = 0.8,
  easing = 'spring',
  stagger = 0,
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { y: 0, x: distance };
      case 'right':
        return { y: 0, x: -distance };
      default:
        return { y: distance, x: 0 };
    }
  };

  const getTransition = () => {
    if (easing === 'spring') {
      return {
        type: 'spring' as const,
        stiffness: 120,
        damping: 25,
        mass: 0.8,
        delay,
        duration,
      };
    }

    return {
      type: 'tween' as const,
      ease: easing,
      delay,
      duration,
    };
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(4px)',
      ...getInitialPosition(),
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      y: 0,
      x: 0,
      transition: {
        ...getTransition(),
        staggerChildren: stagger,
      } as Transition,
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1, margin: '-50px' }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default EntranceAnimation;
