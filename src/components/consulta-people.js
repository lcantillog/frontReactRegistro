import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function ConsultaPeople() {
  return (

    <Form inline className='mt-3'>
      <Row>
        <Col xs="auto">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Documento</InputGroup.Text>
            <Form.Control
              placeholder="Documento"
              aria-label="Documento"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
            <Form.Control
              placeholder="Nombre"
              aria-label="Nombre"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Button type="submit">Consultar</Button>
        </Col>
      </Row>

      <Table striped bordered hover className='mt-3'>
        <thead>
          <tr>
            <th>#</th>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Apellido</th>
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
        </tbody>
      </Table>
    </Form>
  );
}

export default ConsultaPeople;