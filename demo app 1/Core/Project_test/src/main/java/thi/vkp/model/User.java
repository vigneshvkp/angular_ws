package thi.vkp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "User")
public class User {
	
	@Id
	@GeneratedValue   //hiber create value
	@NotNull
	@Column(name="id", unique=true)
	Integer id;
	
	@NotNull
	@Column(name="name")
	String name;
	
	Integer age;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	
	
	

}
