import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

function ConsultaHrs() {
  return (

    <Form inline className='mt-3'>
      <Row>
        <Col xs="auto">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Proyecto</InputGroup.Text>
            <Form.Control
              placeholder="Proyecto"
              aria-label="Proyecto"
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
            <th>Proyecto</th>
            <th># Horas</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>2323</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>344</td>
            <td>@fat</td>
          </tr> 
        </tbody>
      </Table>
    </Form>
  );
}

export default ConsultaHrs;