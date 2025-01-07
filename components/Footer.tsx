export default function Footer() {
  return (
    <footer className="bg-indigo-800 text-white">
      <div className="container mx-auto px-4 py-4 text-center">
        <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} SSN Generator. For demonstration purposes only.</p>
      </div>
    </footer>
  )
}

