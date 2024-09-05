'use client'

import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';

interface IProps {
    blogs: IBlog[]
}

const AppTable = (props: IProps) => {
    const { blogs } = props;
    console.log(">>> check blogs", props)
    return (
        <Table bordered hover size='sm'>
            <thead>
                <tr>
                    <td>No</td>
                    <td>Title</td>
                    <td>Author</td>
                    <td>Content</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {blogs?.map(blog => {
                    return (
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            <td>{blog.content}</td>
                            <td>
                                <Button>View</Button>
                                <Button variant='success'>Edit</Button>
                                <Button variant='danger'>Delete</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table >
    );
}

export default AppTable;