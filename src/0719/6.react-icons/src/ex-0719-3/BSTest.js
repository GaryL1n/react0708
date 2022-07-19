import { Container, Row, Col, Button } from 'react-bootstrap'
import { BsCreditCard2FrontFill } from 'react-icons/bs'

function BSTest(props) {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Button variant="primary">
              <BsCreditCard2FrontFill color="#fff" /> 信用卡
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BSTest
