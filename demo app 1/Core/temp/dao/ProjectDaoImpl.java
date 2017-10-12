package thi.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import thi.common.DbConnection;
import thi.model.Project;

public class ProjectDaoImpl implements ProjectDao {

	SessionFactory sessionFactory=DbConnection.getSessionFactory();
	Session session=null;
	Transaction tx=null;
	@Override
	public Project getProject(String id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Project> getAllProject() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void insertProject(Project project) {
		session=sessionFactory.openSession();
		tx=session.beginTransaction();
		session.save(project);
		tx.commit();
		session.close();
		
	}

	@Override
	public void deleteProject(Project project) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void updateProject(Project project) {
		// TODO Auto-generated method stub
		
	}

}
