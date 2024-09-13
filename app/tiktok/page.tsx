'use client'

import { useRouter } from "next/navigation"
import { Table } from "react-bootstrap"

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
            <Table bordered hover size="sm">
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Tiktok