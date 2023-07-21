import { useState, useEffect } from "react";
import axios from "axios";

import StatCard from "./StatCard";

function Stats(props) {
  const [showModal, setShowModal] = useState(true);
  const [showStr, setShowStr] = useState(false);
  const [showDex, setShowDex] = useState(false);
  const [showCon, setShowCon] = useState(false);
  const [showInt, setShowInt] = useState(false);
  const [showWis, setShowWis] = useState(false);
  const [showCha, setShowCha] = useState(false);

  /* ---------Ability Scores------- */

  const [str, SetStr] = useState(10);
  const [strmod, SetStrmod] = useState(0);
  const [dex, SetDex] = useState(10);
  const [dexmod, SetDexmod] = useState(0);
  const [con, SetCon] = useState(10);
  const [conmod, SetConmod] = useState(0);
  const [int, SetInt] = useState(10);
  const [intmod, SetIntmod] = useState(0);
  const [wis, SetWis] = useState(10);
  const [wismod, SetWismod] = useState(0);
  const [cha, SetCha] = useState(10);
  const [chamod, SetChamod] = useState(0);

  /* ---------Saving Throws------- */

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

  const [counter, setCounter] = useState(27);

  /*     --------- preset stats -------- */

  function setStats(param) {
    switch (param) {
      case `Barbarian`:
        return (
          SetStr(15), SetDex(13), SetCon(14), SetInt(8), SetWis(12), SetCha(10)
        );
      case `Bard`:
        return (
          SetStr(8), SetDex(14), SetCon(13), SetInt(10), SetWis(12), SetCha(15)
        );
      case `Cleric`:
        return (
          SetStr(13), SetDex(8), SetCon(14), SetInt(12), SetWis(15), SetCha(10)
        );
      case `Druid`:
        return (
          SetStr(10), SetDex(12), SetCon(14), SetInt(13), SetWis(15), SetCha(8)
        );
      case `Fighter`:
        return (
          SetStr(15), SetDex(13), SetCon(14), SetInt(8), SetWis(12), SetCha(10)
        );
      case `Monk`:
        return (
          SetStr(8), SetDex(15), SetCon(13), SetInt(10), SetWis(14), SetCha(12)
        );
      case `Paladin`:
        return (
          SetStr(15), SetDex(10), SetCon(14), SetInt(13), SetWis(8), SetCha(12)
        );
      case `Ranger`:
        return (
          SetStr(8), SetDex(15), SetCon(13), SetInt(12), SetWis(14), SetCha(10)
        );
      case `Rogue`:
        return (
          SetStr(10), SetDex(15), SetCon(13), SetInt(8), SetWis(12), SetCha(14)
        );
      case `Sorcerer`:
        return (
          SetStr(8), SetDex(12), SetCon(13), SetInt(10), SetWis(14), SetCha(15)
        );
      case `Warlock`:
        return (
          SetStr(10), SetDex(13), SetCon(14), SetInt(12), SetWis(8), SetCha(15)
        );
      case `Wizard`:
        return (
          SetStr(8), SetDex(14), SetCon(13), SetInt(15), SetWis(12), SetCha(10)
        );
    }
  }

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${import.meta.env.VITE_API_URL}/character/find/${props.id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setStats(response.data.class);
      });
  }, []);

  /*     --------- stat change effect handlers -------- */

  useEffect(() => {
    if (str === 9) {
      SetStrmod(-1);
    }
    if (str === 10 || str === 11) {
      SetStrmod(0);
    }
    if (str === 12 || str === 13) {
      SetStrmod(1);
    }
    if (str === 14 || str === 15) {
      SetStrmod(2);
    }
    if (str === 16 || str === 17) {
      SetStrmod(3);
    }
    if (str === 18) {
      SetStrmod(4);
    }
  }, [str]);

  useEffect(() => {
    if (dex === 9) {
      SetDexmod(-1);
    }
    if (dex === 10 || dex === 11) {
      SetDexmod(0);
    }
    if (dex === 12 || dex === 13) {
      SetDexmod(1);
    }
    if (dex === 14 || dex === 15) {
      SetDexmod(2);
    }
    if (dex === 16 || dex === 17) {
      SetDexmod(3);
    }
    if (dex === 18) {
      SetDexmod(4);
    }
  }, [dex]);

  useEffect(() => {
    if (con === 9) {
      SetConmod(-1);
    }
    if (con === 10 || con === 11) {
      SetConmod(0);
    }
    if (con === 12 || con === 13) {
      SetConmod(1);
    }
    if (con === 14 || con === 15) {
      SetConmod(2);
    }
    if (con === 16 || con === 17) {
      SetConmod(3);
    }
    if (con === 18) {
      SetConmod(4);
    }
  }, [con]);

  useEffect(() => {
    if (int === 9) {
      SetIntmod(-1);
    }
    if (int === 10 || int === 11) {
      SetIntmod(0);
    }
    if (int === 12 || int === 13) {
      SetIntmod(1);
    }
    if (int === 14 || int === 15) {
      SetIntmod(2);
    }
    if (int === 16 || int === 17) {
      SetIntmod(3);
    }
    if (int === 18) {
      SetIntmod(4);
    }
  }, [int]);

  useEffect(() => {
    if (wis === 9) {
      SetWismod(-1);
    }
    if (wis === 10 || wis === 11) {
      SetWismod(0);
    }
    if (wis === 12 || wis === 13) {
      SetWismod(1);
    }
    if (wis === 14 || wis === 15) {
      SetWismod(2);
    }
    if (wis === 16 || wis === 17) {
      SetWismod(3);
    }
    if (wis === 18) {
      SetWismod(4);
    }
  }, [wis]);

  useEffect(() => {
    if (cha === 9) {
      SetChamod(-1);
    }
    if (cha === 10 || cha === 11) {
      SetChamod(0);
    }
    if (cha === 12 || cha === 13) {
      SetChamod(1);
    }
    if (cha === 14 || cha === 15) {
      SetChamod(2);
    }
    if (cha === 16 || cha === 17) {
      SetChamod(3);
    }
    if (cha === 18) {
      SetChamod(4);
    }
  }, [cha]);

  /*   --------- Stat change functions -------- */

  function strengthChange(op) {
    let strNew = str;
    let counterNew = counter;
    if (op === "+" && str < 13 && counter < 27) {
      SetStr((strNew += 1));
      setCounter((counterNew += 1));
    } else if (op === "+" && str < 15 && counter < 26) {
      SetStr((strNew += 1));
      setCounter((counterNew += 2));
    } else if (op === "-" && str > 8 && str < 14) {
      SetStr((strNew -= 1));
      setCounter((counterNew -= 1));
    } else if (op === "-" && str > 8 && str >= 14) {
      SetStr((strNew -= 1));
      setCounter((counterNew -= 2));
    }
  }

  function dexterityChange(op) {
    let dexNew = dex;
    let counterNew = counter;
    if (op === "+" && dex < 13 && counter < 27) {
      SetDex((dexNew += 1));
      setCounter((counterNew += 1));
    } else if (op === "+" && dex < 15 && counter < 26) {
      SetDex((dexNew += 1));
      setCounter((counterNew += 2));
    } else if (op === "-" && dex > 8 && dex < 14) {
      SetDex((dexNew -= 1));
      setCounter((counterNew -= 1));
    } else if (op === "-" && dex > 8 && dex >= 14) {
      SetDex((dexNew -= 1));
      setCounter((counterNew -= 2));
    }
  }

  function constitutionChange(op) {
    let conNew = con;
    let counterNew = counter;
    if (op === "+" && con < 13 && counter < 27) {
      SetCon((conNew += 1));
      setCounter((counterNew += 1));
    } else if (op === "+" && con < 15 && counter < 26) {
      SetCon((conNew += 1));
      setCounter((counterNew += 2));
    } else if (op === "-" && con > 8 && con < 14) {
      SetCon((conNew -= 1));
      setCounter((counterNew -= 1));
    } else if (op === "-" && con > 8 && con >= 14) {
      SetCon((conNew -= 1));
      setCounter((counterNew -= 2));
    }
  }

  function intelligenceChange(op) {
    let intNew = int;
    let counterNew = counter;
    if (op === "+" && int < 13 && counter < 27) {
      SetInt((intNew += 1));
      setCounter((counterNew += 1));
    } else if (op === "+" && int < 15 && counter < 26) {
      SetInt((intNew += 1));
      setCounter((counterNew += 2));
    } else if (op === "-" && int > 8 && int < 14) {
      SetInt((intNew -= 1));
      setCounter((counterNew -= 1));
    } else if (op === "-" && int > 8 && int >= 14) {
      SetInt((intNew -= 1));
      setCounter((counterNew -= 2));
    }
  }

  function wisdomChange(op) {
    let wisNew = wis;
    let counterNew = counter;
    if (op === "+" && wis < 13 && counter < 27) {
      SetWis((wisNew += 1));
      setCounter((counterNew += 1));
    } else if (op === "+" && wis < 15 && counter < 26) {
      SetWis((wisNew += 1));
      setCounter((counterNew += 2));
    } else if (op === "-" && wis > 8 && wis < 14) {
      SetWis((wisNew -= 1));
      setCounter((counterNew -= 1));
    } else if (op === "-" && wis > 8 && wis >= 14) {
      SetWis((wisNew -= 1));
      setCounter((counterNew -= 2));
    }
  }

  function charismaChange(op) {
    let chaNew = cha;
    let counterNew = counter;
    if (op === "+" && cha < 13 && counter < 27) {
      SetCha((chaNew += 1));
      setCounter((counterNew += 1));
    } else if (op === "+" && cha < 15 && counter < 26) {
      SetCha((chaNew += 1));
      setCounter((counterNew += 2));
    } else if (op === "-" && cha > 8 && cha < 14) {
      SetCha((chaNew -= 1));
      setCounter((counterNew -= 1));
    } else if (op === "-" && cha > 8 && cha >= 14) {
      SetCha((chaNew -= 1));
      setCounter((counterNew -= 2));
    }
  }

  function submitHandler() {
    const storedToken = localStorage.getItem("authToken");
    const body = {
      stats: {
        str,
        strmod,
        dex,
        dexmod,
        con,
        conmod,
        int,
        intmod,
        wis,
        wismod,
        cha,
        chamod,
      },
    };

    axios
      .put(
        `${import.meta.env.VITE_API_URL}/character/update/${props.id}`,
        body,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then(() => {
        props.changeComponents4();
      });
  }

  function closeModal() {
    setShowModal(false);
  }

  function showStat(stat) {
    switch (stat) {
      case `str`:
        return setShowStr(true);
      case `dex`:
        return setShowDex(true);
      case `con`:
        return setShowCon(true);
      case `int`:
        return setShowInt(true);
      case `wis`:
        return setShowWis(true);
      case `cha`:
        return setShowCha(true);
    }
  }

  function closeStat(stat) {
    switch (stat) {
      case `str`:
        return setShowStr(false);
      case `dex`:
        return setShowDex(false);
      case `con`:
        return setShowCon(false);
      case `int`:
        return setShowInt(false);
      case `wis`:
        return setShowWis(false);
      case `cha`:
        return setShowCha(false);
    }
  }

  return (
    <>
      <div className="character-topbox"></div>

      {/*  -----------modals------------ */}

      {showModal === true ? (
        <div className="modal-backdrop">
          <div className="modal-body-stats">
            <p className="modal-text">
              These are your ability scores. They decide how good you are in
              combat, magic and specific skills. Click on a ability score to
              learn more about it.
            </p>
            <p className="modal-text">
              We preselected scores based on your class choice, so that you have
              a well rounded character. Feel free to change them to better fit
              your character.
            </p>
            <p className="modal-text">
              A score of 10 represents the average human being.
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

      {showStr === true ? (
        <div className="modal-backdrop">
          <div className="modal-body-stats">
            <p className="modal-text">
              Strength determines your characters physical abilities. The more
              Strength you possess, the stronger you are with melee weapons in
              combat.
            </p>
            <p className="modal-text">Associated skills: Athletics</p>
            <div className="modal-buttons-column">
              <button
                className="modal-close-info"
                onClick={() => closeStat("str")}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {showDex === true ? (
        <div className="modal-backdrop">
          <div className="modal-body-stats">
            <p className="modal-text">
              Dexterity determines how quick your characters reflexes are and
              how agile they are. Characters with high dexterity can more easily
              evade their enemies attacks.
            </p>
            <p className="modal-text">
              Associated skills: Acrobatics, Sleight of Hand, Stealth
            </p>
            <div className="modal-buttons-column">
              <button
                className="modal-close-info"
                onClick={() => closeStat("dex")}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {showCon === true ? (
        <div className="modal-backdrop">
          <div className="modal-body-stats">
            <p className="modal-text">
              Constitution determines how much damage your character can sustain
              before falling unconscious. It directly affects your maximum hit
              points.
            </p>
            <div className="modal-buttons-column">
              <button
                className="modal-close-info"
                onClick={() => closeStat("con")}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {showInt === true ? (
        <div className="modal-backdrop">
          <div className="modal-body-stats">
            <p className="modal-text">
              Intelligence determines the mental capacity of your character. It
              represents how learned you are in scholarly topics.
            </p>
            <p className="modal-text">
              Associated skills: Arcana, History, Investigation, Nature,
              Religion
            </p>
            <div className="modal-buttons-column">
              <button
                className="modal-close-info"
                onClick={() => closeStat("int")}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {showWis === true ? (
        <div className="modal-backdrop">
          <div className="modal-body-stats">
            <p className="modal-text">
              Wisdom determines how attuned your character is to the world
              around you. It affects your perceptiveness and intuition.
            </p>
            <p className="modal-text">
              Associated skills: Animal Handling, Insight, Medicine, Perception,
              Survival
            </p>
            <div className="modal-buttons-column">
              <button
                className="modal-close-info"
                onClick={() => closeStat("wis")}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {showCha === true ? (
        <div className="modal-backdrop">
          <div className="modal-body-stats">
            <p className="modal-text">
              Charisma determines your characters ability to interact with other
              people. A high charisma score makes you more eloquent and
              charming.
            </p>
            <p className="modal-text">
              Associated skills: Deception, Intimidation, Performance,
              Persuasion
            </p>
            <div className="modal-buttons-column">
              <button
                className="modal-close-info"
                onClick={() => closeStat("cha")}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      {/*  ----------Statboxes------------- */}

      <div className="character-form-name">
        <p className="character-creation-text-start">
          Choose your abilty scores
        </p>

        <div className="stat-box-large">
          <div className="stat-box-small">
            <button className="stat-heading" onClick={() => showStat("str")}>
              Strength
            </button>
            <div className="stat-box">
              <StatCard statname={"Strength"} stat={str} mod={strmod} />
              <div className="stat-buttons">
                <button
                  className="stat-button"
                  onClick={() => strengthChange("+")}
                >
                  +
                </button>
                <button
                  className="stat-button stat-minus"
                  onClick={() => strengthChange("-")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="stat-box-small">
            <button className="stat-heading" onClick={() => showStat("dex")}>
              Dexterity
            </button>
            <div className="stat-box">
              <StatCard statname={"Dexterity"} stat={dex} mod={dexmod} />
              <div className="stat-buttons">
                <button
                  className="stat-button"
                  onClick={() => dexterityChange("+")}
                >
                  +
                </button>
                <button
                  className="stat-button stat-minus"
                  onClick={() => dexterityChange("-")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="stat-box-large">
          <div className="stat-box-small">
            <button className="stat-heading" onClick={() => showStat("con")}>
              Constitution
            </button>
            <div className="stat-box">
              <StatCard statname={"Constitution"} stat={con} mod={conmod} />
              <div className="stat-buttons">
                <button
                  className="stat-button"
                  onClick={() => constitutionChange("+")}
                >
                  +
                </button>
                <button
                  className="stat-button stat-minus"
                  onClick={() => constitutionChange("-")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="stat-box-small">
            <button className="stat-heading" onClick={() => showStat("int")}>
              Intelligence
            </button>
            <div className="stat-box">
              <StatCard statname={"Intelligence"} stat={int} mod={intmod} />
              <div className="stat-buttons">
                <button
                  className="stat-button"
                  onClick={() => intelligenceChange("+")}
                >
                  +
                </button>
                <button
                  className="stat-button stat-minus"
                  onClick={() => intelligenceChange("-")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="stat-box-large lowest-box">
          <div className="stat-box-small">
            <button className="stat-heading" onClick={() => showStat("wis")}>
              Wisdom
            </button>
            <div className="stat-box">
              <StatCard statname={"Wisdom"} stat={wis} mod={wismod} />
              <div className="stat-buttons">
                <button
                  className="stat-button"
                  onClick={() => wisdomChange("+")}
                >
                  +
                </button>
                <button
                  className="stat-button stat-minus"
                  onClick={() => wisdomChange("-")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="stat-box-small">
            <button className="stat-heading" onClick={() => showStat("cha")}>
              Charisma
            </button>
            <div className="stat-box">
              <StatCard statname={"Charisma"} stat={cha} mod={chamod} />
              <div className="stat-buttons">
                <button
                  className="stat-button"
                  onClick={() => charismaChange("+")}
                >
                  +
                </button>
                <button
                  className="stat-button stat-minus"
                  onClick={() => charismaChange("-")}
                >
                  -
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="stat-counter">Total points: {counter}/27</div>

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
      </div>

      <div className="character-topbox"></div>
    </>
  );
}

export default Stats;
