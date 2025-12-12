import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-center py-16">
      {/* Name */}
      <h2 className="text-white text-3xl font-semibold mb-8">Tsion Shimelis</h2>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 mb-8">
        <a
          href="#"
          className="w-14 h-14 rounded-full bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8]
                     flex items-center justify-center text-white text-2xl 
                     hover:opacity-90 transition"
        >
          <FaLinkedinIn />
        </a>

        <a
          href="#"
          className="w-14 h-14 rounded-full bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8]
                     flex items-center justify-center text-white text-2xl 
                     hover:opacity-90 transition"
        >
          <FaGithub />
        </a>

        <a
          href="#"
          className="w-14 h-14 rounded-full bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8]
                     flex items-center justify-center text-white text-2xl 
                     hover:opacity-90 transition"
        >
          <FaTwitter />
        </a>

        <a
          href="#"
          className="w-14 h-14 rounded-full bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8]
                     flex items-center justify-center text-white text-2xl 
                     hover:opacity-90 transition"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Contact */}
      <p className="text-gray-300 text-lg">
        tsion.shimelis@example.com | +251 912 345 678
      </p>

      {/* Copyright */}
      <p className="text-gray-400 text-sm mt-4">
        © 2024 Tsion Shimelis. All rights reserved.
      </p>
    </footer>
  );
}
