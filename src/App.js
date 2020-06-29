import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/Main';



function App() {
  return (

    <div className="big-demo-content">
    <Layout fixedHeader>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className="page-content">
            <Main/>
          </div>
        </Content>
    </Layout>
</div>
    
  );
}

export default App;
