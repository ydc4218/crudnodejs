import { useEffect, useState } from 'react';
import axios from 'axios';
const Fetch = require('node-fetch');

const Init = () => {
  const [DataApi, setDataApi] = useState([]);
  const Url = 'https://jsonplaceholder.typicode.com/posts';

  const ApiFetch = async () => {
    const Response = await Fetch(Url);
    const ResponseJson = await Response.json();
    setDataApi(ResponseJson)

    axios.post('http://localhost:3000/addapi', {
      ResponseJson
    })
  .then(() => {
    console.log('Success')
    
  })

  };

  useEffect(() => {
    ApiFetch();
  }, []);

  return (
      
    <table className="table table-hover table-responsive align-middle container mt-5">
      <thead className="table-light text-center">
        <tr>
          <th scope="col">UserId</th>
          <th scope="col">Id</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        {DataApi.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.userId}</td>
              <td>{value.id}</td>
              <td>{value.title}</td>
              <td>{value.body}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Init;
