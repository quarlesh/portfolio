export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        
        {/* Left */}
        <p>© {new Date().getFullYear()} Haylee Quarles</p>

        {/* Right */}
        <div className="flex gap-6">
          <a
            href="https://github.com/quarlesh"
            target="_blank"
            className="hover:text-emerald-600 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/haylee-quarles"
            target="_blank"
            className="hover:text-emerald-600 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:quarleshaylee@gmail.com"
            className="hover:text-emerald-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}