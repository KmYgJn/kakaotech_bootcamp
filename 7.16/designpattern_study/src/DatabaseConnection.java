import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {
    // 싱글톤 인스턴스
    private static DatabaseConnection instance = null;

    // 데이터베이스 연결 정보
    private static final String URL = "jdbc:mysql://localhost:3306/design";
    private static final String USER = "root";
    private static final String PASSWORD = "root0000";

    // JDBC 드라이버 로드
    static {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    // Connection 객체
    private Connection connection;

    // private 생성자: 외부에서 인스턴스 생성 방지
    private DatabaseConnection() {
        try {
            // 데이터베이스 연결
            connection = DriverManager.getConnection(URL, USER, PASSWORD);
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    // 싱글톤 인스턴스 반환 메서드
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }

    // 데이터베이스 연결 객체 반환
    public Connection getConnection() {
        return connection;
    }

    // 데이터베이스 연결 해제 메서드
    public void close() {
        try {
            if (connection != null) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}

