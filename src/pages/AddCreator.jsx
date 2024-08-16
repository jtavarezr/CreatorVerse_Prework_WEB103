import React, { useState } from "react";
import { supabase } from "../client";
import { useNavigate, Link } from "react-router-dom";

function AddCreator() {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [social1, setSocial1] = useState(""); // YouTube
  const [social2, setSocial2] = useState(""); // Twitter (X)
  const [social3, setSocial3] = useState(""); // Instagram
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("creators")
      .insert([
        { name, url, description, imageURL, social1, social2, social3 },
      ]);

    if (error) {
      console.error("Error inserting data:", error);
      return;
    }

    navigate("/");
  };

  return (
    <>
      <header className="show-creators-header">
        <h1>Add Content Creator</h1>

        <nav>
          <ul>
            <li>
              <Link to="/" role="button" className="add-creators-link">
                View All Creators
              </Link>
            </li>
            <li>
              <Link to="/add" role="button" className="add-creators-link">
                Add Creator
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <form onSubmit={handleSubmit}>
        <h1>Add Creator</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL"
          required
        />

        <textarea
          name="bio"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          aria-label="Professional short bio"
        ></textarea>

        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Image URL"
        />
        <input
          type="text"
          value={social1}
          onChange={(e) => setSocial1(e.target.value)}
          placeholder="YouTube"
          required
        />
        <input
          type="text"
          value={social2}
          onChange={(e) => setSocial2(e.target.value)}
          placeholder="X (Twitter)"
          required
        />
        <input
          type="text"
          value={social3}
          onChange={(e) => setSocial3(e.target.value)}
          placeholder="Instagram"
          required
        />
        
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default AddCreator;
