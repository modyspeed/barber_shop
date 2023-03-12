import { Row, Col, Container } from "react-bootstrap";
import "./BookAseat.css";

const BookAseat = () => {
  return (
    <div className="bookAseat">
      <div className="form ">
        <Container>
          <div className="formTitle text-center">
            <h1>Book a seat</h1>
            <p>Please fill out the form and we get back to you</p>
          </div>
      
        <Row
          className="justify-content-between align-items-center text-center "
          md={2}
          sm={1}
        >
          <Col>
            <input type="text" placeholder="Full name" className="p-2 form-control" />
          </Col>
          <Col>
            <input type="tel" placeholder="mobile" className="p-2 form-control" />
          </Col>
          <Col>
            <input type="time" className="p-2 form-control" />
          </Col>
          <Col>
            <select class="form-control form-control-lg">
              <option>select branches</option>
              <option>Alexandria</option>
              <option>Cairo</option>
              <option>Giza</option>
            </select>
          </Col>
          <Col>
            <input type="date" className="p-2 form-control" />
          </Col>
          <Col>
            <input
              type="number"
              placeholder="Number of people"
              className="p-2 form-control"
            />
          </Col>
        <textarea className=" form-control" placeholder="Comment (Optionals)"/>
        <button type="submit" class="btn btn-danger my-3 mx-auto rounded-5">Submit</button>
        </Row>
        </Container>
      </div>
    </div>
  );
};

export default BookAseat;
