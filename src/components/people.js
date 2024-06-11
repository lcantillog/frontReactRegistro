import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function People() {

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
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Nombres" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" placeholder="Apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                <Form.Label>Tipo Documento</Form.Label>
                <Form.Select aria-label="Default select example">
                    <option>Seleccione..</option>
                    <option value="1">Cedula Ciudadania</option>
                    <option value="2">Cedula Extranjeria</option>
                    <option value="3">Nit</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                <Form.Label>Documento</Form.Label>
                <Form.Control type="text" placeholder="Documento" />
            </Form.Group>

            <Button
                variant="secondary">
                {'Cancelar'}
            </Button>

            <Button className='mx-2'
                variant="primary"
                disabled={isLoading}
                onClick={!isLoading ? handleClick : null}>
                {isLoading ? 'Loading…' : 'Guardar'}
            </Button>
        </Form>
    );
}

export default People;