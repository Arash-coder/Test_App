import axios from "axios";
import { useState, useEffect } from "react";
import { Users } from "../../Api/api";
import UserCard from "../user/index";
import { useHistory } from "react-router-dom";
const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errMassage, setErrMassage] = useState("Loading...");
  const history = useHistory();
  const ErrorMassage = () => {
    return <div>{errMassage}</div>;
  };
  useEffect(() => {
    axios
      .get(Users)
      .then((info) => {
        setData(info.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
        setErrMassage("Error, please reload the page :)");
      });
  }, []);
  let GetAllUsers = data.map((i) => i.userId);
  let unique = [...new Set(GetAllUsers)];
  return (
    <div className="container mx-auto bg-gray-400 text-center py-4">
      <h1 className="text-4xl py-6">Tap to See each user's Post :)</h1>
      {loading
        ? ErrorMassage()
        : unique.map((i) => (
            <UserCard
              key={i}
              num={i}
              onclick={() => history.push(`user/${i}`)}
            />
          ))}
    </div>
  );
};

export default Index;
