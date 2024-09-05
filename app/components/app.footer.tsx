'use client'

import Container from 'react-bootstrap/Container';

const AppFooter = () => {
    return (
        <Container>
            <div style={{
                backgroundColor: 'ButtonHighlight',
                padding: '10px 0',
                textAlign: 'center',
                color: 'orangered'
            }}>Footer with nextjs by Thanh</div>
        </Container>
    );
}

export default AppFooter;