import React, { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }
      )
      gsap.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.2, duration: 1, ease: 'power3.out' }
      )

      // Subtle parallax on scroll
      gsap.to(overlayRef.current, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: overlayRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden text-white">
      {/* Neon gradient background */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-40 -left-40 h-[60rem] w-[60rem] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute top-40 -right-40 h-[40rem] w-[40rem] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
      </div>

      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Glass panel content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-28">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-[0_0_80px_rgba(34,211,238,0.2)]">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Engineering Intelligence for the Next Era
          </h1>
          <p
            ref={subtitleRef}
            className="mt-4 max-w-2xl text-white/80 text-lg"
          >
            We build adaptive AI systems that learn, reason, and collaborate with humans. Explore a platform where glassmorphism meets deep tech.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#features"
              className="rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-medium shadow-lg shadow-cyan-500/30 hover:opacity-90 transition-opacity"
            >
              Discover the Platform
            </a>
            <a
              href="#about"
              className="rounded-full bg-white/10 border border-white/20 px-6 py-3 font-medium hover:bg-white/15 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Animated circuit lines overlay */}
      <CircuitOverlay />
    </section>
  )
}

function CircuitOverlay() {
  // Simple animated SVG lines suggesting connections across a globe
  return (
    <svg
      className="pointer-events-none absolute inset-0 z-10 opacity-60"
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="soft-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {[
        'M100,500 C300,350 500,300 700,360 S1100,520 1300,420',
        'M80,300 C350,280 520,250 740,300 S980,400 1280,380',
        'M120,640 C360,580 520,540 760,600 S1080,720 1320,620',
      ].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="url(#glow)"
          strokeWidth="2"
          filter="url(#soft-glow)"
        >
          <animate
            attributeName="stroke-dasharray"
            from="1, 400"
            to="400, 1"
            dur={`${6 + i * 1.5}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-400"
            dur={`${6 + i * 1.5}s`}
            repeatCount="indefinite"
          />
        </path>
      ))}

      {/* Pulsing nodes */}
      {[{ x: 300, y: 320 }, { x: 780, y: 360 }, { x: 1120, y: 500 }].map(
        (p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="3" fill="#a5f3fc" />
            <circle cx={p.x} cy={p.y} r="3" fill="#22d3ee">
              <animate
                attributeName="r"
                values="3;8;3"
                dur="3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="1;0;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        )
      )}
    </svg>
  )
}
