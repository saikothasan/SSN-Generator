import SSNGenerator from '../components/SSNGenerator'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

export default function Home() {
  return (
    <>
      <SEO 
        title="SSN Generator - Educational Tool"
        description="Generate SSN-like numbers for educational purposes. Learn about SSN structure and format without using real personal information."
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center sm:text-4xl lg:text-5xl">Welcome to SSN Generator</h1>
          <p className="text-gray-700 mb-8 text-center max-w-2xl mx-auto sm:text-lg">
            This tool generates random numbers in the format of Social Security Numbers (SSNs) for educational and testing purposes only. Please use responsibly and remember that these are not real SSNs.
          </p>
          <SSNGenerator />
        </main>
        <Footer />
      </div>
    </>
  )
}

