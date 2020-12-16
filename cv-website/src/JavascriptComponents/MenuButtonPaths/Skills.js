import React from 'react'
import AfterEffects from "../../Images/Pngs/Skills/ae.png"
import Premiere from "../../Images/Pngs/Skills/ap.png"
import Csharp from "../../Images/Pngs/Skills/csharp.png"
import VSCode from "../../Images/Pngs/Skills/vsc.png"
import Git from "../../Images/Pngs/Skills/git.png"
import Inkscape from "../../Images/Pngs/Skills/inkscape.png"
import Intellij from "../../Images/Pngs/Skills/intellij.png"
import Java from "../../Images/Pngs/Skills/java.png"
import Javascript_Html_Css from "../../Images/Pngs/Skills/javascript_html_css.png"
import MySql from "../../Images/Pngs/Skills/mysql.png"
import Netcat from "../../Images/Pngs/Skills/netcat.png"
import OOP from "../../Images/Pngs/Skills/OOP.png"
import ReactImage from "../../Images/Pngs/Skills/react.png"
import Sublime from "../../Images/Pngs/Skills/sublime.png"
import Unity from "../../Images/Pngs/Skills/unity.png"
import Unreal from "../../Images/Pngs/Skills/unreal.png"
import VS from "../../Images/Pngs/Skills/vs.png"
import './Skills.css'




export default function Skills(){
    return (
    <div className="skills-div">
        <img className="image1" src={AfterEffects} alt="Adobe After Effects" title="Adobe After Effects"/>
        <img className="image2" src={Premiere} alt="Adobe Premiere" />
        <img className="image1" src={Csharp} alt="C#" />
        <img className="image2" src={VSCode} alt="Visual Studio Code" />
        <img className="image1" src={Git} alt="Git" />
        <img className="image2" src={Inkscape} alt="Inkscape" />
        <img className="image1" src={Intellij} alt="Intellij" />
        <img className="image2" src={Java} alt="Java" />
        <img className="image1" src={Javascript_Html_Css} alt="Html Javascript Css" />
        <img className="image2" src={MySql} alt="mySql" />
        <img className="image1" src={Netcat} alt="netcat" />
        <img className="image2" src={OOP} alt="Object Oriented Programming" />
        <img className="image1" src={ReactImage} alt="React" />
        <img className="image2" src={Sublime} alt="Sublime Text" />
        <img className="image1" src={Unity} alt="Unity" />
        <img className="image2" src={Unreal} alt="Unreal Engine" />
        <img className="image1" src={VS} alt="Visual Studio" />
    </div>)
}