import React, { useState } from "react";

const CreatorForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || "");
  const [url, setUrl] = useState(initialData.url || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [imageURL, setImageURL] = useState(initialData.imageURL || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, url, description, imageURL });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create a new one</h1>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        URL:{" "}
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </label>
      <label>
        Description:{" "}
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Image URL:{" "}
        <input
          type="text"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreatorForm;
