import React from 'react'
import { Cpu, Shield, Network } from 'lucide-react'

const items = [
  {
    icon: Cpu,
    title: 'Adaptive Reasoning',
    desc: 'Context-aware agents that learn from every interaction and refine decisions in real time.',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    desc: 'Built-in guardrails, evaluation pipelines, and observability for responsible AI at scale.',
  },
  {
    icon: Network,
    title: 'Global Intelligence Fabric',
    desc: 'A distributed orchestration layer that connects models, data, and tools across continents.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-semibold">Capabilities</h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Designed for teams who want beautiful interfaces and serious infrastructure in one cohesive platform.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 grid place-items-center shadow-lg shadow-cyan-500/30">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* soft radial backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 -top-24 h-[30rem] bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_60%)] blur-3xl" />
      </div>
    </section>
  )
}
