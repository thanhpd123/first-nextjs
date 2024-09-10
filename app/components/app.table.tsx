'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import CreateModal from './create.modal';
import { useState } from 'react';
import UpdateModal from './update.modal';
interface IProps {
    blogs: IBlog[]
}

const AppTable = (props: IProps) => {
    const { blogs } = props;

    const [blog, setBlog] = useState<IBlog | null>(null)
    const [showModalUpdate, setShowModalUpdate] = useState<boolean>(false)
    const [showModalCreate, setShowModalCreate] = useState<boolean>(false)
    return (
        <>
            <div className='mb-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Table Blog</h3>
                <Button variant='secondary' onClick={() => setShowModalCreate(true)}>Add New</Button>
            </div>
            <Table bordered hover size='sm'>
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map(item => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.author}</td>
                                <td>
                                    <Button>View</Button>
                                    <Button variant='success' className='mx-3'
                                        onClick={() => {
                                            setBlog(item);
                                            setShowModalUpdate(true);
                                        }}
                                    >Edit</Button>
                                    <Button variant='danger'>Delete</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <CreateModal
                showModalCreate={showModalCreate}
                setShowModalCreate={setShowModalCreate}
            />
            <UpdateModal
                showModalUpdate={showModalUpdate}
                setShowModalUpdate={setShowModalUpdate}
                blog={blog}
                setBlog={setBlog}
            />

        </>
    );
}

export default AppTable;