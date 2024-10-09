'use client'

import Container from 'react-bootstrap/Container';
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/testappcss.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default function Home() {

  return (

    <Container>
      <div>
        <ul>
          <li className={x['red']}>
            <span className={y['red']}><Link href='/facebook' className={x['green']}>FaceBook</Link></span>
          </li>
          <li style={{ margin: "20px 0" }}>
            <Link href='/youtube'>Youtube</Link>
          </li>
          <li>
            <Link href='/tiktok'>Tik Tok</Link>
          </li>
          <li style={{ margin: "20px 0" }}>
            <Link href='/dashboard'>Dash Board</Link>
          </li>
        </ul>
      </div>
    </Container>

  )
}
