import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BackgroundAlignment(props) {
  const [showModal, setShowModal] = useState(true);

  const [alignment, setAlignment] = useState("lawful good");
  const [background, setBackground] = useState("Acolyte");

  const navigate = useNavigate();

  function handleAlignmentChange(e) {
    e.preventDefault();
    setAlignment(e.target.value);
  }

  function handleBackgroundChange(e) {
    e.preventDefault();
    setBackground(e.target.value);
  }

  function descriptionSwitch(param) {
    switch (param) {
      case `Acolyte`:
        return `As an Acolyte you have spent your life in religious study and service. You have extensive knowledge of religious rituals, texts, and traditions.`;
      case `Criminal`:
        return `You have a history with illicit activities. You might have been a thief, a smuggler, or a member of an organized crime syndicate.`;
      case `Entertainer`:
        return `You have a background in performing arts and entertainment. You may be a musician, actor, dancer, or any other type of performer.`;
      case `Folk Hero`:
        return `You have achieved fame or recognition among common folk for their heroic deeds. You may have stood up against an oppressive ruler, defended your village from a monster, or led a rebellion.`;
      case `Hermit`:
        return `You have chosen a life of solitude and seclusion, seeking spiritual enlightenment or escaping the complexities of society. Hermits have spent an extended period in isolation, living in remote places such as mountains, forests, or temples.`;
      case `Noble`:
        return `You come from a wealthy and influential family or have a high social status. You are accustomed to a life of privilege and have connections to powerful individuals or organizations.`;
      case `Sage`:
        return `You have dedicated your life to the pursuit of knowledge and academic study. You are a scholar, researcher, or expert in a specific field of study.`;
      case `Soldier`:
        return `You have served in a military organization or fought in wars. You have undergone rigorous training and possess combat skills and discipline.`;
      case `Urchin`:
        return `You grew up in the streets, surviving through wit and resourcefulness. You may have been an orphan or a runaway, living in poverty and navigating the urban environment.`;
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");
    const body = { background, alignment, backstory: [] };

    axios
      .put(
        `${import.meta.env.VITE_API_URL}/character/update/${props.id}`,
        body,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        navigate("/backstory");
      });
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="character-topbox"></div>

      {showModal === true ? (
        <div className="modal-backdrop">
          <div className="modal-body-stats">
            <p className="modal-text">
              Here you can choose your alignment, which specifies if your
              character is good or evil aligned.
            </p>
            <p className="modal-text">
              Your background explains what your character did before becoming
              an adventurer.
            </p>
            <div className="modal-buttons-column">
              <button className="modal-close-info" onClick={closeModal}>
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <form className="character-form-name" onSubmit={submitHandler}>
        <p className="character-creation-text-start">Choose your alignment</p>

        <select
          className="character-creation-select"
          name="alignment"
          onChange={handleAlignmentChange}
        >
          <option value="Lawful Good">Lawful Good</option>
          <option value="Neutral Good">Neutral Good</option>
          <option value="Chaotic Good">Chaotic Good</option>
          <option value="Lawful Neutral">Lawful Neutral</option>
          <option value="Neutral">Neutral</option>
          <option value="Chaotic Neutral">Chaotic Neutral</option>
          <option value="Lawful Evil">Lawful Evil</option>
          <option value="Neutral Evil">Neutral Evil</option>
          <option value="Chaotic Evil">Chaotic Evil</option>
        </select>

        <p>Choose your background</p>

        <select
          className="character-creation-select"
          name="background"
          onChange={handleBackgroundChange}
        >
          <option value="Acolyte">Acolyte</option>
          <option value="Criminal">Criminal</option>
          <option value="Entertainer">Entertainer</option>
          <option value="Folk Hero">Folk Hero</option>
          <option value="Hermit">Hermit</option>
          <option value="Noble">Noble</option>
          <option value="Sage">Sage</option>
          <option value="Soldier">Soldier</option>
          <option value="Urchin">Urchin</option>
        </select>

        <p className="description-background">
          {descriptionSwitch(background)}
        </p>

        <div className="button-box">
          <button
            className="back-button"
            type="button"
            onClick={props.changeComponentsBack4}
          >
            Back
          </button>
          <button className="continue-button" onClick={submitHandler}>
            Continue
          </button>
        </div>
      </form>
    </>
  );
}

export default BackgroundAlignment;
