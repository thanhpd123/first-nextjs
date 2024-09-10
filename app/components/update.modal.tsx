'use client'

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { mutate } from "swr";

interface IProps {
    showModalUpdate: boolean
    setShowModalUpdate: (value: boolean) => void
    blog: IBlog | null
    setBlog: (value: IBlog | null) => void
}

function UpdateModal(props: IProps) {
    const { showModalUpdate, setShowModalUpdate, blog, setBlog } = props

    const [id, setId] = useState<number>(0)
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

    useEffect(() => {
        if (blog && blog.id) {
            setId(blog.id)
            setTitle(blog.title)
            setAuthor(blog.author)
            setContent(blog.content)
        }
    }, [blog])

    const handleSubmit = () => {
        if (!title) {
            toast.error("not empty!...")
            return
        }
        if (!author) {
            toast.error("not empty!...")
            return
        }
        if (!content) {
            toast.error("not empty!...")
            return
        }
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content })
        }).then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("Update Blog success!!>>>")
                    handleClose()
                    mutate("http://localhost:8000/blogs")
                }
            });
    }

    const handleClose = () => {
        setTitle("")
        setAuthor("")
        setContent("")
        setBlog(null)
        setShowModalUpdate(false)
    }
    return (
        <>
            <Container>
                <Modal
                    show={showModalUpdate}
                    onHide={() => { handleClose() }}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Update Blog</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Author</Form.Label>
                                <Form.Control type="text" placeholder="author"
                                    value={author}
                                    onChange={(e) => { setAuthor(e.target.value) }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Content</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="content"
                                    value={content}
                                    onChange={(e) => { setContent(e.target.value) }}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => { handleClose() }}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => handleSubmit()}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    );
}

export default UpdateModal;