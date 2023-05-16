import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function BackgroundAlignment(props) {

    const [alignment, setAlignment] = useState("lawful good")
    const [background, setBackground] = useState("acolyte")

    const navigate = useNavigate();

    function handleAlignmentChange(e) {
        e.preventDefault()
        setAlignment(e.target.value)
    }

    function handleBackgroundChange(e) {
        e.preventDefault()
        setBackground(e.target.value)
    }

    function descriptionSwitch(param) {
        switch(param) {
            case `acolyte`:
                return ` As an Acolyte you have spent your life in religious study and service. You have extensive knowledge of religious rituals, texts, and traditions.`
            case `criminal`:
                 return `You have a history with illicit activities. You might have been a thief, a smuggler, or a member of an organized crime syndicate.`
            case `entertainer`:
                return `You have a background in performing arts and entertainment. You may be a musician, actor, dancer, or any other type of performer.`
            case `folk hero`:
                return `You have achieved fame or recognition among common folk for their heroic deeds. You may have stood up against an oppressive ruler, defended your village from a monster, or led a rebellion.`
            case `hermit`:
                return `You have chosen a life of solitude and seclusion, seeking spiritual enlightenment or escaping the complexities of society. Hermits have spent an extended period in isolation, living in remote places such as mountains, forests, or temples.`
            case `noble`:
                return `You come from a wealthy and influential family or have a high social status. You are accustomed to a life of privilege and have connections to powerful individuals or organizations.`
            case `sage`:
                return `You have dedicated your life to the pursuit of knowledge and academic study. You are a scholar, researcher, or expert in a specific field of study.`
            case `soldier`:
                return `You have served in a military organization or fought in wars. You have undergone rigorous training and possess combat skills and discipline.`
            case `urchin`:
                return `You grew up in the streets, surviving through wit and resourcefulness. You may have been an orphan or a runaway, living in poverty and navigating the urban environment.`
        }
    }

    function submitHandler(e) {
        e.preventDefault()

        const storedToken = localStorage.getItem("authToken")
        const body = {background, alignment, backstory: []}

        axios.put(`http://localhost:5005/character/update/${props.id}`, body,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                console.log(response)
                navigate("/backstory")
            })
    }

    return(
        <>
        <div className="character-topbox"></div>
        <form className="character-form" onSubmit={submitHandler}>

            <select className="character-creation-select" name="alignment" onChange={handleAlignmentChange}>
                <option value="lawful good">Lawful Good</option>
                <option value="neutral good">Neutral Good</option>
                <option value="chaotic good">Chaotic Good</option>
                <option value="lawful neutral">Lawful Neutral</option>
                <option value="neutral">Neutral</option>
                <option value="chaotic neutral">Chaotic Neutral</option>
                <option value="lawful evil">Lawful Evil</option>
                <option value="neutral evil">Neutral Evil</option>
                <option value="chaotic evil">Chaotic Evil</option>
            </select>

            <select className="character-creation-select" name="background" onChange={handleBackgroundChange}>
                <option value="acolyte">Acolyte</option>
                <option value="criminal">Criminal</option>
                <option value="entertainer">Entertainer</option>
                <option value="folk hero">Folk Hero</option>
                <option value="hermit">Hermit</option>
                <option value="noble">Noble</option>
                <option value="sage">Sage</option>
                <option value="soldier">Soldier</option>
                <option value="urchin">Urchin</option>
            </select>

            <p className="description">{descriptionSwitch(background)}</p>
            
            <div className="button-box">
                    <button className="back-button">Back</button>
                    <button className="continue-button" onClick={submitHandler}>Continue</button>
                </div>
        </form>
        </>
    )
}

export default BackgroundAlignment