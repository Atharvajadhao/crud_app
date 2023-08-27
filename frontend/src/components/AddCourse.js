import React, { useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from 'axios';
import base_url from "../api/bootApi";
import { toast } from "react-toastify";

const AddCourse = () => {

    useEffect(() => {
        document.title = "Course App || Add Courses"
    }, []);

    const [course, setCourse] = useState({});

    //form handler function
    const handleForm = (e) => {
        console.log(course);
        addCourse(course);
        e.preventDefault();
    }

    //function to post data using API
    const addCourse=(course)=>{
        axios.post(`${base_url}/addCourse`, course).then(
            (response)=>{
                console.log(response);
                console.log("success");
                toast.success("Course added successfully")
            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.error("Error in adding course !")
            }
        )
    }

    return (
        <div className="m-5">
            <h2 className="text-center">Course Details</h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label>Course Id</label>
                    <Input 
                        type="number" 
                        placeholder="Enter here" 
                        name="userId" 
                        id="userId"
                        onChange={(e)=>{
                            setCourse({...course, id: e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label>Course Title</label>
                    <Input 
                        type="text" 
                        placeholder="Enter title" 
                        name="titleId" 
                        id="titleId" 
                        onChange={(e)=>{
                            setCourse({...course,title: e.target.value});
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label>Course Description</label>
                    <Input 
                        type="textarea" 
                        placeholder="Enter description" 
                        name="descId" 
                        id="descId" 
                        onChange={(e)=>{
                            setCourse({...course, description: e.target.value});
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success" className="m-2">Add Course</Button>
                    <Button 
                        type="reset" 
                        color="warning" 
                        className="m-2"
                    >
                        Clear
                    </Button>
                </Container>
            </Form>
        </div>
    )
}

export default AddCourse;