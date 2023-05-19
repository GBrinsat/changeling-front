import { useState, useEffect } from "react";

import axios from "axios";

function RaceNameGender(props) {
  const [race, SetRace] = useState("Dragonborn");
  const [name, SetName] = useState("");
  const [gender, SetGender] = useState("female");

  function handleRaceChange(e) {
    e.preventDefault();
    SetRace(e.target.value);
  }

  function handleNameChange(e) {
    e.preventDefault();
    SetName(e.target.value);
  }

  function handleGenderChange(e) {
    e.preventDefault();
    SetGender(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const storedToken = localStorage.getItem("authToken");
    const body = { race, name, gender };

    axios
      .put(
        `${import.meta.env.VITE_API_URL}/character/update/${props.id}`,
        body,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        props.switchQuizOn();
      });
  }

  function descriptionSwitch(param) {
    switch (param) {
      case `Dragonborn`:
        return `Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.`;
      case `Dwarf`:
        return `Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.`;
      case `Elf`:
        return `Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.`;
      case `Gnome`:
        return `A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.`;
      case `Half-Elf`:
        return `Half-elves combine what some say are the best qualities of their elf and human parents.`;
      case `Half-Orc`:
        return `Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.`;
      case `Halfling`:
        return `The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.`;
      case `Human`:
        return `Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.`;
      case `Tiefling`:
        return `Tieflings are a race with demonic or infernal ancestry. They have horns, pointed tails, and other devilish features, but also possess a natural charisma and affinity for magic.`;
    }
  }

  return (
    <>
      <div className="character-topbox"></div>

      <form className="character-form-name" onSubmit={submitHandler}>
        <p className="character-creation-text-start">Choose a Name</p>
        <input type="text" placeholder="Name" onChange={handleNameChange} />

        <p>What is your race?</p>
        <select
          className="character-creation-select"
          name="race"
          onChange={handleRaceChange}
        >
          <option value="Dragonborn">Dragonborn</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-Elf">Half-Elf</option>
          <option value="Halfling">Halfling</option>
          <option value="Half-Orc">Half-Orc</option>
          <option value="Human">Human</option>
          <option value="Tiefling">Tiefling</option>
        </select>

        <p className="description-race">{descriptionSwitch(race)}</p>

        <p>What is your gender?</p>
        <select
          className="character-creation-select"
          name="gender"
          onChange={handleGenderChange}
        >
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Male">Genderless</option>
        </select>

        <div className="button-box">
          <button
            className="back-button"
            type="button"
            onClick={props.changeComponentsBack1}
          >
            Back
          </button>
          <button className="continue-button" type="submit">
            Continue
          </button>
        </div>
      </form>
    </>
  );
}

export default RaceNameGender;
