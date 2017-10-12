package com.javasampleapproach.jpamysqlangular4.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.javasampleapproach.jpamysqlangular4.model.Customer;
import com.javasampleapproach.jpamysqlangular4.repo.CustomerRepository;

@RestController
@RequestMapping(value="/cus")
public class CustomerController {

	@Autowired
	CustomerRepository repository;

	@GetMapping(value="/customer",  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> getAll() {
		System.out.println("get all called");
		List<Customer> list = new ArrayList<>();
		Iterable<Customer> customers = repository.findAll();

		customers.forEach(list::add);
		System.out.println(list);
		return list;
	}
	
//	@PostMapping(value="/postcustomer",consumes =MediaType.APPLICATION_JSON_VALUE)
	
	@RequestMapping(value="/postcustomer" , method=RequestMethod.POST, consumes =MediaType.APPLICATION_JSON_VALUE)
//	@CrossOrigin
//	@PostMapping(value = "/postcustomer",consumes = MediaType.APPLICATION_JSON_VALUE)
	public Customer postCustomer(@RequestBody Customer customer) {
		System.out.println("inside pos coustomer");
		repository.save(new Customer(customer.getFirstName(), customer.getLastName()));
		return customer;
	}

	@GetMapping(value="/findbylastname/{lastName}",  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> findByLastName(@PathVariable String lastName) {

		List<Customer> customers = repository.findByLastName(lastName);
		return customers;
	}
	
	@DeleteMapping(value="/customer/{id}")
	public void deleteCustomer(@PathVariable long id){
		
		repository.delete(id);
	}
}
