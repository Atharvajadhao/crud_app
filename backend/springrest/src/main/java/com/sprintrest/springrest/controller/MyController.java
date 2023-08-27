package com.sprintrest.springrest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sprintrest.springrest.entities.Course;
import com.sprintrest.springrest.services.CourseService;

@RestController
public class MyController {
	
	@Autowired
	private CourseService courseService;
	
	//get the courses
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/courses/getAllCourses")
	public List<Course> getCourses(){
		return this.courseService.getCourses();
	}
	
	//get course by id
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/courses/getCourse/{courseId}")
	public Course getCourse(@PathVariable String courseId) {
		return this.courseService.getCourse(Long.parseLong(courseId));
	}
	
	//post a course	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping(path="/courses/addCourse")
	public Course addCourse(@RequestBody Course course) {
		return this.courseService.addCourse(course);
	}
	
	//updateCourse
	@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/courses/updateCourse")
	public Course updateCourse(@RequestBody Course course) {
		return this.courseService.updateCourse(course);
	}
	
	//delete course
	@CrossOrigin(origins = "http://localhost:3000")
	@DeleteMapping(path="/courses/deleteCourse/{courseId}" )
	public String deleteCourse(@PathVariable String courseId) {
		return this.courseService.deleteCourse(Long.parseLong(courseId));
	}
	
}
