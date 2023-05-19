import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function CharacterCard(props) {
  const [character, setCharacter] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  function findCharacter() {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${import.meta.env.VITE_API_URL}/character/find/${props.id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setCharacter(response.data);
      });
  }

  function deleteCharacter() {
    const storedToken = localStorage.getItem("authToken");
    const body = {
      id: character._id,
      backstoryId: character.backstory[0],
      userId: props.userId,
    };

    axios
      .post(`${import.meta.env.VITE_API_URL}/character/delete`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        props.getUser();
      });
  }

  function primeDelete() {
    setShowDelete(true);
  }

  function closeModal() {
    setShowDelete(false);
  }

  useEffect(() => {
    findCharacter();
  }, []);

  return (
    <>
      {character && (
        <div className="character-card">
          <Link className="character-flex" to={`/characterSheet/${props.id}`}>
            <p className="character-name">{character.name}</p>
            <p className="character-class">
              {character.class.slice(0, 1).toUpperCase() +
                character.class.slice(1)}
            </p>
          </Link>
          <button onClick={primeDelete} className="character-delete">
            {" "}
            X{" "}
          </button>

          {showDelete === true ? (
            <div className="modal-backdrop">
              <div className="modal-body">
                <p className="modal-text">
                  Are you sure you want to delete this Character?
                </p>
                <div className="modal-buttons">
                  <button className="modal-close" onClick={closeModal}>
                    No
                  </button>
                  <button
                    className="delete-character"
                    onClick={deleteCharacter}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}

export default CharacterCard;
