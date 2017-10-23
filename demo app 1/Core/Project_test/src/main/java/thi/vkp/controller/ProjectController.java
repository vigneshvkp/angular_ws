package thi.vkp.controller;

import java.util.ArrayList;
import java.util.Hashtable;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import thi.vkp.model.Project;
import thi.vkp.model.User;
import thi.vkp.repository.ProjectDao;
import thi.vkp.repository.UserDao;

@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectDao projectDao;
	@Autowired
	private UserDao userdao;

	/* just print yhe map in ui
	@Autowired
	ProjectService project;
	
	@RequestMapping("/all")
	public Hashtable<String, Project> getAll(){
		return project.getAll();
	}
	
	@RequestMapping("{id}")
	public Project getProject(@PathVariable("id") String id) {
		return project.getProject(id);
	}
	*/

	// public String insert(HttpServletRequest request,Model model) - for jsp mvc like patterns remove consumes below
	@CrossOrigin
	@PostMapping(value = "/insert", consumes = MediaType.APPLICATION_JSON_VALUE)
	public Project insert(@RequestBody Project project) {
		System.out.println("insert func called");
		projectDao.save(new Project(project.getProjectId(),project.getProjectName(),project.getCreatedBy(),project.getCustId(),project.getDeptId()));
		System.out.println("after save");
		return project;
	}
	
	
	@GetMapping(value="/listusers",  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<User> getAll() {
		List<User> list = new ArrayList<>();
		Iterable<User> customers = userdao.findAll();
		customers.forEach(list::add);
		return list;
	}
	
	@CrossOrigin
	@GetMapping(value="/listprojects",  produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Project> getAllProjects() {
		List<Project> list = new ArrayList<>();
		Iterable<Project> projects = projectDao.findAll();
		projects.forEach(list::add);
		return list;
	}
	
}
