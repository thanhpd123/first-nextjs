'use client'

import { useRouter } from "next/navigation"

const Tiktok = () => {
    const router = useRouter()
    const handleButton = () => {
        router.push('/')
    }
    return (
        <div>
            Tik Tok Page
            <div>
                <button onClick={() => handleButton()}>Back</button>
            </div>
        </div>
    )
}

export default Tiktok