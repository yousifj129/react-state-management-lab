// src/App.jsx

import { useState } from "react";
import "./App.css"

const App = () => {
  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ])
  function getTotalStrength(team){
    let totalStrength = 0
    team.forEach((member)=>{
      totalStrength += member.strength
    })
    return totalStrength
  }

  function getTotalAgility(team){
    let toolAgility = 0
    team.forEach((member)=>{
      toolAgility += member.agility
    })
    return toolAgility
  }
  function handleAddFighter(zombieFighter) {
    if(money < zombieFighter.price){
      return;
    }
    setMoney(money - zombieFighter.price)
    const newTeam = [...team, zombieFighter]
    setTeam(newTeam)


    const newZombieFighters = [...zombieFighters]
    const index = newZombieFighters.indexOf(zombieFighter)
    newZombieFighters.splice(index,1)

    setZombieFighters(newZombieFighters)
  }
  
  function handleRemoveFighter(zombieFighter) {
    setMoney(money + zombieFighter.price)

    const newZombieFighters = [...zombieFighters, zombieFighter]
    newZombieFighters.sort((a,b)=>{
      return a.id - b.id
    })
    setZombieFighters(newZombieFighters)

    const newTeam = [...team]
    const index = newTeam.indexOf(zombieFighter)
    newTeam.splice(index,1)
    setTeam(newTeam)

  }
  return (
    <>

      <h1>zombie something fighter game!! 😈</h1>
      <h2>current money: {money}</h2>
      <h2>total strength: {getTotalStrength(team)}</h2>
      <h2>total agility: {getTotalAgility(team)}</h2>
      {team.length == 0 ? <h2>Pick some team members!</h2> : <>
      <ul>
        {team.map((zombieFighter)=>{
          return <li key={zombieFighter.id}>
            <img src={zombieFighter.img} alt={zombieFighter.id} />
            <h3>name: {zombieFighter.name}</h3>
            <p>price: {zombieFighter.price}</p>
            <p>strength: {zombieFighter.strength}</p>
            <p>agility: {zombieFighter.agility}</p>
            <button onClick={()=>{
              handleRemoveFighter(zombieFighter)
            }}>Remove Character</button>
            </li>
        })}
      </ul>
      </>}
      <hr />
      <ul>
        {zombieFighters.map((zombieFighter) => {
          return (<li key={zombieFighter.id}>
            <img src={zombieFighter.img} alt={zombieFighter.id} />
            <h3>name: {zombieFighter.name}</h3>
            <p>price: {zombieFighter.price}</p>
            <p>strength: {zombieFighter.strength}</p>
            <p>agility: {zombieFighter.agility}</p>
            <button onClick={()=>{
              handleAddFighter(zombieFighter)
            }}>Add Character</button>
          </li>)
        })}
      </ul>

    </>
  );
}

export default App