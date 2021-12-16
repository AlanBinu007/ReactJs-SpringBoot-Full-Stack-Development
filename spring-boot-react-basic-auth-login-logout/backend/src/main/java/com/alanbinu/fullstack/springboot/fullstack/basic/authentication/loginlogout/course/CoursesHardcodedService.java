package com.alanbinu.fullstack.springboot.fullstack.basic.authentication.springbootfullstackbasicauthloginlogout.course;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CoursesHardcodedService {

	private static List<Course> courses = new ArrayList<>();
	private static long idCounter = 0;

	static {
		courses.add(new Course(++idCounter, "alanbinu", "Learn Full stack with Spring Boot and Angular"));
		courses.add(new Course(++idCounter, "alanbinu", "Learn Full stack with Spring Boot and React"));
		courses.add(new Course(++idCounter, "alanbinu", "Master Microservices with Spring Boot and Spring Cloud"));
		courses.add(new Course(++idCounter, "alanbinu",
				"Deploy Spring Boot Microservices to Cloud with Docker and Kubernetes"));
	}

	public List<Course> findAll() {
		return courses;
	}
}