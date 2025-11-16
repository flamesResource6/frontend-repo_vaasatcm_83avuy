import { Star } from 'lucide-react'

const logos = [
  'https://dummyimage.com/120x36/111827/ffffff&text=Nova',
  'https://dummyimage.com/120x36/111827/ffffff&text=Axis',
  'https://dummyimage.com/120x36/111827/ffffff&text=Helio',
  'https://dummyimage.com/120x36/111827/ffffff&text=Orbit',
  'https://dummyimage.com/120x36/111827/ffffff&text=Pulse',
]

export default function Work() {
  return (
    <section id="work" className="py-20 bg-gradient-to-b from-white to-indigo-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Selected work</h2>
            <p className="mt-3 text-gray-600">Outcomes weve delivered for high-growth teams.</p>
          </div>
          <div className="inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 rounded-full px-3 py-1">
            <Star className="h-4 w-4" /> 4.9/5 average client rating
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <Case
            title="24/7 voice concierge"
            desc="Deployed a voice agent that books appointments and answers FAQs for a nationwide services brand. 35% call deflection, +18 NPS."
          />
          <Case
            title="Lead routing automations"
            desc="Automated enrichment and assignment across CRM and inboxes. 2.4x faster response, +22% conversion."
          />
          <Case
            title="Support copilot"
            desc="Integrated AI summaries and suggested replies to reduce AHT by 28% across a 60-seat contact center."
          />
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 items-center opacity-70">
          {logos.map((src, i) => (
            <img key={i} src={src} alt="Logo" className="h-9 object-contain mx-auto" />
          ))}
        </div>
      </div>
    </section>
  )
}

function Case({ title, desc }) {
  return (
    <div className="group rounded-2xl overflow-hidden ring-1 ring-black/10 hover:ring-black/20 transition bg-white">
      <div className="h-40 bg-gradient-to-br from-indigo-500 via-purple-500 to-rose-500" />
      <div className="p-6">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  )
}
