import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; 
import Side from "./Side";
import Main from "./Main";
import Navi from "./Navi";

function App() {
  return (
    <section>
    <Container fluid className='Base'>
      <Row>
        <Col>
          <Side />
        </Col>
        <Col xs={10} className="Side">
          <Row>
            <Col xs={12}>
              <Navi className="Navi" />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Main className="Main" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </section>
  );
}



export default App;
