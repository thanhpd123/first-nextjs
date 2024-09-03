'use client'

import { useRouter } from "next/navigation"

const Youtube = () => {
    const router = useRouter()
    const handleButton = () => {
        router.push('/')
    }
    return (
        <div>
            Youtube Page
            <div>
                <button onClick={() => handleButton()}>Back</button>
            </div>
        </div>
    )
}

export default Youtube