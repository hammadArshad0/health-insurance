// src/Footerproject.jsx
function Footer() {
  return (
    <footer className="bg-green-700 text-white mt-10">
      {/* Top section - links */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-green-600">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">About</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            Welcome to <span className="font-semibold">Blog</span>, your space for insights, tutorials, and ideas. 
            We share knowledge to help you grow every day.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Categories</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-green-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-green-400 cursor-pointer">Terms of Service</li>
            <li className="hover:text-green-400  cursor-pointer">Help Center</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-green-400 cursor-pointer">Facebook</li>
            <li className="hover:text-green-400 cursor-pointer">Instagram</li>
            <li className="hover:text-green-400  cursor-pointer">Twitter</li>
            <li className="hover:text-green-400 cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Bottom section */}
      <div className="text-center py-4 text-gray-200 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">Blog</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;