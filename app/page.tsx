export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
      <section className="max-w-3xl text-center space-y-6">
        {/* Hero Name */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
          Matthew Polk
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-gray-600">
          Building at the intersection of <span className="font-semibold">technology</span> and <span className="font-semibold">finance</span>.
        </p>

        {/* Call-to-actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl border border-gray-300 font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
