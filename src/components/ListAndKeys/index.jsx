function ListAndKeys() {
  const userCredentials = [
    {
      username: "john_doe",
      password: "password123",
      email: "john.doe@example.com",
      role: "admin",
      isActive: true,
    },
    {
      username: "jane_smith",
      password: "securePass456",
      email: "jane.smith@example.com",
      role: "user",
      isActive: true,
    },
    {
      username: "robert_brown",
      password: "pass789secure",
      email: "robert.brown@example.com",
      role: "editor",
      isActive: false,
    },
    {
      username: "linda_jones",
      password: "mypassword321",
      email: "linda.jones@example.com",
      role: "user",
      isActive: true,
    },
    {
      username: "alice_cooper",
      password: "alicePass007",
      email: "alice.cooper@example.com",
      role: "moderator",
      isActive: false,
    },
  ];
  const tableStyle = {
    borderCollapse: "collapse",
    width: "100%",
    margin: "20px 0",
    fontSize: "16px",
    textAlign: "left",
    border: "2px solid #ddd",
    boxShadow: "1px 1px 21px 2px white",
  };

  const thStyle = {
    padding: "12px",
    borderBottom: "2px solid #ddd",
    borderTop: "2px solid #ddd",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Username</th>
          <th style={thStyle}>Password</th>
          <th style={thStyle}>Email</th>
          <th style={thStyle}>Role</th>
          <th style={thStyle}>Is Active</th>
        </tr>
      </thead>
      <tbody>
        {userCredentials.map(
          ({ username, password, email, role, isActive }, index) => (
            <tr key={index}>
              <td style={tdStyle}>{username}</td>
              <td style={tdStyle}>{password}</td>
              <td style={tdStyle}>{email}</td>
              <td style={tdStyle}>{role}</td>
              <td style={tdStyle}>{isActive ? "Yes" : "No"}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default ListAndKeys;
