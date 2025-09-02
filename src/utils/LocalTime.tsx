import React, { useState, useEffect } from "react"

const LocalTIme = () => {
    const [time, setTime] = useState(new Date())

    useEffect(()=> {
        const timer = setInterval(()=> {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="text-inherit dark:!text-mainWhite transition-colors duration-300">
            {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit"})}
        </div>
    )
}

export default LocalTIme