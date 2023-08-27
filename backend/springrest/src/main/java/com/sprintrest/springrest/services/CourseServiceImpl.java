package com.sprintrest.springrest.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sprintrest.springrest.dao.CourseDao;
import com.sprintrest.springrest.entities.Course;

@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	private CourseDao courseDao;
//	List<Course> list;
	
	public CourseServiceImpl() {
//		list = new ArrayList<>();
//		list.add(new Course(145, "Java Core", "this course containse basics of java"));
//		list.add(new Course(201, "Python Development", "Python programming course from A to Z"));
	}

	@Override
	public List<Course> getCourses() {
//		return list;
		return courseDao.findAll();
	}
	
	@Override
	public Course getCourse(long courseId) {
//		Course c = null;
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				c = course;
//				break;
//			}
//		}
//		return c;
		
		return courseDao.getOne(courseId);
	}
	
	@Override
	public Course addCourse(Course course) {
//		list.add(course);
//		return course;
		courseDao.save(course);
		return course;
	}
	
	@Override
	public Course updateCourse(Course course) {
//		for(Course c:list) {
//			if(c.getId() == course.getId()) {
//				c.setTitle(course.getTitle());
//				c.setDescription(course.getDescription());
//				break;
//			}
//		}
//		return course;
		courseDao.save(course);
		return course;
	}
	
	@Override
	public String deleteCourse(long courseId) {
//		for(Course course:list) {
//			if(course.getId()==courseId) {
//				list.remove(course);
//				break;
//			}
//		}
		Course entity = courseDao.getOne(courseId);
		courseDao.delete(entity);
		return "Delete Successfull";
	}

}
