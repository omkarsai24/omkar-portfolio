import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/** Subtle cursor glow — desktop, fine-pointer devices only. */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const springX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.4 });

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1024px)');
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener('change', update);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => {
      mq.removeEventListener('change', update);
      window.removeEventListener('mousemove', move);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 -ml-[210px] -mt-[210px] h-[420px] w-[420px] rounded-full bg-accent/[0.05] blur-[80px]"
      style={{ x: springX, y: springY }}
    />
  );
}
