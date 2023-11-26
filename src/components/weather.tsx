"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import { Search } from "lucide-react"
import Weatherdata from "./weatherdata"
import useSWR from "swr"
import { useState } from "react"
import Loader from "./loader"

const Weather = () => {
  // use state for search
  const [search, setSearch] = useState("")
  const [city, setCity] = useState("karachi")
  // Fetcher function
  let apilink: string = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${city}&days=3&aqi=yes&alerts=yes`

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  // SWR Library
  const { data, error, isLoading } = useSWR(apilink, fetcher);

  if (error) return <div>failed to load</div>
  if (isLoading) return <Loader />

  return (
    <div className='w-full mx-auto'>
      {/* input & button */}
      <div className="w-[70%] border border-gray-300 rounded-xl mx-auto flex items-center p-2">
        {/* input */}
        <Input 
        type="text"
        value={search}
        onChange={(e)=>{setSearch(e.target.value)}}
        placeholder="Search City Hear" 
        className="bg-transparent focus:outline-none focus:ring-transparent border-none text-xl placeholder:text-gray-300 text-white " />
        {/* button */}
        <Button 
        variant="ghost" 
        size="icon" 
        onClick={()=>{
          setCity(search)
          setSearch("")
        }}
        className="hover:bg-transparent text-white hover:text-gray-500 duration-300">
          <Search className="h-6 w-6" />
        </Button>
      </div>
      {/* weather Data */}
      <div className="mx-auto">
        <Weatherdata data={data} />
      </div>
    </div>
  )
}

export default Weather
