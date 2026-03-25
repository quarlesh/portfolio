export function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        
        {/* Left */}
        <p>© {new Date().getFullYear()} Haylee Quarles</p>

        {/* Right */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:you@example.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}