import React, { useState } from "react"
import SectionTitle from "../SectionTitle"
import toast from "react-hot-toast"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Newsletter = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      toast.success("Newsletter feature coming soon!")
      setName("")
      setEmail("")
    } catch (error) {
      console.log(error)
      toast.error("Something Went Wrong!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Newsletter" />
      <div className="flex flex-col gap-2">
        <p className="text-gray-400">Subscribe to get updates on new projects and articles.</p>
        <div className="flex items-center justify-between p-5 border border-zinc-700 rounded-md bg-zinc-900">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full h-full"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="placeholder:text-sm placeholder:font-medium py-1.5 px-2.5 border border-zinc-700 rounded-md bg-mainBlack w-full sm:w-[160px] focus:outline-none focus:border-zinc-400"
            />
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 placeholder:text-sm placeholder:font-medium py-1.5 px-2.5 border border-zinc-700 rounded-md bg-mainBlack focus:outline-none focus:border-zinc-400"
            />
            {loading ? (
              <div className="px-3 md:w-[110px] text-center flex items-center justify-center py-1.5 mx-auto h-full bg-white rounded-md border border-white text-black whitespace-nowrap">
                <AiOutlineLoading3Quarters className="animate-spin text-xl" />
              </div>
            ) : (
              <button
                type="submit"
                className="px-3 md:w-[110px] w-full mx-auto py-1 h-full bg-white hover:bg-white/80 hover:border-white/80 rounded-md border border-white text-black whitespace-nowrap transition-all duration-200"
              >
                Subscribe!
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter