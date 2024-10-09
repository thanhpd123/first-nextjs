'use client'

import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import useSWR, { Fetcher } from 'swr'
const ViewDetailBlog = ({ params }: { params: { id: string } }) => {

    const fetcher: Fetcher<IBlog, string> = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        `http://localhost:8000/blogs/${params.id}`,
        fetcher
    );

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <Container>
            <Link href={"/blogs"}>Back</Link>
            <Card className="text-center">
                <Card.Header>No: {data?.id}</Card.Header>
                <Card.Body>
                    <Card.Title>Title: {data?.title}</Card.Title>
                    <Card.Text>
                        Content: {data?.content}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">Author: {data?.author}</Card.Footer>
            </Card>
        </Container>
    )
}

export default ViewDetailBlog