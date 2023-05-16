import { useState, useEffect } from "react"
import axios from "axios"

import StatCard from "./StatCard"

function Stats(props) {

    const [str, SetStr] = useState(10)
    const [strmod, SetStrmod] = useState(0)
    const [dex, SetDex] = useState(10)
    const [dexmod, SetDexmod] = useState(0)
    const [con, SetCon] = useState(10)
    const [conmod, SetConmod] = useState(0)
    const [int, SetInt] = useState(10)
    const [intmod, SetIntmod] = useState(0)
    const [wis, SetWis] = useState(10)
    const [wismod, SetWismod] = useState(0)
    const [cha, SetCha] = useState(10)
    const [chamod, SetChamod] = useState(0)

/*     --------- stat change effect handlers -------- */

    useEffect(() => {
        if(str === 9){
            SetStrmod(-1)
        }
        if(str === 10 || str === 11){
            SetStrmod(0)
        }
        if(str === 12 || str === 13){
            SetStrmod(1)
        }
        if(str === 14 || str === 15){
            SetStrmod(2)
        }
        if(str === 16 || str === 17){
            SetStrmod(3)
        }
        if(str === 18){
            SetStrmod(4)
        }
    }, [str])

    useEffect(() => {
        if(dex === 9){
            SetDexmod(-1)
        }
        if(dex === 10 || dex === 11){
            SetDexmod(0)
        }
        if(dex === 12 || dex === 13){
            SetDexmod(1)
        }
        if(dex === 14 || dex === 15){
            SetDexmod(2)
        }
        if(dex === 16 || dex === 17){
            SetDexmod(3)
        }
        if(dex === 18){
            SetDexmod(4)
        }
    }, [dex])

    useEffect(() => {
        if(con === 9){
            SetConmod(-1)
        }
        if(con === 10 || con === 11){
            SetConmod(0)
        }
        if(con === 12 || con === 13){
            SetConmod(1)
        }
        if(con === 14 || con === 15){
            SetConmod(2)
        }
        if(con === 16 || con === 17){
            SetConmod(3)
        }
        if(con === 18){
            SetConmod(4)
        }
    }, [con])

    useEffect(() => {
        if(int === 9){
            SetIntmod(-1)
        }
        if(int === 10 || int === 11){
            SetIntmod(0)
        }
        if(int === 12 || int === 13){
            SetIntmod(1)
        }
        if(int === 14 || int === 15){
            SetIntmod(2)
        }
        if(int === 16 || int === 17){
            SetIntmod(3)
        }
        if(int === 18){
            SetIntmod(4)
        }
    }, [int])

    useEffect(() => {
        if(wis === 9){
            SetWismod(-1)
        }
        if(wis === 10 || wis === 11){
            SetWismod(0)
        }
        if(wis === 12 || wis === 13){
            SetWismod(1)
        }
        if(wis === 14 || wis === 15){
            SetWismod(2)
        }
        if(wis === 16 || wis === 17){
            SetWismod(3)
        }
        if(wis === 18){
            SetWismod(4)
        }
    }, [wis])

    useEffect(() => {
        if(cha === 9){
            SetChamod(-1)
        }
        if(cha === 10 || cha === 11){
            SetChamod(0)
        }
        if(cha === 12 || cha === 13){
            SetChamod(1)
        }
        if(cha === 14 || cha === 15){
            SetChamod(2)
        }
        if(cha === 16 || cha === 17){
            SetChamod(3)
        }
        if(cha === 18){
            SetChamod(4)
        }
    }, [cha])

  /*   --------- Stat change functions -------- */

    function strengthChange(op) {
        let strNew = str
        if(op === "+" && str < 18) {
            SetStr(strNew+=1)
            } else if(op === "-" && str > 8) {
                SetStr(strNew-=1)
            }
            
        }

    function dexterityChange(op) {
        let dexNew = dex
        if(op === "+" && dex < 18) {
            SetDex(dexNew+=1)
            } else if(op === "-" && dex > 8) {
                SetDex(dexNew-=1)
            }
            
        }

    function constitutionChange(op) {
        let conNew = con
        if(op === "+" && con < 18) {
            SetCon(conNew+=1)
            } else if(op === "-" && con > 8) {
                SetCon(conNew-=1)
            }
            
        }

    function intelligenceChange(op) {
        let intNew = int
        if(op === "+" && int < 18) {
            SetInt(intNew+=1)
            } else if(op === "-" && int > 8) {
                SetInt(intNew-=1)
            }
            
        }

    function wisdomChange(op) {
        let wisNew = wis
        if(op === "+" && wis < 18) {
            SetWis(wisNew+=1)
            } else if(op === "-" && wis > 8) {
                SetWis(wisNew-=1)
            }
            
        }

    function charismaChange(op) {
        let chaNew = cha
        if(op === "+" && cha < 18) {
            SetCha(chaNew+=1)
            } else if(op === "-" && cha > 8) {
                SetCha(chaNew-=1)
            }
            
        }
    
    function submitHandler() {

        const storedToken = localStorage.getItem("authToken")
        const body = {stats: {str, strmod, dex, dexmod, con, conmod, int, intmod, wis, wismod, cha, chamod}}

        axios.put(`http://localhost:5005/character/update/${props.id}`, body,
        { headers: { Authorization: `Bearer ${storedToken}`}}
        )
            .then(response => {
                console.log(response)
                props.changeComponents3()
            })
    }
    

    return (
        <>
            <div className="character-topbox"></div>

            <div className="character-form">
            
            <div className="stat-box-large">
                <div className="stat-box-small">
                <p className="stat-heading">Strength</p>
                    <div className="stat-box">
                    <StatCard statname={"Strength"}stat={str} mod={strmod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => strengthChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => strengthChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
                <div className="stat-box-small">
                <p className="stat-heading">Dexterity</p>
                    <div className="stat-box">
                    <StatCard statname={"Dexterity"}stat={dex} mod={dexmod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => dexterityChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => dexterityChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
            </div>

            <div className="stat-box-large">
                <div className="stat-box-small">
                <p className="stat-heading">Constitution</p>
                    <div className="stat-box">
                    <StatCard statname={"Constitution"}stat={con} mod={conmod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => constitutionChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => constitutionChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
                <div className="stat-box-small">
                <p className="stat-heading">Intelligence</p>
                    <div className="stat-box">
                    <StatCard statname={"Intelligence"}stat={int} mod={intmod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => intelligenceChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => intelligenceChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
            </div>
            
            <div className="stat-box-large">
                <div className="stat-box-small">
                <p className="stat-heading">Wisdom</p>
                    <div className="stat-box">
                    <StatCard statname={"Wisdom"}stat={wis} mod={wismod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => wisdomChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => wisdomChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
                <div className="stat-box-small">
                <p className="stat-heading">Charisma</p>
                    <div className="stat-box">
                    <StatCard statname={"Charisma"}stat={cha} mod={chamod}/>
                    <div className="stat-buttons">
                        <button className="stat-button" onClick={() => charismaChange("+")}>+</button><button className="stat-button stat-minus" onClick={() => charismaChange("-")}>-</button>
                    </div>
                    </div>               
                </div>
            </div>
                
                <div className="button-box">
                    <button className="back-button">Back</button>
                    <button className="continue-button" onClick={submitHandler}>Continue</button>
                </div>
            </div>
        </>
    )
}

export default Stats