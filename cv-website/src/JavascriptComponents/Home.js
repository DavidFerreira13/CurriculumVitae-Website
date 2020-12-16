import React from 'react';
import PageContent from './PageContent';
import UpperBar from './UpperBar'
import '../Css/HomeTopBar.css';
import '../Css/Footer.css';

function Home() {
    return (
        <div>
          <UpperBar/>      
          <PageContent style={{flexGrow: 1}}/>           
          <footer className="page-footer">
              <p className="footer-text">
                  This web-curriculum was made with react for the purpose of learning how to use it
              </p>
          </footer>
        </div>
    )
}

export default Home;