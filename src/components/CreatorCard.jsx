import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPen } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/ShowCreators.css"; // Asegúrate de que este archivo contenga los estilos necesarios

function CreatorCard({ creator }) {
  return (
    <div className="creator-card" style={{ width: "300px", height: "350px" }}>
      <article
        className="card-content"
        style={{
          backgroundImage: `url(${creator.imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "20px",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <h3 className="creator-name">{creator.name}</h3>
        <div className="social-icons">
          {creator.social1 && (
            <a href={creator.social1} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          )}
          {creator.social2 && (
            <a href={creator.social2} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          )}
          {creator.social3 && (
            <a href={creator.social3} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          )}
        </div>
        <p className="description">{creator.description}</p>

        <div
          className="card-footer"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link to={`/creator/${creator.id}`} className="icon-link">
            <FontAwesomeIcon icon={faCircleInfo} aria-hidden="true" />
          </Link>
          <Link to={`/edit/${creator.id}`} className="icon-link">
            <FontAwesomeIcon icon={faPen} aria-hidden="true" />
          </Link>
        </div>
      </article>
    </div>
  );
}

export default CreatorCard;
