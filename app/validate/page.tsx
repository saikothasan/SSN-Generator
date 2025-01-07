'use client'

import { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, CheckCircle } from 'lucide-react'

const stateAreaNumbers: { [key: string]: [number, number] } = {
  'AL': [416, 424], 'AK': [574, 574], 'AZ': [526, 527], 'AR': [429, 432],
  'CA': [545, 573], 'CO': [521, 524], 'CT': [40, 49], 'DE': [221, 222],
  'FL': [261, 267], 'GA': [252, 260], 'HI': [575, 576], 'ID': [518, 519],
  'IL': [318, 361], 'IN': [303, 317], 'IA': [478, 485], 'KS': [509, 515],
  'KY': [400, 407], 'LA': [433, 439], 'ME': [4, 7], 'MD': [212, 220],
  'MA': [10, 34], 'MI': [362, 386], 'MN': [468, 477], 'MS': [425, 428],
  'MO': [486, 500], 'MT': [516, 517], 'NE': [505, 508], 'NV': [530, 530],
  'NH': [1, 3], 'NJ': [135, 158], 'NM': [525, 525], 'NY': [50, 134],
  'NC': [237, 246], 'ND': [501, 501], 'OH': [268, 302], 'OK': [440, 448],
  'OR': [540, 544], 'PA': [159, 211], 'RI': [35, 39], 'SC': [247, 251],
  'SD': [503, 504], 'TN': [408, 415], 'TX': [449, 467], 'UT': [528, 529],
  'VT': [8, 9], 'VA': [223, 231], 'WA': [531, 539], 'WV': [232, 236],
  'WI': [387, 399], 'WY': [520, 520]
}

export default function Validate() {
  const [ssn, setSSN] = useState('')
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    format: boolean;
    areaNumber: boolean;
    groupNumber: boolean;
    serialNumber: boolean;
    possibleState?: string;
  } | null>(null)

  const validateSSN = () => {
    const ssnRegex = /^(\d{3})-(\d{2})-(\d{4})$/
    const match = ssn.match(ssnRegex)

    if (!match) {
      setValidationResult({
        isValid: false,
        format: false,
        areaNumber: false,
        groupNumber: false,
        serialNumber: false
      })
      return
    }

    const [, area, group, serial] = match
    const areaNum = parseInt(area)
    const groupNum = parseInt(group)
    const serialNum = parseInt(serial)

    const isValidArea = areaNum !== 666 && areaNum !== 900 && areaNum <= 999
    const isValidGroup = groupNum !== 0
    const isValidSerial = serialNum !== 0

    const possibleState = Object.entries(stateAreaNumbers).find(([, [min, max]]) => 
      areaNum >= min && areaNum <= max
    )?.[0]

    setValidationResult({
      isValid: isValidArea && isValidGroup && isValidSerial,
      format: true,
      areaNumber: isValidArea,
      groupNumber: isValidGroup,
      serialNumber: isValidSerial,
      possibleState
    })
  }

  return (
    <>
      <SEO 
        title="SSN Validator"
        description="Validate SSN format and structure. Learn about the components of a Social Security Number."
      />
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-indigo-100 to-purple-100">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <Card className="w-full max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-indigo-700 sm:text-3xl">SSN Validator</CardTitle>
              <CardDescription className="text-center text-gray-600 sm:text-lg">Check if an SSN follows the correct format and structure</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                type="text"
                placeholder="Enter SSN (XXX-XX-XXXX)"
                value={ssn}
                onChange={(e) => setSSN(e.target.value)}
                className="text-center text-sm sm:text-lg font-mono"
              />
              <Button 
                onClick={validateSSN}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base"
              >
                Validate SSN
              </Button>
              {validationResult && (
                <div className="space-y-2">
                  <div className={`flex items-center justify-center p-2 rounded ${validationResult.isValid ? 'bg-green-100' : 'bg-red-100'}`}>
                    {validationResult.isValid ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-red-500 mr-2" />
                    )}
                    <span className={`${validationResult.isValid ? 'text-green-700' : 'text-red-700'} text-sm sm:text-base`}>
                      {validationResult.isValid ? 'Valid SSN format and structure' : 'Invalid SSN'}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm">
                    <p>Format: {validationResult.format ? '✅ Correct' : '❌ Incorrect'}</p>
                    <p>Area Number: {validationResult.areaNumber ? '✅ Valid' : '❌ Invalid'}</p>
                    <p>Group Number: {validationResult.groupNumber ? '✅ Valid' : '❌ Invalid'}</p>
                    <p>Serial Number: {validationResult.serialNumber ? '✅ Valid' : '❌ Invalid'}</p>
                    {validationResult.possibleState && (
                      <p>Possible State of Issuance: {validationResult.possibleState}</p>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-indigo-700 mb-4 sm:text-2xl">Understanding SSN Structure</h3>
            <p className="mb-2 text-sm sm:text-base">A Social Security Number (SSN) consists of three parts:</p>
            <ul className="list-disc pl-5 mb-4 text-sm sm:text-base">
              <li><strong>Area Number (First 3 digits):</strong> Historically assigned based on the state where the SSN was issued. Since 2011, it's randomly assigned.</li>
              <li><strong>Group Number (Middle 2 digits):</strong> Used to break SSNs into blocks for easier administration.</li>
              <li><strong>Serial Number (Last 4 digits):</strong> A sequential number within each group.</li>
            </ul>
            <p className="mb-2 text-sm sm:text-base">Invalid SSN combinations include:</p>
            <ul className="list-disc pl-5 text-sm sm:text-base">
              <li>Area numbers 000, 666, or 900-999</li>
              <li>Group number 00</li>
              <li>Serial number 0000</li>
            </ul>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

