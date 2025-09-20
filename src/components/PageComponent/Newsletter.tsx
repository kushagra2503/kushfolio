import React, { useState } from "react"
import SectionTitle from "../SectionTitle"
import toast from "react-hot-toast"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Newsletter = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)

      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Welcome email sent! Check your inbox.")
        setSubscribed(true)
        setName("")
        setEmail("")
      } else {
        toast.error(data.error || "Something went wrong!")
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed to send email. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = () => {
    if (subscribed) {
      setSubscribed(false)
    }
  }

  return (
    <section className="flex flex-col gap-0.5">
      <SectionTitle title="Community" />
      <div className="flex flex-col gap-2">
        <p className="text-light-text/80 dark:text-mainWhite/80">Subscribe to become a part of my community.</p>
        <div className="flex items-center justify-between p-5 border border-light-border dark:border-zinc-700 rounded-md bg-light-card dark:bg-zinc-900">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-stretch md:items-center gap-2 w-full h-full"
          >
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                handleInputChange()
              }}
              required
              className="placeholder:text-sm placeholder:font-medium py-1.5 px-2.5 border border-light-border dark:border-zinc-700 rounded-md bg-light-bg dark:bg-mainBlack w-full sm:w-[160px] focus:outline-none focus:border-light-muted dark:focus:border-zinc-400"
            />
            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                handleInputChange()
              }}
              required
              className="flex-1 placeholder:text-sm placeholder:font-medium py-1.5 px-2.5 border border-light-border dark:border-zinc-700 rounded-md bg-light-bg dark:bg-mainBlack focus:outline-none focus:border-light-muted dark:focus:border-zinc-400"
            />
            {loading ? (
              <div className="px-3 md:w-[110px] text-center flex items-center justify-center py-1.5 mx-auto h-full bg-light-text hover:scale-105 rounded-md border border-light-text text-light-bg dark:bg-white dark:border-white dark:text-black whitespace-nowrap transition-all duration-200">
                <AiOutlineLoading3Quarters className="animate-spin text-xl" />
              </div>
            ) : subscribed ? (
              <button
                type="button"
                disabled
                className="px-3 md:w-[110px] w-full mx-auto py-1 h-full bg-green-600 hover:bg-green-600 hover:scale-105 rounded-md border border-green-600 text-white whitespace-nowrap transition-all duration-200 cursor-not-allowed"
              >
                Subscribed
              </button>
            ) : (
              <button
                type="submit"
                className="px-3 md:w-[110px] w-full mx-auto py-1 h-full bg-black hover:bg-black/80 hover:border-black/80 hover:scale-105 rounded-md border border-black text-white dark:bg-white dark:hover:bg-white/80 dark:hover:border-white/80 dark:text-black whitespace-nowrap transition-all duration-200"
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