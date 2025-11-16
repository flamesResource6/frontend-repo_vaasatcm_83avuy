import { Mail, Phone, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Lets build something brilliant</h2>
            <p className="mt-3 text-gray-600">Tell us about your goals and well send a tailored proposal within 24 hours.</p>
            <div className="mt-6 grid gap-3 text-sm text-gray-700">
              <p className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> hello@flames.ai</p>
              <p className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</p>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl p-6 ring-1 ring-black/10 bg-white">
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" />
              </div>
              <div>
                <label className="text-sm text-gray-700">Project</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-black/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900/10" placeholder="Voice agent, automations, integrations..." />
              </div>
              <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition">
                <Send className="h-4 w-4" /> Request proposal
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
