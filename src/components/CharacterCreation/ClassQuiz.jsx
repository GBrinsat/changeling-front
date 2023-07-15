import { useState } from "react";

function ClassQuiz(props) {
  const [showModal, setShowModal] = useState(true);

  const [question1, setQuestion1] = useState(true);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);
  const [question8, setQuestion8] = useState(false);
  const [question9, setQuestion9] = useState(false);
  const [question10, setQuestion10] = useState(false);

  function switchBackTo1() {
    setQuestion1(true);
    setQuestion2(false);
    setQuestion3(false);
  }

  function switchTo2() {
    setQuestion2(true);
    setQuestion1(false);
  }

  function switchBackTo2() {
    setQuestion2(true);
    setQuestion4(false);
  }

  function switchTo3() {
    setQuestion3(true);
    setQuestion1(false);
  }

  function switchBackTo3() {
    setQuestion3(true);
    setQuestion10(false);
    setQuestion5(false);
  }

  function switchTo4() {
    setQuestion4(true);
    setQuestion2(false);
  }

  function switchBackTo4() {
    setQuestion4(true);
    setQuestion6(false);
    setQuestion7(false);
  }

  function switchTo5() {
    setQuestion5(true);
    setQuestion3(false);
  }

  function switchBackTo5() {
    setQuestion5(true);
    setQuestion9(false);
    setQuestion8(false);
  }

  function switchTo6() {
    setQuestion6(true);
    setQuestion4(false);
  }

  function switchTo7() {
    setQuestion7(true);
    setQuestion4(false);
  }

  function switchTo8() {
    setQuestion8(true);
    setQuestion5(false);
  }

  function switchTo9() {
    setQuestion9(true);
    setQuestion5(false);
  }

  function switchTo10() {
    setQuestion10(true);
    setQuestion3(false);
  }

  function closeModal() {
    setShowModal(false);
  }

  function openModal() {
    setShowModal(true);
  }

  return (
    <>
      <div className="character-topbox"></div>

      {question1 === true ? (
        <>
          {showModal === true ? (
            <div className="modal-backdrop">
              <div className="modal-body">
                <p className="modal-text">
                  Let's find out which class fits best to you. Answer the
                  following questions however you feel sounds interesting.
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
          <div className="character-form-name">
            <p className="character-creation-text-start">
              Do you want to be a magic user?
            </p>
            <div className="button-box-vertical">
              <button className="quiz-answer" onClick={switchTo2}>
                Sounds good to me!
              </button>
              <button className="quiz-answer" onClick={switchTo3}>
                I would rather not...
              </button>
            </div>
            <button
              onClick={props.switchQuizOff}
              className="back-button quiz-back"
            >
              Back
            </button>
          </div>
        </>
      ) : (
        <>
          {question2 === true ? (
            <>
              <div className="character-form-name">
                <p className="character-creation-text-start">
                  Do you want to primarily heal or deal damage with your spells?
                </p>
                <div className="button-box-vertical">
                  <button className="quiz-answer" onClick={switchTo4}>
                    I want to deal damage!
                  </button>
                  <button className="quiz-answer" onClick={props.switchCleric}>
                    I want to heal my comrades.
                  </button>
                </div>
                <button
                  onClick={switchBackTo1}
                  className="back-button quiz-back"
                >
                  Back
                </button>
              </div>
            </>
          ) : (
            <>
              {question3 === true ? (
                <>
                  <div className="character-form-name">
                    <p className="character-creation-text-start">
                      Do you want to primarily fight from a distance or up
                      close?
                    </p>
                    <div className="button-box-vertical">
                      <button className="quiz-answer" onClick={switchTo10}>
                        Fight from a distance.
                      </button>
                      <button className="quiz-answer" onClick={switchTo5}>
                        Up close and personal
                      </button>
                    </div>
                    <button
                      onClick={switchBackTo1}
                      className="back-button quiz-back"
                    >
                      Back
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {question4 === true ? (
                    <>
                      <div className="character-form-name">
                        <p className="character-creation-text-start">
                          Do you want to focus completely on spells?
                        </p>
                        <div className="button-box-vertical">
                          <button className="quiz-answer" onClick={switchTo7}>
                            I want more options than spells.
                          </button>
                          <button className="quiz-answer" onClick={switchTo6}>
                            I want to focus completely on spells.
                          </button>
                        </div>
                        <button
                          onClick={switchBackTo2}
                          className="back-button quiz-back"
                        >
                          Back
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {question5 === true ? (
                        <>
                          <div className="character-form-name">
                            <p className="character-creation-text-start">
                              Do you want to be agile and dextrous or strong and
                              tough?
                            </p>
                            <div className="button-box-vertical">
                              <button
                                className="quiz-answer"
                                onClick={switchTo9}
                              >
                                Agile and dextrous.
                              </button>
                              <button
                                className="quiz-answer"
                                onClick={switchTo8}
                              >
                                Strong and tough.
                              </button>
                            </div>
                            <button
                              onClick={switchBackTo3}
                              className="back-button quiz-back"
                            >
                              Back
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          {question6 === true ? (
                            <>
                              <div className="character-form-name">
                                <p className="character-creation-text-start">
                                  Did you learn magic in a school or was it a
                                  gift?
                                </p>
                                <div className="button-box-vertical">
                                  <button
                                    className="quiz-answer"
                                    onClick={props.switchWizard}
                                  >
                                    I learned magic at an academy.
                                  </button>
                                  <button
                                    className="quiz-answer"
                                    onClick={props.switchSorcerer}
                                  >
                                    My magic was a gift of some kind.
                                  </button>
                                </div>
                                <button
                                  onClick={switchBackTo4}
                                  className="back-button quiz-back"
                                >
                                  Back
                                </button>
                              </div>
                            </>
                          ) : (
                            <>
                              {question7 === true ? (
                                <>
                                  <div className="character-form-name">
                                    <p className="character-creation-text-start">
                                      Does your magic come from the nature or is
                                      it given from a pact with a powerful
                                      being?
                                    </p>
                                    <div className="button-box-vertical">
                                      <button
                                        className="quiz-answer"
                                        onClick={props.switchDruid}
                                      >
                                        It comes from nature.
                                      </button>
                                      <button
                                        className="quiz-answer"
                                        onClick={props.switchWarlock}
                                      >
                                        I made a pact for my magic.
                                      </button>
                                    </div>
                                    <button
                                      onClick={switchBackTo4}
                                      className="back-button quiz-back"
                                    >
                                      Back
                                    </button>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {question8 === true ? (
                                    <>
                                      <div className="character-form-name">
                                        <p className="character-creation-text-start">
                                          Do you rely on your Rage for strength,
                                          does it come from your spiritual
                                          connection or does it stem from years
                                          of rigorous training and discipline?
                                        </p>
                                        <div className="button-box-vertical">
                                          <button
                                            className="quiz-answer"
                                            onClick={props.switchBarbarian}
                                          >
                                            I rely on my Rage.
                                          </button>
                                          <button
                                            className="quiz-answer"
                                            onClick={props.switchPaladin}
                                          >
                                            It stems from a spiritual
                                            connection.
                                          </button>
                                          <button
                                            className="quiz-answer"
                                            onClick={props.switchFighter}
                                          >
                                            It comes from rigorous training.
                                          </button>
                                        </div>
                                        <button
                                          onClick={switchBackTo5}
                                          className="back-button quiz-back"
                                        >
                                          Back
                                        </button>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      {question9 === true ? (
                                        <>
                                          <div className="character-form-name">
                                            <p className="character-creation-text-start">
                                              Do you let your furious fists
                                              speak for themselves or are quick
                                              with your fingers and your dagger?
                                            </p>
                                            <div className="button-box-vertical">
                                              <button
                                                className="quiz-answer"
                                                onClick={props.switchMonk}
                                              >
                                                I let my fists do the talking.
                                              </button>
                                              <button
                                                className="quiz-answer"
                                                onClick={props.switchRogue}
                                              >
                                                My daggers are all I need.
                                              </button>
                                            </div>
                                            <button
                                              onClick={switchBackTo5}
                                              className="back-button quiz-back"
                                            >
                                              Back
                                            </button>
                                          </div>
                                        </>
                                      ) : (
                                        <>
                                          {question10 === true ? (
                                            <>
                                              <div className="character-form-name">
                                                <p className="character-creation-text-start">
                                                  Are you a born Tracker and
                                                  Hunter or are you a musical
                                                  virtuoso with a sharp tongue?
                                                </p>
                                                <div className="button-box-vertical">
                                                  <button
                                                    className="quiz-answer"
                                                    onClick={props.switchRanger}
                                                  >
                                                    I am an expert tracker.
                                                  </button>
                                                  <button
                                                    className="quiz-answer"
                                                    onClick={props.switchBard}
                                                  >
                                                    I can compose verses like no
                                                    one else.
                                                  </button>
                                                </div>
                                                <button
                                                  onClick={switchBackTo3}
                                                  className="back-button quiz-back"
                                                >
                                                  Back
                                                </button>
                                              </div>
                                            </>
                                          ) : (
                                            <p>nothing to see here</p>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default ClassQuiz;
