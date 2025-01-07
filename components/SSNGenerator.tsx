'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Info } from 'lucide-react'

const stateAreaNumbers: { [key: string]: [number, number] } = {
  'AL': [416, 424], 'AK': [574, 574], 'AZ': [526, 527], 'AR': [429, 432],
  'CA': [545, 573], 'CO': [521, 524], 'CT': [040, 049], 'DE': [221, 222],
  'FL': [261, 267], 'GA': [252, 260], 'HI': [575, 576], 'ID': [518, 519],
  'IL': [318, 361], 'IN': [303, 317], 'IA': [478, 485], 'KS': [509, 515],
  'KY': [400, 407], 'LA': [433, 439], 'ME': [004, 007], 'MD': [212, 220],
  'MA': [010, 034], 'MI': [362, 386], 'MN': [468, 477], 'MS': [425, 428],
  'MO': [486, 500], 'MT': [516, 517], 'NE': [505, 508], 'NV': [530, 530],
  'NH': [001, 003], 'NJ': [135, 158], 'NM': [525, 525], 'NY': [050, 134],
  'NC': [237, 246], 'ND': [501, 501], 'OH': [268, 302], 'OK': [440, 448],
  'OR': [540, 544], 'PA': [159, 211], 'RI': [035, 039], 'SC': [247, 251],
  'SD': [503, 504], 'TN': [408, 415], 'TX': [449, 467], 'UT': [528, 529],
  'VT': [008, 009], 'VA': [223, 231], 'WA': [531, 539], 'WV': [232, 236],
  'WI': [387, 399], 'WY': [520, 520]
}

export default function SSNGenerator() {
  const [ssn, setSSN] = useState('')
  const [state, setState] = useState('')
  const [year, setYear] = useState('')
  const [excludeBlacklisted, setExcludeBlacklisted] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [generatedSSNs, setGeneratedSSNs] = useState<string[]>([])

  const generateSSN = () => {
    const newSSNs: string[] = []

    for (let i = 0; i < quantity; i++) {
      let area: number
      if (state) {
        const [min, max] = stateAreaNumbers[state]
        area = Math.floor(Math.random() * (max - min + 1)) + min
      } else {
        area = Math.floor(Math.random() * 899) + 1
      }

      let group = Math.floor(Math.random() * 99) + 1
      let serial = Math.floor(Math.random() * 9999) + 1

      if (year) {
        const yearNum = parseInt(year)
        if (yearNum >= 2011) {
          area = Math.floor(Math.random() * 899) + 1
        }
      }

      if (excludeBlacklisted) {
        while (
          area === 666 || 
          (area > 900 && area <= 999) ||
          group === 0 || 
          serial === 0
        ) {
          area = Math.floor(Math.random() * 899) + 1
          group = Math.floor(Math.random() * 99) + 1
          serial = Math.floor(Math.random() * 9999) + 1
        }
      }

      const newSSN = `${area.toString().padStart(3, '0')}-${group.toString().padStart(2, '0')}-${serial.toString().padStart(4, '0')}`
      newSSNs.push(newSSN)
    }

    setGeneratedSSNs(newSSNs)
    setSSN(newSSNs[0])
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-indigo-700 sm:text-3xl">SSN Generator</CardTitle>
        <CardDescription className="text-center text-gray-600 sm:text-lg">Generate random SSN-like numbers for educational purposes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="state" className="text-sm sm:text-base">State (optional)</Label>
          <Select onValueChange={setState}>
            <SelectTrigger id="state">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(stateAreaNumbers).map((stateCode) => (
                <SelectItem key={stateCode} value={stateCode}>{stateCode}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="year" className="text-sm sm:text-base">Year of issuance (optional)</Label>
          <Input
            id="year"
            type="number"
            placeholder="YYYY"
            min="1936"
            max={new Date().getFullYear()}
            onChange={(e) => setYear(e.target.value)}
            className="text-sm sm:text-base"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-sm sm:text-base">Quantity</Label>
          <Input
            id="quantity"
            type="number"
            min="1"
            max="100"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="text-sm sm:text-base"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="excludeBlacklisted"
            checked={excludeBlacklisted}
            onCheckedChange={(checked) => setExcludeBlacklisted(checked as boolean)}
          />
          <Label htmlFor="excludeBlacklisted" className="text-sm sm:text-base">Exclude blacklisted numbers</Label>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="w-4 h-4 text-gray-500" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs sm:text-sm">Excludes numbers like 666 and other invalid combinations</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Button 
          onClick={generateSSN}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base"
        >
          Generate SSN(s)
        </Button>
        {generatedSSNs.length > 0 && (
          <div className="space-y-2">
            <Label className="text-sm sm:text-base">Generated SSN(s):</Label>
            {generatedSSNs.map((ssn, index) => (
              <Input
                key={index}
                type="text"
                value={ssn}
                readOnly
                className="text-center text-sm sm:text-lg font-mono"
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

