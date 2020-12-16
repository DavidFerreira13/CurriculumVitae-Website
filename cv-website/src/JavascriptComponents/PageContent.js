import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AboutMe from './MenuButtonPaths/AboutMe';
import ContactMe from './MenuButtonPaths/ContactMe';
import EducationalHistory from './MenuButtonPaths/EducationalHistory';
import Hobbies from './MenuButtonPaths/Hobbies';
import Portfolio from './MenuButtonPaths/Portfolio';
import ProfessionalExperience from './MenuButtonPaths/ProfessionalExperience';
import Skills from './MenuButtonPaths/Skills';
import MainPage from "./MainPage";

export default function PageContent(){
    return (
    <nav className="main-content">
        <Switch>                        
            <Route path="/about-me"                 component={AboutMe} />
            <Route path="/educational-history"      component={EducationalHistory} />
            <Route path="/skills"                   component={Skills} />
            <Route path="/professional-experience"  component={ProfessionalExperience} />
            <Route path="/portfolio"                component={Portfolio} />
            <Route path="/hobbies"                  component={Hobbies} />
            <Route path="/contact-me"               component={ContactMe} />
            <Route path="/"                         component={MainPage} />
        </Switch>      
    </nav>
    )
}