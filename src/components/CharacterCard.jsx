import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom";

function CharacterCard(props) {

    /* const [id, setId] = useState(props.data._id) */

    /* function deleteCharacter() {
        const storedToken = localStorage.getItem("authToken")
        const body = {id : props.data._id, backstoryId: props.data.backstory[0], userId: props.userId}

        axios.post(`${import.meta.env.VITE_API_URL}/character/delete`, body,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(() => {
                props.getUser()
            })
    } */


    return(
        <>  
            <div className="character-card">
                <Link className="character-flex" to={`/characterSheet/${props.id}`}>
                    <p>clickme</p>
                    {/* <p className="character-name">{props.data.name}</p>
                    <p className="character-class">{props.data.class.slice(0,1).toUpperCase()+props.data.class.slice(1)}</p> */}
                </Link>
                <button className="character-delete" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"> X </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this character?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn modal-close" data-bs-dismiss="modal">No</button>
                            <button /* onClick={deleteCharacter} */ type="button" className="btn delete-character" data-bs-dismiss="modal">Yes</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CharacterCard