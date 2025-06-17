import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-10">

        {/* 1. Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog / Newsroom</li>
          </ul>
        </div>

        {/* 2. Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Help Center / FAQs</li>
            <li>Contact Support</li>
            <li>Shipping & Returns</li>
            <li>Order Tracking</li>
            <li>Report an Issue</li>
          </ul>
        </div>

        {/* 3. Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Accessibility</li>
          </ul>
        </div>

        {/* 4. Useful Links */}
        <div>
          <h3 className="font-semibold mb-2">Useful Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Categories / Top Products</li>
            <li>Affiliate Program</li>
            <li>Download App</li>
            <li>Gift Cards</li>
            <li>Newsletter Signup</li>
          </ul>
        </div>

        {/* 5. Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Email: support@example.com</li>
            <li>Phone: +91 9876543210</li>
            <li>123 Tech Street, India</li>
            <li>Mon - Fri: 9AM - 6PM</li>
          </ul>
        </div>

        {/* 6. Subscription + Social Media */}
        <div>
          <h3 className="font-semibold mb-2">Subscribe</h3>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded text-black"
            />
            <button className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </form>

          <div className="flex space-x-4 mt-4 text-gray-300">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 border-t pt-4">
        &copy; {new Date().getFullYear()} YourAppName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
