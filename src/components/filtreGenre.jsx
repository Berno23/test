import React, { useState } from "react";

const FiltreGenre = ({ users, setFilteredUsers }) => {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const handleChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);

    // Filtrer les utilisateurs en fonction du genre sélectionné
    if (genre === "all") {
      setFilteredUsers(users);  // Afficher tous les utilisateurs
    } else {
      const filtered = users.filter(user => user.gender === genre);
      setFilteredUsers(filtered);  // Afficher les utilisateurs filtrés par genre
    }
  };

  return (
    <div className="mb-4">
      <label className="mr-2">Filtrer par genre : </label>
      <select
        value={selectedGenre}
        onChange={handleChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="all">Tous</option>
        <option value="male">Homme</option>
        <option value="female">Femme</option>
      </select>
    </div>
  );
};

export default FiltreGenre;
