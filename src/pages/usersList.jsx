import { useEffect, useState } from "react";
import { getUsers } from "../actions/getUsers";
import FiltreGenre from "../components/filtreGenre";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);  // Utilisateurs filtrés
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
        setFilteredUsers(usersData);
      } catch (error) {
        setError("Une erreur est survenue lors de la récupération des utilisateurs.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Liste des Utilisateurs</h1>
    
      
      <FiltreGenre users={users} setFilteredUsers={setFilteredUsers} />
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white text-left shadow-lg rounded-lg">
          <thead className="bg-blue-500 text-white uppercase">
            <tr>
              <th className="p-3">Photo</th>
              <th className="p-3">Nom</th>
              <th className="p-3">Email</th>
              <th className="p-3">Pays</th>
              <th className="p-3">Genre</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">
                  <img 
                    src={user.picture.thumbnail} 
                    alt={user.name.first} 
                    className="w-10 h-10 rounded-full mx-auto"
                  />
                </td>
                <td className="p-3">{user.name.first} {user.name.last}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.location.country}</td>
                <td className="p-3">{user.gender === "male" ? "Homme" : "Femme"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersList;
