import { useParams, useHistory } from "react-router-dom";
import { Users } from "../../Api/api";
import axios from "axios";
import { useState, useEffect } from "react";
const Index = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(Users)
      .then((info) => {
        setData(info.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const param = useParams();
  const history = useHistory();
  let GetUserId = param.id;
  let UserPosts = data.filter((i) => i.userId === Number(GetUserId));
  return (
    <div className="flex flex-col items-center justify-center py-4">
      User : {Number(GetUserId)}
      <div className="text-4xl my-4">Click each post to edit</div>
      <div>
        {UserPosts.map((i) => {
          return (
            <div
              key={i.id}
              className="bg-gray-300 my-4 w-10/12 mx-auto py-1 px-2 cursor-pointer"
              onClick={() =>
                history.push(`/user/${Number(GetUserId)}/post/${i.id}`)
              }
            >
              <div>
                <span className="text-red-600">Title : </span>
                {i.title}
              </div>
              <div>
                <span className="text-red-600">Body : </span>
                {i.body}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
