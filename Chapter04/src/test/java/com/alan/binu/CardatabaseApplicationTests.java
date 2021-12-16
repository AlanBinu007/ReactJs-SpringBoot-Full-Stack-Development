package com.packt.cardatabase;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.packt.cardatabase.web.CarController;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CardatabaseApplicationTests {
	@Autowired
	private CarController controller;

	@Test
	public void contextLoads() {
		assertThat(controller).isNotNull();
	}

}
