import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Player } from "video-react";
import gitX from "../assets/images/gitX.png";

const MediaPlayer = () => {
  const [input, setInput] = useState(
    "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );
  const [fileUrl, setFileUrl] = useState(input);

  return (
    <Container className='py-5'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8} lg={6}>
          <h2 className='text-center mb-4'>Media Player</h2>
          <Form>
            <Form.Group controlId='inputVideoUrl'>
              <Form.Label>Video URL</Form.Label>
              <Form.Control
                type='url'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter video URL'
              />
            </Form.Group>
            <div className='d-grid gap-2 my-4'>
              <Button variant='primary' onClick={() => setFileUrl(input)}>
                Update
              </Button>
            </div>
          </Form>

          <div className='ratio ratio-16x9'>
            <Player autoPlay playsInline poster={gitX} src={fileUrl} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MediaPlayer;
