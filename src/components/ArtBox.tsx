"use client"
import React from "react"
import Image from "next/image"

interface ArtBoxProps {
  img: string
  title: string
  content: string
}

const ArtBox: React.FC<ArtBoxProps> = ({
  img,
  title,
  content,
}) => {
  return (
    <div className="bg-light-card dark:bg-zinc-900 cursor-pointer hover:bg-light-muted/75 dark:hover:bg-zinc-800/75 transition-colors duration-100 border border-light-border dark:border-zinc-700 rounded-md overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <div className="flex justify-center">
            <Image
              className="rounded-md max-h-[350px] w-auto object-contain"
              src={img}
              alt={title}
              width={300}
              height={250}
            />
          </div>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-xl font-semibold text-light-text dark:text-mainWhite">
              {title}
            </h3>
            <p className="text-sm opacity-80 text-light-text dark:text-mainWhite">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArtBox
