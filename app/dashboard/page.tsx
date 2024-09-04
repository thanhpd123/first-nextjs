'use client'
import * as React from 'react';
import { useRouter } from 'next/navigation';
export interface PageProps {
}

export default function Page(props: PageProps) {
    const router = useRouter()
    const handleButton = () => {
        alert("me")
    }
    return (
        <div>
            dash board!
            <div>
                <button onClick={() => handleButton()}>OK</button>
            </div>
        </div>
    );
}
