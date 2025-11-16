import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center w-full">
        <div className="backdrop-blur-sm bg-white/50 rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-50 rounded-full px-3 py-1 mb-4">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500"></span>
            AI voice agents • Automations • Integrations
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Build, launch, and scale your AI agency with confidence
          </h1>
          <p className="mt-4 text-gray-700 md:text-lg">
            We design voice agents, automate workflows, and integrate AI into products so you move faster and serve more customers.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-gray-800 transition">Get a proposal</a>
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-white/70 backdrop-blur px-5 py-3 text-sm font-medium text-gray-900 ring-1 ring-inset ring-black/10 hover:bg-white">See our work</a>
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70"></div>
    </section>
  )
}
