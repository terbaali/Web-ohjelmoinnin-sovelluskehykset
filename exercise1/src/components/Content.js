import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCircle } from '@fortawesome/free-solid-svg-icons'

export default function Content() {
    return(
        <div className="content">
            <div className="content section">
                <Trending heading = "PÄIVÄN TIMANTTI" desc = "Nönnönnööö"/>
                <Trending heading = "PÄIVÄN TIMANTTI" desc = "Nännännäää"/>
                <Trending heading = "MAINOS" desc = "Osta osta osta"/>
            </div>
            <div className="content section flex">
                <div className="topic">
                    <TopicHeading heading = "Koronavirus"/>
                    <AddImg file = "stm.PNG" size = "100%" alt = "Sosiaali ja terveysministeriö"/>
                    <LiveContentHeading heading = "STM:Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan" />
                    <CorornaStatistic/>
                </div>
                <MostReaded/>
            </div>
        </div>
   )
}

const Trending = (props) => {
    if(props.heading == "MAINOS"){
        return(<div className="trending ad"><b>{props.heading}:</b> {props.desc}</div>)
    }
    else{
        return(<div className="trending"><b>{props.heading}:</b> {props.desc}</div>)
    }
}

const TopicHeading = (props) => {
    return(
        <h1 className="heading">{props.heading}</h1>
    )
}

const AddImg = (props) => {
    return(
        <img alt={props.alt}  width={props.size} src={props.file}/>
    )
}

const LiveContentHeading = (props) => {
    return(
        <div>
            <p style={{ color: 'crimson', marginBottom: '5px' }}><b><FontAwesomeIcon icon={faCircle}/> HS SEURAA </b></p>
            <h2 style={{ marginTop: '0' }}>
                <span style={{ color: 'rgb(9, 63, 145)'}}>Päivittyvä seuranta | </span> 
                { props.heading }
            </h2>
        </div>
    )
}

const CorornaStatistic = () => {

    const Infections = (props) => {
        return(
            <div className="flex padding5"style={{ borderBottom: '1px solid rgb(194, 194, 194)'}}>
                <div className="w120px">
                    <p className="margin0">Tartunnat</p>
                    <p className="margin0">yhteensä</p>
                    <span className="heading font25">7776</span>
                </div>
                <div>
                </div>
                <div className="w120px right">
                    <p className="margin0">Tuoreimmat</p>
                    <p className="margin0">14 päivää</p>
                    <span className="heading font25"><FontAwesomeIcon style={{ color: 'red'}}icon={faCaretUp}/> 293</span>
                </div>
                <div className="w120px right">
                    <p className="margin0">Edeltävät</p>
                    <p className="margin0">14 päivää</p>
                    <span className="heading font25">132</span>
                </div>
            </div>
        )
    }

    const Deaths = (props) => {
        return(
            <div className="flex padding5"style={{ borderBottom: '1px solid rgb(194, 194, 194)'}}>
                <div className="w120px">
                    <p className="margin0">Kuolleet</p>
                    <span className="heading font25">334</span>
                </div>
                <div>
                </div>
                <div className="w120px right">
                    <br></br>
                    <span className="heading font25"><FontAwesomeIcon style={{ color: 'red'}}icon={faCaretUp}/> 5</span>
                </div>
                <div className="w120px right">
                    <br></br>
                    <span className="heading font25">1</span>
                </div>
            </div>
        )
    }

    const Hospitalized = (props) => {
        return(
            <div className="flex padding5">
                <div className="w120px">
                    <p className="margin0">Sairaalahoidossa</p>
                    <span className="heading orange font25">5</span>
                </div>
                <AddImg file = "hospital.PNG" size = "75%" alt = "Koronapotilaita siraalahoidossa" />
            </div>
        )
    }

    return(
        <div style={{width: '550px'}}>
            <p className="margin0"><b>Koronaviruksen vaikutukset Suomessa</b></p>
            <Infections/>
            <Deaths/>
            <Hospitalized/>
        </div>
    )
}

const MostReaded = () => {
    var id = 0;

    const MostReadedContent = (props) => {
        id++;
        return(
            <li>
                <h1 className="heading mostId">{id}</h1>
                <p className="margin0"><b>{props.heading} | </b>{props.desc}</p>
            </li>
        )
    }

    return(
        <list className="sidePanel">
            <h2 className="heading mostViewed">Luetuimmat</h2>
            <MostReadedContent heading = "Rikosepäillyt" desc = "Huijau mikä huijau"/>
            <MostReadedContent heading = "HS Vantaa" desc = "qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty"/>
            <MostReadedContent heading = "Päivittyvä seuranta" desc = "qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty"/>
            <MostReadedContent heading = "Nyt.fi" desc = "qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty"/>
            <MostReadedContent heading = "Rikosepäillyt" desc = "qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty"/>
            <MostReadedContent heading = "Helsinki" desc = "qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty qwerty"/>
            <MostReadedContent heading = "Lifestyle" desc = 'Asiantuntija neuvoo:"Jos ei jaksa niin kottakaa vaan jaksaa'/>
        </list>
    )
}