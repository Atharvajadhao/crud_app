import React from "react";
import {
    Card,
     CardBody,
     CardTitle,
     CardSubtitle,
     CardText,
     CardFooter,
     Button,
     Container,
} from "reactstrap";
import base_url from "../api/bootApi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Course=( {course, update} )=>{

    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/deleteCourse/${id}`).then(
            (response)=>{
                toast.success("Course deleted successfully");
                update(id);
            },
            (erroe)=>{
                toast.error("Error, unable to delete course");
            }
        )
    }

    return(
        <Card className="text-center my-2">
            {/* <ToastContainer/> */}
            <CardBody>
                <CardSubtitle className="display-6">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button color="danger m-2" onClick={()=>{
                        deleteCourse(course.id);
                    }}>Delete</Button>
                    <Button color="warning m-2">Update</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Course;