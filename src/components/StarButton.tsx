// Github star button component
// This component fetches the number of stars from a GitHub repository and displays it in background
import React, { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { FaRegStar } from "react-icons/fa6"
import { IoMdArrowDropdown } from "react-icons/io"

interface StarData {
  stargazers_count: number
  name: string
  full_name: string
}

const StarButton = () => {
  const [stars, setStars] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/kushagra2503/`,
          {
            headers: {
              Accept: "application/vnd.github.v3+json",
            },
          }
        )

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`)
        }

        const data: StarData = await response.json()
        setStars(data.stargazers_count)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch")
      } finally {
        setLoading(false)
      }
    }
    fetchStars()
  }, [])

  return (
    <a
      className="  px-3 border border-light-border dark:border-zinc-700 hidden md:flex items-center gap-2 rounded-[8px] bg-light-card dark:bg-zinc-900 hover:bg-light-muted/60 dark:hover:bg-zinc-900/60 transition-all duration-200"
      target="_blank"
      href="https://github.com/kushagra2503/"
    >
      <FaRegStar className="size-[16px] text-light-text dark:text-mainWhite" />
      <span className="text-sm text-light-text dark:text-mainWhite">{"Star"}</span>
      <span className="bg-light-muted dark:bg-zinc-800 rounded-xl px-1.5 py-0.5 text-xs font-medium text-light-text dark:text-mainWhite">
        {error ? (
          "16"
        ) : loading ? (
          <AiOutlineLoading3Quarters className="animate-spin size-[16px] p-0.5 text-light-text dark:text-mainWhite" />
        ) : (
          stars
        )}
      </span>

      <div className="w-px h-[28px] bg-light-border dark:bg-zinc-700" />

      <IoMdArrowDropdown className="size-[16px] text-light-text dark:text-mainWhite" />
    </a>
  )
}

export default StarButton