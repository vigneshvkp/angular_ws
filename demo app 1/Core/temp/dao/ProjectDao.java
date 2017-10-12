package thi.dao;

import java.util.List;

import thi.model.Project;

public interface ProjectDao {

	public Project getProject(String id);
	public List<Project> getAllProject();
	public void insertProject(Project project);
	public void deleteProject(Project project);
	public void updateProject(Project project);
}
