package thi.vkp.controller;

import java.util.Hashtable;

import javax.servlet.http.HttpServletRequest;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import thi.vkp.dao.ProjectDao;
import thi.vkp.model.Project;
import thi.vkp.service.ProjectService;

@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectDao projectDao;

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
	@RequestMapping(value="/insert", method= RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	
	public String insert(Project project) {
		System.out.println("insert func called");
//		String projectName,createdBy,custId,deptId;
//		Integer id;
//		id=Integer.parseInt(request.getParameter("id"));
//		projectName=request.getParameter("projectName");
//		createdBy=request.getParameter("createdBy");
//		custId=request.getParameter("custId");
//		deptId=request.getParameter("deptId");
//		Project project=new Project(id,projectName,createdBy,custId,deptId); 	
		projectDao.save(project);
		return null;
		
	}
	
	
}
