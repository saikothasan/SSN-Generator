import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
          <ShieldCheck className="w-8 h-8 text-indigo-600 mr-2" />
          <h1 className="text-2xl font-bold text-indigo-700">SSN Generator</h1>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center sm:space-x-4">
            <li className="mx-2 my-1 sm:mx-0 sm:my-0"><Link href="/" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">Home</Link></li>
            <li className="mx-2 my-1 sm:mx-0 sm:my-0"><Link href="/validate" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">Validate</Link></li>
            <li className="mx-2 my-1 sm:mx-0 sm:my-0"><Link href="/about" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">About</Link></li>
            <li className="mx-2 my-1 sm:mx-0 sm:my-0"><Link href="/features" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">Features</Link></li>
            <li className="mx-2 my-1 sm:mx-0 sm:my-0"><Link href="/faq" className="text-indigo-600 hover:text-indigo-800 text-sm sm:text-base">FAQ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

