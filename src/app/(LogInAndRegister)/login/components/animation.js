'use client'

import Lottie from "lottie-react"
import registerAnimation from '../../../../assets/Register-Animation.json'
import { useEffect, useState } from "react"

export default function LoginAnimation() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <div>
            <Lottie animationData={registerAnimation} />
        </div>
    )
}