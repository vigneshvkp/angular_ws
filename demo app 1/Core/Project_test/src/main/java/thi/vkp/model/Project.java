package thi.vkp.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "Project")
public class Project {

	@Id
	@GeneratedValue   //hiber create value
	@NotNull
	@Column(name="project_id", unique=true)
	Integer projectId;
	String projectName;
	String createdBy;
	String custId;
	String DeptId;
	

	public Integer getProjectId() {
		return projectId;
	}
	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getCreatedBy() {
		return createdBy;
	}
	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}
	
	@NotNull
	@Column(name="CustomerId")
	public String getCustId() {
		return custId;
	}
	public void setCustId(String custId) {
		this.custId = custId;
	}
	public String getDeptId() {
		return DeptId;
	}
	public void setDeptId(String deptId) {
		DeptId = deptId;
	}
	public Project(Integer projectId, String projectName, String createdBy, String custId, String deptId) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.createdBy = createdBy;
		this.custId = custId;
		DeptId = deptId;
	}
	public Project() {
		super();
	}
	
	
	
	
}
