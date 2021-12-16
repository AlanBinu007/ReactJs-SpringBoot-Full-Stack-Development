package com.packt.cardatabase.domain;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CarRepository extends CrudRepository <Car, Long> {
	// Fetch cars by brand and sort by year
	List<Car> findByBrandOrderByYearAsc(String brand);
}
