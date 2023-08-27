import React, { useState, useEffect } from "react";
import Course from "./Course";
import axios from 'axios';
import {ToastContainer, toast } from "react-toastify";

import base_url from "../api/bootApi";


const AllCourses=()=>{

    useEffect(()=>{
        document.title = "Course App || All Courses"
    }, []);
    
    const [courses, setCourses]=useState([]);

    //function to call api
    const getAllCourses=()=>{
        axios.get(`${base_url}/getAllCourses`).then(
            (response)=>{
                //success
                console.log(response.data);
                toast.success("Courses has been loaded");
                setCourses(response.data);
            },
            (error)=>{
                //if error occurs
                console.log(error);
                toast.error("Something went worng!");
            }
        )
    }

    //call the loading function
    useEffect(()=>{
        getAllCourses();
    }, []);

    const updateCourse=(id)=>{
        setCourses(courses.filter((c)=>c.id!=id));
    }

    return(
        <div className="m-3">
            {/* <ToastContainer/> */}
            <h1>All Courses</h1>
            <p>List of courses are as follows</p>
            {
                courses.length>0 ?
                courses.map((item)=>(
                    <Course key={item.id} course={item} update={updateCourse}/>
                )) :
                "No Courses"
            }
        </div>
    )
}

export default AllCourses;