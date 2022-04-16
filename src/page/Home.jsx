import Featured from "../component/featured";
import Topbar from "./../component/topbar";
import List from "../component/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

function Home(props) {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const result = await axios.get(
          `lists${props.type ? "?type=" + props.type : ""}${
            genre ? "&genre=" + genre : ""
          }`
        );

        setLists(result.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchLists();
  }, [genre, props.type]);

  return (
    <div className="w-full bg-net-1">
      <Topbar />
      <Featured type={props.type} setGenre={setGenre} />
      {lists.length > 0 && (
        <div className="mt-12">
          {lists.map((list) => (
            <List key={list._id} {...list} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
