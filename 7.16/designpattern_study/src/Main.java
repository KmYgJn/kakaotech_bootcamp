import java.sql.*;

public class Main {
    // 데이터베이스 연결 정보
    private static final String URL = "jdbc:mysql://localhost:3306/design";
    private static final String USER = "root";
    private static final String PASSWORD = "root0000";
    private static final String TABLE = "pattern";

    public static void main(String[] args) throws ClassNotFoundException {
        Connection connection = null;
        Statement statement = null;
        ResultSet resultSet = null;
        Class.forName("com.mysql.cj.jdbc.Driver");

        try {
            // 1. 데이터베이스 연결
            connection = DriverManager.getConnection(URL, USER, PASSWORD);

            // 2. 쿼리 실행
            statement = connection.createStatement();
            String query = "SELECT * FROM " + TABLE;
            resultSet = statement.executeQuery(query);

            // 3. 결과 처리
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                System.out.println("ID: " + id + ", Name: " + name);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            // 4. 자원 해제
            try {
                if (resultSet != null) {
                    resultSet.close();
                }
                if (statement != null) {
                    statement.close();
                }
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}