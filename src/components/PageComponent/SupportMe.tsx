import React from "react"
import SectionTitle from "../SectionTitle"
import { supportText } from "@/data/Common/data"
import { FaRegHeart } from "react-icons/fa6"
import { SiGooglepay } from "react-icons/si"
import toast from "react-hot-toast"

const SupportMe= () => {
    const handleShare = async (url: string) => {
        await navigator.clipboard.writeText(url) //Copy the url to the clipboard
        toast.success("Copied to clipboard") //Toast is used to show a message to the user
    }

    return (
        <section className="flex flex-col gap-0.5">
            <SectionTitle title="Support Me" />
            <div className="flex flex-col gap-2">
                <p>{supportText}</p>
                <div className="flex flex-wrap items-center gap-2">
                    <a className="btn" target="_blank" href="https://github.com/sponsors/kushagra2503">
                        <FaRegHeart className="text-pink-400"/>
                        Github Sponsors
                    </a>
                    <div
            className="btn"
            onClick={(e) => {
              e.stopPropagation()
              handleShare("9911039595@ptsbi")
            }}
          >
            <SiGooglepay className="text-[#01BAF2]" />
            Google Pay
          </div>
                </div>
            </div>
        </section>
    )
}

export default SupportMe;