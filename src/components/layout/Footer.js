// src/components/layout/Footer.js
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center text-sm">
        <p>&copy; {currentYear} LMS Platform. All Rights Reserved.</p>
      </div>
    </footer>
  );
}