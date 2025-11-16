import { Bot, Workflow, Headphones, Shield, Zap, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Bot,
    title: 'Voice & Chat Agents',
    desc: 'Custom AI agents that book, support, and sell across phone, chat, and web.',
  },
  {
    icon: Workflow,
    title: 'Ops Automations',
    desc: 'Automate lead routing, onboarding, support, and back-office workflows.',
  },
  {
    icon: Headphones,
    title: 'Contact Center AI',
    desc: 'Augment agents with copilots, summaries, QA, and real-time assistance.',
  },
  {
    icon: Shield,
    title: 'Safety & Guardrails',
    desc: 'Policy, red-teaming, and evals to keep your AI safe and on-brand.',
  },
  {
    icon: Zap,
    title: 'Integrations',
    desc: 'CRM, support, telephony, and data stack integrations that just work.',
  },
  {
    icon: Sparkles,
    title: 'Model Strategy',
    desc: 'Pick the right models, caching, and retrieval for cost and quality.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">End-to-end delivery across strategy, build, and scaling.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group rounded-2xl p-6 ring-1 ring-black/10 hover:ring-black/20 transition bg-white">
              <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500 text-white grid place-items-center">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
