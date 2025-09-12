import { cn } from '@repo/design-system/lib/utils';
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import type React from 'react';
import { useEffect } from 'react';
import HeroAbstractFluidShape from './icons/HeroAbstractFluidShape';
import HeroArrowCrossShape from './icons/HeroArrowCrossShape';
import HeroCircleShape from './icons/HeroCircleShape';
import HeroCircleShapeTeal from './icons/HeroCircleShapeTeal';
import HeroCloverShape from './icons/HeroCloverShape';
import HeroCloverShapeGreen from './icons/HeroCloverShapeGreen';
import HeroHeartShape from './icons/HeroHeartShape';

function mapRange(
  value: number,
  fromLow: number,
  fromHigh: number,
  toLow: number,
  toHigh: number
) {
  if (fromLow === fromHigh) {
    return toLow;
  }
  const percentage = (value - fromLow) / (fromHigh - fromLow);
  return toLow + percentage * (toHigh - toLow);
}

interface FloatingObjectProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  direction?: 'toward' | 'away';
  smoothing?: number;
  scrollSpeed?: number;
  rotation?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

function FloatingObject({
  children,
  className,
  distance = 25,
  direction = 'toward',
  smoothing = 50,
  scrollSpeed = 0,
  rotation = 0,
  top,
  bottom,
  left,
  right,
}: FloatingObjectProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    damping: 25,
    stiffness: mapRange(smoothing, 0, 100, 120, 15),
    mass: 0.6,
  });

  const springY = useSpring(mouseY, {
    damping: 25,
    stiffness: mapRange(smoothing, 0, 100, 120, 15),
    mass: 0.6,
  });

  const offset = distance * (direction === 'toward' ? 1 : -1);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const mouseXPos = event.clientX;
      const mouseYPos = event.clientY;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      // Normalize mouse position relative to center with improved sensitivity
      const normalizedX = ((mouseXPos - centerX) / centerX) * offset * 0.6;
      const normalizedY = ((mouseYPos - centerY) / centerY) * offset * 0.6;

      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [offset, mouseX, mouseY]);

  const { scrollY } = useScroll();
  const parallaxOffset = useTransform(
    scrollY,
    [0, 1000],
    [0, 1000 * scrollSpeed]
  );

  const finalY = useTransform(
    [springY, parallaxOffset],
    ([mouse, scroll]) => (mouse as number) + (scroll as number)
  );

  return (
    <motion.div
      className={cn('absolute z-[3]', className)}
      initial={{ opacity: 0, scale: 0.6, filter: 'blur(4px)' }}
      animate={{
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        rotate: rotation,
      }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: 0.8 },
      }}
      whileHover={{
        scale: 1.1,
        filter: 'brightness(1.1)',
        transition: { duration: 0.3 },
      }}
      style={{
        x: smoothing === 0 ? mouseX : springX,
        y: finalY,
        top: top === undefined ? undefined : `${top}%`,
        bottom: bottom === undefined ? undefined : `${bottom}%`,
        left: left === undefined ? undefined : `${left}%`,
        right: right === undefined ? undefined : `${right}%`,
      }}
    >
      {children}
    </motion.div>
  );
}

export default function FloatingObjects() {
  return (
    <div className="pointer-events-none absolute h-screen w-full overflow-hidden">
      <div className="-translate-x-1/2 pointer-events-none absolute top-[100px] left-1/2 h-screen w-full max-xl:w-[120%]">
        <FloatingObject
          top={3}
          left={35}
          distance={35}
          direction="toward"
          smoothing={50}
          scrollSpeed={-0.6}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -180, y: 30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            transition={{
              duration: 1.4,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
              rotate: { duration: 1.8, ease: 'easeOut' },
            }}
            whileHover={{
              scale: 1.15,
              rotate: 5,
              transition: { duration: 0.4 },
            }}
          >
            <HeroCircleShapeTeal />
          </motion.div>
        </FloatingObject>

        <FloatingObject
          top={-10}
          right={25}
          distance={20}
          direction="toward"
          smoothing={10}
          scrollSpeed={-0.4}
          rotation={-30}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.4, y: 60, x: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.5,
              x: { duration: 1.0, ease: 'easeOut' },
            }}
            whileHover={{
              scale: 1.2,
              rotate: 10,
              transition: { duration: 0.3 },
            }}
          >
            <HeroHeartShape />
          </motion.div>
        </FloatingObject>

        <FloatingObject
          bottom={5}
          right={42}
          distance={50}
          direction="toward"
          smoothing={40}
          scrollSpeed={-0.8}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.2, rotate: 180, y: -40 }}
            animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
            transition={{
              duration: 1.3,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.7,
              rotate: { duration: 1.6, ease: 'easeOut' },
            }}
            whileHover={{
              scale: 1.18,
              rotate: -15,
              transition: { duration: 0.4 },
            }}
          >
            <HeroCloverShape />
          </motion.div>
        </FloatingObject>

        <FloatingObject
          bottom={20}
          left={20}
          distance={20}
          direction="toward"
          smoothing={50}
          scrollSpeed={-0.6}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.3, x: -60, y: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.9,
              x: { duration: 1.2, ease: 'easeOut' },
            }}
            whileHover={{
              scale: 1.12,
              x: 5,
              transition: { duration: 0.3 },
            }}
          >
            <HeroCircleShape />
          </motion.div>
        </FloatingObject>

        <FloatingObject
          top={12}
          left={0}
          distance={20}
          direction="toward"
          smoothing={60}
          scrollSpeed={-0.5}
          rotation={60}
        >
          <HeroCloverShapeGreen />
        </FloatingObject>

        <FloatingObject
          bottom={5}
          right={5}
          distance={25}
          direction="toward"
          smoothing={30}
          scrollSpeed={-0.45}
          rotation={-45}
        >
          <HeroArrowCrossShape />
        </FloatingObject>

        <FloatingObject
          top={40}
          right={-5}
          distance={30}
          direction="toward"
          smoothing={25}
          scrollSpeed={-0.6}
          rotation={30}
        >
          <HeroAbstractFluidShape />
        </FloatingObject>

        <FloatingObject
          bottom={0}
          left={0}
          distance={18}
          direction="toward"
          smoothing={35}
          scrollSpeed={-0.4}
          rotation={30}
        >
          <HeroHeartShape />
        </FloatingObject>

        <FloatingObject
          top={-8}
          right={0}
          distance={20}
          direction="toward"
          smoothing={30}
          scrollSpeed={-0.5}
          rotation={20}
        >
          <HeroCloverShapeGreen />
        </FloatingObject>

        <FloatingObject
          top={-10}
          left={8}
          distance={25}
          direction="toward"
          smoothing={10}
          scrollSpeed={-0.45}
          rotation={-15}
        >
          <HeroArrowCrossShape />
        </FloatingObject>
      </div>
    </div>
  );
}
