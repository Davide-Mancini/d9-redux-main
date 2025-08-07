import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Job = ({ data }) => {
  const [red, setRed] = useState("");
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <BiHeart
          style={{ color: red }}
          className="me-2"
          onClick={() => {
            setRed("red");
            dispatch({
              type: "ADD_TO_FAVOURITE",
              payload: data,
            });
          }}
        ></BiHeart>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
