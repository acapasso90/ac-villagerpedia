import React from "react";

export default function VillagerInfo(props){
    const villager = props.data[1]
    const name = villager.name[`name-EUen`];
    const icon = villager[`icon_uri`];
    const birthday = villager[`birthday-string`];
    const personality = villager.personality;
    const hobby = villager.hobby;
    const saying = villager.saying;
    const catchphrase = villager[`catch-phrase`];
    const bubbleColor = villager[`bubble-color`];
    const textColor = villager[`text-color`];
    const image = villager[`image_uri`];
    const species = villager.species;
    // Checks if it's Birthday, if it is display's "its villager's birthday" instead of "villager"
    const isBday = (props.birthday === "yes");
    let displayname = name;
    if (isBday) {displayname = `Today is ${name}'s birthday!`}
    const noScroll = document.querySelector('html');

function showInfo(){
    const hiddenInfo = document.querySelector(`.hidden${name.replace(" ", "-")}`);
    const blackout = document.querySelector('.blackout');
    hiddenInfo.style.display = "block";
    blackout.style.display = "block";
    noScroll.classList.add('noScroll');
}

function hideInfo(){
    const hiddenInfo = document.querySelector(`.hidden${name.replace(" ", "-")}`);
    const blackout = document.querySelector('.blackout');
    hiddenInfo.style.display = "none";
    blackout.style.display = "none";
    noScroll.classList.remove('noScroll');
}


return( 
    <div className="VillagerInfo" >
        
        <img src={icon} alt={name} className="villagerIcon" onClick={showInfo}/>
        {displayname}

        <div className={`hidden${name.replace(" ", "-")}`} id="hiddenInfo" style={{color: textColor, border: `5px solid ${textColor}`, backgroundColor: bubbleColor, display: "none"}}>
            <div className="row">
                <div className="column">
                    <img src={image} alt={name} className="villagerImage" style={{color: textColor, border: `5px solid ${textColor}`}} />
                    <h1> {name} </h1>
                </div>
                <div className="column">
                <ul>
                        <li style={{fontSize: "18pt"}}> {personality} {species} </li>
                        <li>Birthday: {birthday}</li>
                        <li>Catchphrase: "{catchphrase}"</li>
                        <li>Saying: "{saying}"</li>
                        <li>Hobby: {hobby}</li>
                    </ul>
                </div>
                    <button onClick={hideInfo}> Back </button>
            </div>
        </div> 
    </div>
)
}