"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyType, setPropertyType] = useState("")
  const [location, setLocation] = useState("")

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchQuery) params.set("q", searchQuery)
    if (propertyType) params.set("type", propertyType)
    if (location) params.set("location", location)

    window.location.href = `/properties?${params.toString()}`
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect Property in
            <span className="text-yellow-400"> Uganda</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Discover verified properties with live chat, secure transactions, and expert guidance
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <Input
                placeholder="Search properties, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-12 text-gray-900"
              />
            </div>

            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="rental">Rental</SelectItem>
              </SelectContent>
            </Select>

            <Select value={location} onValueChange={setLocation}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kampala">Kampala</SelectItem>
                <SelectItem value="wakiso">Wakiso</SelectItem>
                <SelectItem value="mukono">Mukono</SelectItem>
                <SelectItem value="jinja">Jinja</SelectItem>
                <SelectItem value="entebbe">Entebbe</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button onClick={handleSearch} className="w-full mt-4 h-12 bg-blue-600 hover:bg-blue-700 text-lg">
            <Search className="h-5 w-5 mr-2" />
            Search Properties
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-yellow-400">1,200+</div>
            <div className="text-blue-100">Properties Listed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">500+</div>
            <div className="text-blue-100">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">50+</div>
            <div className="text-blue-100">Districts Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-yellow-400">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
