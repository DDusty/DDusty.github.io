import { useState } from "react";
import { createNewJob, logout } from "../../firebase";

const Admin = (): JSX.Element => {    
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [link, setLink] = useState("");

    const handleCreate = () => {
        let descriptionList = description.split(',')
        let tagList = tags.split(',')

        createNewJob(title, descriptionList, tagList, link)
    }
    
    return (
      <div style={{width: '100%', height: '100vh', backgroundColor: 'white'}}>
          <button className="dashboard__btn" onClick={logout}>
            Logout
         </button>
        <div>
            <input
                type="text"
                className="login__textBox"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Job title"
            />
            <input
                type="text"
                className="login__textBox"
                onChange={(e) => setDescription(e.target.value)}
                placeholder="add description"
            />
            <input
                type="text"
                className="login__textBox"
                onChange={(e) => setTags(e.target.value)}
                placeholder="add tag"
            />
            <input
                type="text"
                className="login__textBox"
                onChange={(e) => setLink(e.target.value)}
                placeholder="Job link"
            />
            <button
                className="login__btn"
                onClick={handleCreate}
            >
                Create
            </button>
        </div>
      </div>
    );
  };
  
  export default Admin;
  