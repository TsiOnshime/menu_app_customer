export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-[#233876]">Tsion</h1>

        <ul className="hidden md:flex gap-10 text-gray-600 text-lg">
          <li>
            <a href="#about" className="hover:text-[#233876] transition block">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#233876] transition block">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#233876] transition block">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-[#233876] transition block">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#233876] transition block">
              Contact
            </a>
          </li>
        </ul>

        <a href="#contact"className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#1F2A45] to-[#2F5CFF] text-white font-semibold shadow-md">
          Hire Me
        </a>
      </div>
    </nav>
  );
}
