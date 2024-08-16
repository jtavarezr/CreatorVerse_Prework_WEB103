import React, { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";
import "../assets/ShowCreators.css"; // Importa el archivo CSS

function ShowCreators() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data } = await supabase.from("creators").select("*");
      setCreators(data);
    };
    fetchCreators();
  }, []);

  return (
    <div className="show-creators-container">
      <header className="show-creators-header">
        <h1>Content Creators</h1>

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
  
      <main className="show-creators-main">
        <section className="ShowCreators">
          <div className="creators-grid">
            {creators.length > 0 ? (
              creators.map((creator) => (
                <CreatorCard
                  key={creator.id}
                  creator={creator}
                  className="creator-card"
                />
              ))
            ) : (
              <p>No creators found.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default ShowCreators;
