'use client'

import Table from 'react-bootstrap/Table';
const AppTable = () => {
    return (
        <Table bordered hover size='sm'>
            <thead>
                <tr>
                    <td>#</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>User Name</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thorton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default AppTable;