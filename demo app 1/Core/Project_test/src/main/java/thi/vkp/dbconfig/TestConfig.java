package thi.vkp.dbconfig;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("basic")
public class TestConfig {

	private int age;
	private String name;
	//@Value("${job}")
	private String job;
	
	public void printall() {
		System.out.println("age ="+age);
		System.out.println("name ="+name);
		System.out.println("job ="+job);
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}
	
	
}
