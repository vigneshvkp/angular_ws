package thi.vkp.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import thi.vkp.model.User;
@Transactional
@Repository
public interface UserDao extends CrudRepository<User, Integer> {

	public User findById(Integer id);
	public List<User> findAll();
}
