import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { supabase } from "../client";
import "../assets/ViewCreator.css"; // Asegúrate de importar el archivo CSS

function ViewCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  const handleDelete = async () => {
    await supabase.from("creators").delete().eq("id", id);
    navigate("/");
  };

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();
      setCreator(data);
    };
    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <>
    
      <header className="show-creators-header">
        <h1>Content Creators</h1>
        <div>
          <Link to="/" className="add-creators-link">
            View All Creators
          </Link>
          <Link to="/add" className="add-creators-link">
            Add Creator
          </Link>
        </div>
      </header>
      <div className="creator-card">
        <div className="creator-image">
          {creator.imageURL && (
            <img src={creator.imageURL} alt={creator.name} />
          )}
        </div>
        <div className="creator-details">
          <h1>{creator.name}</h1>
          <p>{creator.description}</p>
          <div className="creator-links">
            <a href={creator.social1} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i> YouTube
            </a>
            <a href={creator.social2} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href={creator.social3} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
          <div className="creator-actions">
            <button
              className="edit-btn"
              onClick={() => navigate(`/edit/${id}`)}
            >
              Edit
            </button>
            <button className="delete-btn" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCreator;
