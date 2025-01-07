import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'

export default function About() {
  return (
    <>
      <SEO 
        title="About SSN Generator"
        description="Learn about our SSN Generator tool, its purpose, and how it can be used for educational and testing purposes."
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 sm:text-4xl lg:text-5xl">About SSN Generator</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <p className="text-gray-700 text-sm sm:text-base">
              SSN Generator is a tool designed for educational and testing purposes only. It generates random numbers in a format similar to Social Security Numbers (SSNs) but does not produce real SSNs.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Our goal is to provide developers, educators, and students with a resource for understanding the structure and format of SSNs without compromising real personal information.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Features of our SSN Generator include:
            </p>
            <ul className="list-disc pl-5 text-gray-700 text-sm sm:text-base">
              <li>Generation of SSN-like numbers based on historical state assignments</li>
              <li>Option to specify year of issuance</li>
              <li>Bulk generation for testing purposes</li>
              <li>SSN format validation tool</li>
              <li>Educational resources on SSN structure and history</li>
            </ul>
            <p className="text-gray-700 text-sm sm:text-base mt-4">
              Remember: It is illegal to use these generated numbers as real SSNs. Always use responsibly and ethically.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

