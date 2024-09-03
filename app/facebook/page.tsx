'use client'

import { useRouter } from "next/navigation"
const FaceBook = () => {

    const router = useRouter()

    const handleButton = () => {
        router.push('/')
    }
    return (
        <div>Face Book Page
            <div>
                <button onClick={() => handleButton()}>Back</button>
            </div>
        </div>
    )
}

export default FaceBook