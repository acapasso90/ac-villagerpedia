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

    const noScroll = document.querySelector('html');

function showInfo(){
    const hiddenInfo = document.querySelector(`.hidden${name.replace(" ", "-")}`);
    hiddenInfo.style.display = "block";
    noScroll.classList.add('noScroll');
}

function hideInfo(){
    const hiddenInfo = document.querySelector(`.hidden${name.replace(" ", "-")}`);
    hiddenInfo.style.display = "none";
    noScroll.classList.remove('noScroll');
}


return( 
    <div className="VillagerInfo" >
          
        <img src={icon} alt={name} className="villagerIcon" onClick={showInfo}/>
        {name}
        <div className={`hidden${name.replace(" ", "-")}`} id="hiddenInfo" style={{color: textColor, border: `5px solid ${textColor}`, backgroundColor: bubbleColor, display: "none"}}>
            <div className="row">
                <div className="column">
                    <img src={image} alt={name} className="villagerImage" />
                    <h1> {name} </h1>
                </div>
                <div className="column">
                <ul>
                        <li>{personality} {species}</li>
                        <li>Birthday: {birthday}</li>
                        <li>Catchphrase: "{catchphrase}"</li>
                        <li>Saying: "{saying}"</li>
                        <li>Hobby: {hobby}</li>
                    </ul>
                </div>
                <div className="column">
                    <button onClick={hideInfo}> Back </button>
                </div>
            </div>
        </div> 
    </div>
)
}