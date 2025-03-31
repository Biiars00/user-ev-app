export const createTable = `
  CREATE TABLE users (
      id BIGINT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      phone VARCHAR(50) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`
export const addUserQuery = `
  INSERT INTO users (name, email, phone)
  VALUES (?, ?, ?)
`;

export const countQuery = `SELECT COUNT(*) AS total FROM users`;

export const getUserByIdQuery = 'SELECT * FROM users WHERE id = ?';

export const updateUserQuery = `
  UPDATE users
  SET name = ?, email = ?, phone = ?
  WHERE id = ?
`;

export const deleteUserQuery = 'DELETE FROM users WHERE id = ?';