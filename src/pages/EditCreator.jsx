import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";

function EditCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
    social1: "", // YouTube
    social2: "", // Twitter (X)
    social3: "", // Instagram
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    setCreator({ ...creator, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from("creators").update(creator).eq("id", id);
    navigate(`/creator/${id}`);
  };

  const handleDelete = async () => {
    await supabase.from("creators").delete().eq("id", id);
    navigate("/");
  };

  return (
    <>
      <header className="show-creators-header">
        <h1>Edit Content Creator</h1>

        <nav>
          <ul>
            <li>
              <Link to="/" role="button" className="add-creators-link">
                View All Creators
              </Link>
            </li>
            <li>
              <Link to="/add" role="button" className="add-creators-link">
                Add Creators
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <form onSubmit={handleSubmit} className="edit-creator-form">
        <h1>Edit Creator</h1>
        <input
          type="text"
          name="name"
          value={creator.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="url"
          value={creator.url}
          onChange={handleChange}
          placeholder="URL"
          required
        />
        <textarea
          type="text"
          name="description"
          value={creator.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="imageURL"
          value={creator.imageURL}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="text"
          name="social1"
          value={creator.social1}
          onChange={handleChange}
          placeholder="YouTube"
          required
        />
        <input
          type="text"
          name="social2"
          value={creator.social2}
          onChange={handleChange}
          placeholder="X (Twitter)"
          required
        />
        <input
          type="text"
          name="social3"
          value={creator.social3}
          onChange={handleChange}
          placeholder="Instagram"
          required
        />
        <button type="submit" className="update-button">
          Update
        </button>
        <button onClick={handleDelete} type="button" className="delete-button">
          Delete
        </button>
      </form>
    </>
  );
}

export default EditCreator;
