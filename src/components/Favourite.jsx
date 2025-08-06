import { Button, Col, Container, Row } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Favourite = () => {
  const favourites = useSelector((state) => {
    console.log(state);
    return state.favourites.content;
  });
  const dispatch = useDispatch();
  console.log(favourites);
  return (
    <>
      <h1 className=" text-center my-5">LE MIE AZIENDE PREFERITE!</h1>
      <Container>
        <Row>
          <Col sm={12}>
            <ul>
              {favourites.map((favourite, i) => {
                return (
                  <li key={i}>
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_FAVOURITE",
                          payload: favourite._id,
                        });
                      }}
                    >
                      <FaTrash />
                    </Button>
                    <h5>{favourite.title}</h5>
                    <h6>{favourite.company_name}</h6>
                  </li>
                );
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Favourite;
