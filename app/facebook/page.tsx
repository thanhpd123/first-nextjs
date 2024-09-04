'use client'

import { useRouter } from "next/navigation"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const FaceBook = () => {

    const router = useRouter()

    const handleButton = () => {
        router.push('/')
    }
    return (
        <div>Face Book Page
            <div>
                <Button variant='primary'>Primary</Button>
                <Button variant='success'>Success</Button>
                <Button variant='danger'>Danger</Button>
                <button onClick={() => handleButton()}>Back</button>
            </div>
        </div>
    )
}

export default FaceBook