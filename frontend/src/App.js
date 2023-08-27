import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Button, Col, Container, Row } from 'reactstrap';
import Header from './components/Header';
import AllCourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import LeftNavBar from './components/LeftNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const btnHandle = () => toast("This is a toast!");

  return (
    <div>
      <Router>
        <Container>
          <Header />
          <Row>
            <Col md={4}><LeftNavBar /></Col>

            <Col md={8}>
              <Routes>
                <Route path='/' element={<Home />} exact />
                <Route path='/add-course' element={<AddCourse />} exact />
                <Route path='/view-courses' element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
