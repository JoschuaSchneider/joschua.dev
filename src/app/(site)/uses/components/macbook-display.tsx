"use client";
import { motion, useTransform, useViewportScroll } from "framer-motion"
import Image from "next/image"

export const MacbookDisplay = () => {
  const { scrollY } = useViewportScroll()
  const rotate = useTransform(scrollY, [0, 715], [0, 80])
  const scale = useTransform(scrollY, [0, 715], [1.1, 0.7])
  const opacity = useTransform(scrollY, [200, 715], [1, 0.3])

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          y: -40,
          rotateX: 20,
          perspective: 1000,
          opacity: 0,
        },
        visible: {
          y: 0,
          rotateX: 0,
          perspective: 1000,
          opacity: 1,
        },
      }}
      transition={{
        delay: 0.3,
        duration: 0.5,
      }}
      style={{
        rotateX: rotate,
        perspective: 1000,
        scale,
        opacity,
      }}
      className="z-0 mx-auto mb-12"
    >
      <Image
        src="/macbook.png"
        width={715}
        height={393}
        quality={100}
        alt="Mac-Book Pro side-view"
      />
    </motion.div>
  )
}
