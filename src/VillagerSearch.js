import axios from "axios";
import React, {useState, useEffect} from "react";
import VillagerInfo from "./VillagerInfo";
import leafIcon from './images/leaficon.png'

export default function VillagerSearch(){
const [loaded, setLoaded] = useState(false);
const [villagerData, setVillagerData] = useState();
const [searchterm, setSearchterm] = useState("");

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
month = monthNames[month];
let today = `${month} ${day}`;

function setVillagers(response){
    setVillagerData(Object.entries(response.data));
    setLoaded(true);
}

function handleSubmit(event){
  event.preventDefault();
}


function setSearch(event){
  setSearchterm(event.target.value.toLowerCase());
  console.log(searchterm)
}

useEffect(() => {
    let mounted = true;
    const cancelTokenSource = axios.CancelToken.source();
   if (mounted) {
        axios.get(`http://acnhapi.com/v1/villagers/`, {  
        cancelToken: cancelTokenSource.token
      }).then(setVillagers);}
    return function cleanup() {
      mounted = false
      cancelTokenSource.cancel();
  }}, []);


    if (loaded) { 
        var totalVillagers = villagerData.length;
        return( 
          <div className="VillagerSearch">
              <header>
                <div className="row">
                  <div className="headerCol">
                    <div className="row">
                      <img src={leafIcon} alt="leaficon" className="leafIcon" />
                      <h2> Villagerpedia </h2>
                    </div>
                  </div>
                  <div className="headerCol">
                      <form onSubmit={handleSubmit}>
                      <input type="text" onChange={setSearch} placeholder="Search by Name or Species" />
                      </form>
                  </div>
                </div>
             </header>
          <div className="grid"> 
           { villagerData.slice(0, totalVillagers).map( 
                function(villager, index) {
                  const name = villager[1].name[`name-EUen`].toLowerCase();
                  const species = villager[1].species.toLowerCase();
                  const birthday = villager[1][`birthday-string`];
                  if (name.includes(searchterm) || species.includes(searchterm)){
                    if (birthday.includes(today)){
                      return ( 
                        <div className="birthday" key={index}>
                          <img src={villager[1][`icon_uri`]} className="villagerIcon" alt={name} />
                          <p> It's {villager[1].name[`name-EUen`]}'s Birthday! </p>
                        </div>)
                    }
                                    
                    return(
                      <VillagerInfo data={villager} key={index}  />)
                      
                  }
                    else {        return(
                     null)}
                }
            )}
            </div>
            </div>
        )

      }
    else {
       return("not loaded");
   }
}