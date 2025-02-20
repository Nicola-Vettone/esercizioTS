import { useEffect, useState } from "react";
import { IArticle } from "../interfaces/FetchInterface";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [article, setArticle] = useState<IArticle>();

  const fetchArticle = async () => {
    const resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
    if (resp.ok) {
      const data: IArticle = await resp.json();
      setArticle(data);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  console.log(article);

  return (
    <>
      <Container>
        <Row>
          {article?.results.map((a) => (
            <Col key={a.id} md={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={a.image_url} />
                <Card.Body>
                  <Card.Title>{a.title}</Card.Title>
                  <Card.Text>{a.summary}</Card.Text>
                  <Link to={`/article/${a.id}`}>Vai all'articolo</Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Home;
