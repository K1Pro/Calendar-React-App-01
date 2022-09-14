import { useState } from "react";
import axios from "axios";

// fetch axios
const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    axios
      .get(`http://192.168.64.9:8000/api/users`)
      // .then((data) => setUsers(data.data.users)) before destructuring
      .then(({ data }) => setUsers(data.users))
      .catch((err) => console.log(err));

    // using fetch instead of axios
    // fetch(`http://192.168.64.9:8000/api/users`, {
    //   method: "Get",
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => setUsers(data.users))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      {/* <pre>{JSON.stringify(users, null, 4)}</pre> */}

      {users &&
        users.map((user) => (
          <div className="alert alert-primary" key={user.age}>
            {user.name} age is {user.age} years old
          </div>
        ))}

      <button onClick={fetchUserData} className="btn btn-primary">
        Fetch user data
      </button>
    </div>
  );
};

export default App;

// function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log("STATE => ", email, password);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("State => ", email, password);
//   };

//   return (
//     <div className="container">
//       <h1 className="display-4 text-center">Learning React</h1>
//       <br />

//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Email address</label>
//               <input
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 type="email"
//                 className="form-control"
//               />
//               <div className="form-text">
//                 We'll never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Password</label>
//               <input
//                 value={password}
//                 onChange={(event) => setPassword(event.target.value)}
//                 type="password"
//                 className="form-control"
//               />
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
