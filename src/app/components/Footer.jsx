"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-serif text-gray-900 tracking-wide">
            Azure Haven
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Where Serenity Meets Sophistication
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="/" className="hover:text-gray-900 transition">Home</a></li>
            <li><a href="/suites" className="hover:text-gray-900 transition">Suites & Villas</a></li>
            <li><a href="/experiences" className="hover:text-gray-900 transition">Experience</a></li>
            <li><a href="/contact" className="hover:text-gray-900 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
          <p className="text-sm text-gray-700">
            123 Azure Coastline Drive<br />
            Queensland, Australia<br />
            +61 123 456 789<br />
            hello@azurehaven.au
          </p>

          {/* Social Links (text only for now) */}
          <div className="flex space-x-4 mt-4 text-gray-600 text-sm">
            <a href="#" className="hover:text-gray-900 transition">Instagram</a>
            <a href="#" className="hover:text-gray-900 transition">Facebook</a>
            <a href="#" className="hover:text-gray-900 transition">Twitter</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-100 mt-8 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Azure Haven. All rights reserved.
      </div>
    </footer>
  );
}
