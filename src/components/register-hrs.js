import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

function RegisterHrs() {
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        function simulateNetworkRequest() {
            return new Promise((resolve) => setTimeout(resolve, 2000));
        }

        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    return (
        <Form className='mt-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nombre del proyecto</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group> 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Cantidad de horas</Form.Label>
                <Form.Control type="text" placeholder="name@example.com" />
            </Form.Group> 
            <Button
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}>
                {isLoading ? 'Loading…' : 'Guardar'}
            </Button>
        </Form>
    );
}

export default RegisterHrs;