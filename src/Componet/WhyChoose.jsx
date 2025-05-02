import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  Users, 
  Clock, 
  Target, 
  Lightbulb, 
  Briefcase 
} from "lucide-react"; 

const Box = ({ content, Icon }) => {
  return (
    <Card 
      className="text-center shadow-sm"
      style={{ 
        height: '14rem', 
        width: '14rem', 
        borderRadius: '1.5rem', 
        transition: 'transform 0.5s',
        border: '2px solid #097969' 
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <Card.Body className="d-flex flex-column align-items-center justify-content-center">
        <Icon size={48} className="mb-3 text-success" />
        <Card.Text>{content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default function WhyChoose() {
  const boxContents = [
    { content: "Well Trusted Organization", Icon: ShieldCheck },
    { content: "Client First", Icon: Users },
    { content: "On Time Delivery", Icon: Clock },
    { content: "Results Focused", Icon: Target },
    { content: "Proactive Approach", Icon: Lightbulb },
    { content: "Total Ownership", Icon: Briefcase },
  ];

  return (
    <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light py-5" style={{ backgroundColor: '#ffffff' }}>
      <h1 className="display-4 mb-5">Why Choose Finytive </h1>

      <Row className="g-4 justify-content-center">
        {boxContents.map((item, index) => (
          <Col key={index} xs={12} md={3} className="d-flex justify-content-center">
            <Box content={item.content} Icon={item.Icon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}