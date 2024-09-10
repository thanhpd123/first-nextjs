'use client'

import Container from 'react-bootstrap/Container';
import Link from 'next/link'
import x from '@/styles/app.module.css'
import y from '@/styles/testappcss.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AppTable from './components/app.table';
//import { useEffect } from 'react';
import useSWR from "swr";

export default function Home() {

	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const { data, error, isLoading } = useSWR(
		"http://localhost:8000/blogs",
		fetcher
	);

	if (!data) {
		return <div>loading...</div>
	}

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
			<AppTable
				blogs={data?.sort((a: any, b: any) => b.id - a.id)}
			/>
		</Container>
	)
}
