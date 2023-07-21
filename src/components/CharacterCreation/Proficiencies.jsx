import { useState, useEffect } from "react";
import axios from "axios";

function Proficiencies(props) {
  const [showModal, setShowModal] = useState(true);

  /* ---------Ability Scores------- */

  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);

  /* ---------Proficiencies------- */

  const [acrobatics, setAcrobatics] = useState(0);
  const [animalHandling, setAnimalHandling] = useState(0);
  const [arcana, setArcana] = useState(0);
  const [athletics, setAthletics] = useState(0);
  const [deception, setDeception] = useState(0);
  const [history, setHistory] = useState(0);
  const [insight, setInsight] = useState(0);
  const [intimidation, setIntimidation] = useState(0);
  const [investigation, setInvestigation] = useState(0);
  const [medicine, setMedicine] = useState(0);
  const [nature, setNature] = useState(0);
  const [perception, setPerception] = useState(0);
  const [performance, setPerformance] = useState(0);
  const [persuasion, setPersuasion] = useState(0);
  const [religion, setReligion] = useState(0);
  const [sleightOfHand, setSleightOfHand] = useState(0);
  const [stealth, setStealth] = useState(0);
  const [survival, setSurvival] = useState(0);

  const [playerclass, setPlayerClass] = useState(``);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${import.meta.env.VITE_API_URL}/character/find/${props.id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setPlayerClass(response.data.class);
      });
  }, []);

  useEffect(() => {
    setProficiencies(playerclass);
  }, [playerclass]);

  function setProficiencies(playerclass) {
    switch (playerclass) {
      case `Barbarian`:
        return (
          setStrength(2),
          setConstitution(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(0),
          setAthletics(2),
          (document.querySelector("#athletics").checked = true),
          setDeception(0),
          setHistory(0),
          setInsight(0),
          setIntimidation(2),
          (document.querySelector("#intimidation").checked = true),
          setInvestigation(0),
          setMedicine(0),
          setNature(2),
          (document.querySelector("#nature").checked = true),
          setPerception(0),
          setPerformance(0),
          setPersuasion(0),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(2),
          (document.querySelector("#survival").checked = true)
        );
      case `Bard`:
        return (
          setDexterity(2),
          setCharisma(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(2),
          (document.querySelector("#arcana").checked = true),
          setAthletics(0),
          setDeception(2),
          (document.querySelector("#deception").checked = true),
          setHistory(0),
          setInsight(2),
          (document.querySelector("#insight").checked = true),
          setIntimidation(0),
          setInvestigation(0),
          setMedicine(0),
          setNature(0),
          setPerception(0),
          setPerformance(2),
          (document.querySelector("#performance").checked = true),
          setPersuasion(2),
          (document.querySelector("#persuasion").checked = true),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(0)
        );
      case `Cleric`:
        return (
          setWisdom(2),
          setCharisma(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(0),
          setAthletics(0),
          setDeception(0),
          setHistory(0),
          setInsight(2),
          (document.querySelector("#insight").checked = true),
          setIntimidation(0),
          setInvestigation(0),
          setMedicine(2),
          (document.querySelector("#medicine").checked = true),
          setNature(0),
          setPerception(2),
          (document.querySelector("#perception").checked = true),
          setPerformance(0),
          setPersuasion(0),
          setReligion(2),
          (document.querySelector("#religion").checked = true),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(0)
        );
      case `Druid`:
        return (
          setWisdom(2),
          setIntelligence(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(0),
          setAthletics(0),
          setDeception(0),
          setHistory(0),
          setInsight(0),
          setIntimidation(0),
          setInvestigation(0),
          setMedicine(2),
          (document.querySelector("#medicine").checked = true),
          setNature(2),
          (document.querySelector("#nature").checked = true),
          setPerception(2),
          (document.querySelector("#perception").checked = true),
          setPerformance(0),
          setPersuasion(0),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(2),
          (document.querySelector("#survival").checked = true)
        );
      case `Fighter`:
        return (
          setStrength(2),
          setConstitution(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(0),
          setAthletics(2),
          (document.querySelector("#athletics").checked = true),
          setDeception(0),
          setHistory(0),
          setInsight(2),
          (document.querySelector("#insight").checked = true),
          setIntimidation(0),
          setInvestigation(0),
          setMedicine(2),
          (document.querySelector("#medicine").checked = true),
          setNature(0),
          setPerception(2),
          (document.querySelector("#perception").checked = true),
          setPerformance(0),
          setPersuasion(0),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(0)
        );
      case `Monk`:
        return (
          setStrength(2),
          setDexterity(2),
          setAcrobatics(2),
          (document.querySelector("#acrobatics").checked = true),
          setAnimalHandling(0),
          setArcana(0),
          setAthletics(0),
          setDeception(0),
          setHistory(0),
          setInsight(2),
          (document.querySelector("#insight").checked = true),
          setIntimidation(0),
          setInvestigation(0),
          setMedicine(0),
          setNature(0),
          setPerception(2),
          (document.querySelector("#perception").checked = true),
          setPerformance(0),
          setPersuasion(0),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(2),
          (document.querySelector("#stealth").checked = true),
          setSurvival(0)
        );
      case `Paladin`:
        return (
          setWisdom(2),
          setCharisma(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(0),
          setAthletics(2),
          (document.querySelector("#athletics").checked = true),
          setDeception(0),
          setHistory(0),
          setInsight(2),
          (document.querySelector("#insight").checked = true),
          setIntimidation(0),
          setInvestigation(0),
          setMedicine(0),
          setNature(0),
          setPerception(2),
          (document.querySelector("#perception").checked = true),
          setPerformance(0),
          setPersuasion(0),
          setReligion(2),
          (document.querySelector("#religion").checked = true),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(0)
        );
      case `Ranger`:
        return (
          setStrength(2),
          setDexterity(2),
          setAcrobatics(0),
          setAnimalHandling(2),
          (document.querySelector("#animalHandling").checked = true),
          setArcana(0),
          setAthletics(0),
          setDeception(0),
          setHistory(0),
          setInsight(0),
          setIntimidation(0),
          setInvestigation(0),
          setMedicine(0),
          setNature(2),
          (document.querySelector("#nature").checked = true),
          setPerception(2),
          (document.querySelector("#perception").checked = true),
          setPerformance(0),
          setPersuasion(0),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(2),
          (document.querySelector("#survival").checked = true)
        );
      case `Rogue`:
        return (
          setIntelligence(2),
          setDexterity(2),
          setAcrobatics(2),
          (document.querySelector("#acrobatics").checked = true),
          setAnimalHandling(0),
          setArcana(0),
          setAthletics(0),
          setDeception(0),
          setHistory(0),
          setInsight(0),
          setIntimidation(2),
          (document.querySelector("#intimidation").checked = true),
          setInvestigation(0),
          setMedicine(0),
          setNature(0),
          setPerception(0),
          setPerformance(0),
          setPersuasion(0),
          setReligion(0),
          setSleightOfHand(2),
          (document.querySelector("#sleightOfHands").checked = true),
          setStealth(2),
          (document.querySelector("#stealth").checked = true),
          setSurvival(0)
        );
      case `Sorcerer`:
        return (
          setConstitution(2),
          setCharisma(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(2),
          (document.querySelector("#arcana").checked = true),
          setAthletics(0),
          setDeception(0),
          setHistory(0),
          setInsight(2),
          (document.querySelector("#insight").checked = true),
          setIntimidation(0),
          setInvestigation(0),
          setMedicine(0),
          setNature(0),
          setPerception(2),
          (document.querySelector("#perception").checked = true),
          setPerformance(0),
          setPersuasion(2),
          (document.querySelector("#persuasion").checked = true),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(0)
        );
      case `Warlock`:
        return (
          setWisdom(2),
          setCharisma(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(2),
          (document.querySelector("#arcana").checked = true),
          setAthletics(0),
          setDeception(2),
          (document.querySelector("#deception").checked = true),
          setHistory(0),
          setInsight(0),
          setIntimidation(2),
          (document.querySelector("#intimidation").checked = true),
          setInvestigation(2),
          (document.querySelector("#investigation").checked = true),
          setMedicine(0),
          setNature(0),
          setPerception(0),
          setPerformance(0),
          setPersuasion(0),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(0)
        );
      case `Wizard`:
        return (
          setWisdom(2),
          setIntelligence(2),
          setAcrobatics(0),
          setAnimalHandling(0),
          setArcana(2),
          (document.querySelector("#arcana").checked = true),
          setAthletics(0),
          setDeception(0),
          setHistory(2),
          (document.querySelector("#history").checked = true),
          setInsight(0),
          setIntimidation(0),
          setInvestigation(2),
          (document.querySelector("#investigation").checked = true),
          setMedicine(0),
          setNature(2),
          (document.querySelector("#nature").checked = true),
          setPerception(0),
          setPerformance(0),
          setPersuasion(0),
          setReligion(0),
          setSleightOfHand(0),
          setStealth(0),
          setSurvival(0)
        );
    }
  }

  function submitHandler(e) {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");
    const body = {
      savingThrows: {
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
      },
      proficiencies: {
        acrobatics,
        animalHandling,
        arcana,
        athletics,
        deception,
        history,
        insight,
        intimidation,
        investigation,
        medicine,
        nature,
        perception,
        performance,
        persuasion,
        religion,
        sleightOfHand,
        stealth,
        survival,
      },
    };

    axios
      .put(
        `${import.meta.env.VITE_API_URL}/character/update/${props.id}`,
        body,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        props.changeComponents3();
      });
  }

  function profChange(e) {
    if (e.target.checked === true) {
      switch (e.target.id) {
        case `acrobatics`:
          return setAcrobatics(2);
        case `animalHandling`:
          return setAnimalHandling(2);
        case `arcana`:
          return setArcana(2);
        case `athletics`:
          return setAthletics(2);
        case `deception`:
          return setDeception(2);
        case `history`:
          return setHistory(2);
        case `insight`:
          return setInsight(2);
        case `intimidation`:
          return setIntimidation(2);
        case `investigation`:
          return setInvestigation(2);
        case `medicine`:
          return setMedicine(2);
        case `nature`:
          return setNature(2);
        case `perception`:
          return setPerception(2);
        case `performance`:
          return setPerformance(2);
        case `persuasion`:
          return setPersuasion(2);
        case `religion`:
          return setReligion(2);
        case `sleightOfHand`:
          return setSleightOfHand(2);
        case `stealth`:
          return setStealth(2);
        case `survival`:
          return setSurvival(2);
      }
    } else {
      switch (e.target.id) {
        case `acrobatics`:
          return setAcrobatics(0);
        case `animalHandling`:
          return setAnimalHandling(0);
        case `arcana`:
          return setArcana(0);
        case `athletics`:
          return setAthletics(0), console.log(athletics);
        case `deception`:
          return setDeception(0);
        case `history`:
          return setHistory(0);
        case `insight`:
          return setInsight(0);
        case `intimidation`:
          return setIntimidation(0);
        case `investigation`:
          return setInvestigation(0);
        case `medicine`:
          return setMedicine(0);
        case `nature`:
          return setNature(0);
        case `perception`:
          return setPerception(0);
        case `performance`:
          return setPerformance(0);
        case `persuasion`:
          return setPersuasion(0);
        case `religion`:
          return setReligion(0);
        case `sleightOfHand`:
          return setSleightOfHand(0);
        case `stealth`:
          return setStealth(0);
        case `survival`:
          return setSurvival(0);
      }
    }
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <div className="character-topbox"></div>

      {showModal === true ? (
        <div className="modal-backdrop">
          <div className="modal-body">
            {playerclass === "Bard" ? (
              <p className="modal-text">
                Here you can choose the skills which your character excels at.
                We have preselected skills that would fit your class, but feel
                free to choose whatever you think would fit your character. You
                can select up to 5 skills.
              </p>
            ) : (
              <p className="modal-text">
                Here you can choose the skills which your character excels at.
                We have preselected skills that would fit your class, but feel
                free to choose whatever you think would fit your character. You
                can select up to 4 skills.
              </p>
            )}

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
        <p className="character-creation-text-start">
          Choose your proficiencies
        </p>

        {/* -----Proficiency options------ */}
        <>
          <label className="prof-label">
            <input
              id="acrobatics"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Acrobatics
          </label>
          <label className="prof-label">
            <input
              id="animalHandling"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Animal Handling
          </label>
          <label className="prof-label">
            <input
              id="arcana"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Arcana
          </label>
          <label className="prof-label">
            <input
              id="athletics"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Athletics
          </label>
          <label className="prof-label">
            <input
              id="deception"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Deception
          </label>
          <label className="prof-label">
            <input
              id="history"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>History
          </label>
          <label className="prof-label">
            <input
              id="insight"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Insight
          </label>
          <label className="prof-label">
            <input
              id="intimidation"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Intimidation
          </label>
          <label className="prof-label">
            <input
              id="investigation"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Investigation
          </label>
          <label className="prof-label">
            <input
              id="medicine"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Medicine
          </label>
          <label className="prof-label">
            <input
              id="nature"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Nature
          </label>
          <label className="prof-label">
            <input
              id="perception"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Perception
          </label>
          <label className="prof-label">
            <input
              id="performance"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Performance
          </label>
          <label className="prof-label">
            <input
              id="persuasion"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Persuasion
          </label>
          <label className="prof-label">
            <input
              id="religion"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Religion
          </label>
          <label className="prof-label">
            <input
              id="sleightOfHand"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Sleight of Hand
          </label>
          <label className="prof-label">
            <input
              id="stealth"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Stealth
          </label>
          <label className="prof-label last-label">
            <input
              id="survival"
              type="checkbox"
              className="check"
              onClick={profChange}
            ></input>
            <span className="checkbox"></span>Survival
          </label>
        </>

        <div className="button-box">
          <button
            className="back-button"
            type="button"
            onClick={props.changeComponentsBack3}
          >
            Back
          </button>
          <button className="continue-button" type="submit">
            Continue
          </button>
        </div>
      </form>

      <div className="character-topbox"></div>
    </>
  );
}

export default Proficiencies;
