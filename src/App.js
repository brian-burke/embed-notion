import logo from "./logo.svg";
import Table from "react-bootstrap/Table";

function App() {
  const [state, setState] = useState({
    togglePaused: false,
    togglinge1: false,
    togglinge2: false,
    connected: false,
    e2: false,
    e1: false,
    ip: "",
    e2Value: false,
  });

  const price = 36

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default App;
