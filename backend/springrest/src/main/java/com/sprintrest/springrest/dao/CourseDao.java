package com.sprintrest.springrest.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sprintrest.springrest.entities.Course;

public interface CourseDao extends JpaRepository<Course, Long> {
	
}
