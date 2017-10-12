package thi.common;

import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class DbConnection {
	static SessionFactory sessionFactory = null;

	public static SessionFactory buildSessionFactory() {
		try {
			return new Configuration().configure("hibernate.cfg.xml").buildSessionFactory();
		} catch (Exception e) {
			System.out.println("exception " + e);
		}
		return null;
	}

	public static SessionFactory getSessionFactory() {
		sessionFactory = buildSessionFactory();
		return sessionFactory;
	}
}
