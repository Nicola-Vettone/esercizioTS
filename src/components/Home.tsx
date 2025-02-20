import { useEffect, useState } from "react";
import { IArticle } from "../interface/FetchInterface";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

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
                  <Button onClick={() => console.log(a.id)} variant="primary">
                    Vai all'articolo
                  </Button>
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
