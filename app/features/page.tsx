import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import { CheckCircle } from 'lucide-react'

export default function Features() {
  const featureList = [
    "Generates SSN-like numbers in the correct format",
    "Option to generate SSNs based on all 50 states",
    "Year of issuance selection for more accurate SSN generation",
    "Excludes blacklisted and invalid SSN combinations",
    "Bulk SSN generation (up to 100 at a time)",
    "Detailed SSN format validator tool",
    "Possible state of issuance identification for validated SSNs",
    "Educational information about SSN structure and history",
    "Responsive design for all devices",
    "SEO optimized for better visibility",
    "Clear disclaimers and usage guidelines",
    "Frequently Asked Questions (FAQ) section"
  ]

  return (
    <>
      <SEO 
        title="Features of SSN Generator"
        description="Explore the features of our SSN Generator tool, including state-based generation, bulk creation, and educational resources."
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 sm:text-4xl lg:text-5xl">Features</h2>
          <ul className="space-y-2 bg-white p-6 rounded-lg shadow-md">
            {featureList.map((feature, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
              </li>
            ))}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  )
}

