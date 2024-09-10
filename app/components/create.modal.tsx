'use client'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { mutate } from "swr";

interface IProps {
    showModalCreate: boolean
    setShowModalCreate: (v: boolean) => void;
}

function CreateModal(props: IProps) {
    const { showModalCreate, setShowModalCreate } = props;

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [content, setContent] = useState<string>("")

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
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, author, content })
        }).then(res => res.json())
            .then(res => {
                if (res) {
                    toast.success("Create success!!>>>")
                    handleClose()
                    mutate("http://localhost:8000/blogs")
                }
            });

    }

    const handleClose = () => {
        setTitle("")
        setAuthor("")
        setContent("")
        setShowModalCreate(false)
    }
    return (
        <>
            <Container>
                <Modal
                    show={showModalCreate}
                    onHide={() => { handleClose() }}
                    backdrop="static"
                    keyboard={false}
                    size='lg'
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Blog</Modal.Title>
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

export default CreateModal;