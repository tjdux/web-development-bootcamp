import { useEffect, useState } from "react";
import axios from "axios";

interface UserResponse {
  message: string;
}

function About() {
  const [data, setData] = useState<UserResponse | null>(null);

  useEffect(() => {
    const postUser = async () => {
      try {
        const response = await axios.post<UserResponse>(
          "http://localhost:4000/users",
          {
            name: "Alice",
          }
        );
        console.log(response.data);
        setData(response.data);
      } catch (e) {
        console.log(e);
        throw new Error();
      }
    };

    postUser();
  }, []);

  return (
    <>
      <div>About</div>
      <p>{data?.message}</p>
    </>
  );
}

export default About;
