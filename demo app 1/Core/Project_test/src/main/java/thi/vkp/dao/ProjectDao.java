package thi.vkp.dao;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import thi.vkp.model.Project;

@Transactional
@Repository
public interface ProjectDao extends CrudRepository<Project, Integer> {

	public Project findByProjectId(String id);
	public Project findByProjectName(String id);
	public List<Project> findAll();
//	public void insert(Project project);
//	public void delete(Project project);
//	public void update(Project project);
	
}
