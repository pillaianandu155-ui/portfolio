export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E2E] py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span
            className="text-lg font-bold"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-[#A78BFA]">AP</span>
            <span className="text-[#6B6B7E]">.dev</span>
          </span>
        </div>

        <p
          className="text-[#6B6B7E] text-sm"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Designed & built by{' '}
          <span className="text-[#A78BFA]">Anandu Pillai</span> · {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          {[
            { href: 'https://github.com/pillaianandu155-ui', label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/anandu-pillai-944276320/', label: 'LinkedIn' },
            { href: 'mailto:pillaianandu155@gmail.com', label: 'Email' },
          ].map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#6B6B7E] hover:text-[#A78BFA] transition-colors"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}