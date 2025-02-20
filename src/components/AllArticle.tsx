import { useEffect, useState } from "react";
import { IDati } from "../interface/FetchInterface";
import { Link, useParams } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

function AllArticle() {
  const { id } = useParams();

  const [article, setArticle] = useState<IDati>();

  const fetchArticle = async () => {
    const resp = await fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`);
    if (resp.ok) {
      const data: IDati = await resp.json();
      setArticle(data);
    }
  };

  useEffect(() => {
    fetchArticle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(article?.url);
  return (
    <>
      <Container>
        <Row>
          <Col key={article?.id} md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={article?.image_url} />
              <Card.Body>
                <Card.Title>{article?.title}</Card.Title>
                <Card.Text>{article?.summary}</Card.Text>
                <a href={`${article?.url}`}>Vai al sito</a>

                <Link className="d-block" to={`/`}>
                  Home
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AllArticle;
