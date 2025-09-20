"use client"
import { arts } from "@/data/YashData/data"
import SectionTitle from "../SectionTitle"
import { useState } from "react"
import {
  MdKeyboardDoubleArrowDown,
  MdKeyboardDoubleArrowUp,
} from "react-icons/md"
import AnimatedWrapper from "@/utils/AnimatedWrapper"
import Image from "next/image"

const ArtsAndDesigns = () => {
  const showAllVis = arts.length > 4
  const [showAll, setShowAll] = useState(false)
  const visibleArts = showAll ? arts : arts.slice(0, 4)

  return (
    <div id="arts-designs" className="flex flex-col gap-3">
      <SectionTitle title="Arts & Designs" />
      <AnimatedWrapper delay={0.1}>
        <div className="bg-light-card dark:bg-zinc-900 hover:bg-light-muted/75 dark:hover:bg-zinc-800/75 transition-colors duration-100 border border-light-border dark:border-zinc-700 rounded-md overflow-hidden">
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {visibleArts.map((art, index) => (
                <div
                  key={art.id}
                  className={`relative group overflow-hidden rounded-lg ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' :
                    index === 3 ? 'md:col-span-2' :
                    'md:col-span-1 md:row-span-1'
                  }`}
                >
                  <div className={`relative ${
                    index === 0 ? 'aspect-[4/3] md:aspect-auto md:h-full' :
                    index === 3 ? 'aspect-[4/3] md:aspect-[2/1]' :
                    'aspect-square'
                  }`}>
                    <Image
                      src={art.img}
                      alt={art.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                      <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <h3 className="text-lg font-bold mb-2">{art.title}</h3>
                        <p className="text-sm opacity-90">{art.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedWrapper>
      <div>
        {showAllVis && (
          <button
            className="showMore-btn"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? (
              <div className="flex gap-0.5 justify-center items-center">
                <div className="animate-pulse">
                  <MdKeyboardDoubleArrowUp />
                </div>
                Show less
              </div>
            ) : (
              <div className="flex gap-0.5 justify-center items-center">
                <div className="animate-pulse">
                  <MdKeyboardDoubleArrowDown />
                </div>
                Show all
              </div>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default ArtsAndDesigns
