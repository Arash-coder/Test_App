import { useParams } from "react-router-dom";
import { UserPostDetails, Users } from "../../Api/api";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Index = () => {
  const [err1, setErr1] = useState(false);
  const [err2, setErr2] = useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const param = useParams();
  let GetPostId = param.id;
  useEffect(() => {
    axios
      .get(UserPostDetails(GetPostId))
      .then((info) => {
        setBody(info.data.body);
        setTitle(info.data.body);
      })
      .catch((err) => console.log(err));
  }, []);

  const [massage, setMassage] = useState("");

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (!err1 && !err2) {
      axios.post(Users, { title, body }).then((res) => {
        if (res.status === 201 || res.status === 200) {
          setMassage("Post updated succesfully");
        }
      });
    } else {
      setMassage("please check the errors");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-8 text-4xl">Post : {Number(GetPostId)}</div>
      <div className="w-full">
        <form>
          <div className="flex flex-col items-center justify-center">
            <h1 className="my-4 text-4xl text-red-600">Title</h1>
            <div className="border border-gray-300 rounded-lg w-6/12 px-4 py-2">
              <input
                className="w-full focus:outline-none"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  if (e.target.value.length === 0) {
                    setErr1(true);
                  } else {
                    setErr1(false);
                  }
                }}
              />
            </div>
            {err1 && <span>This field is required</span>}
          </div>
          <div className="flex flex-col items-center justify-center ">
            <h1 className="my-4 text-4xl text-red-600">Body</h1>
            <div className="border border-gray-300 rounded-lg w-6/12 px-4 py-2">
              <textarea
                className="w-full focus:outline-none h-52"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                  if (e.target.value.length === 0) {
                    setErr2(true);
                  } else {
                    setErr2(false);
                  }
                }}
              />
            </div>
            {err2 && <span>This field is required</span>}
          </div>
          <div className="flex justify-center my-4 text-2xl flex-col items-center">
            <button
              onClick={SubmitHandler}
              className="bg-red-600 text-white px-2 py-1 rounded-2xl transition-all hover:bg-gray-300 hover:text-black"
            >
              Save
            </button>

            <div className="my-3">{massage}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Index;
