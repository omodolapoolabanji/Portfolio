import { Rerousel } from 'rerousel'
import bootstrap from '../assets/skills/bootstrap.svg'
import flask from '../assets/skills/flask.svg'
import git from '../assets/skills/git.svg'
import html from '../assets/skills/html.svg'
import javascript from '../assets/skills/javascript.svg'
import microsot from '../assets/skills/microsoft.svg'
import mongo from '../assets/skills/mongodb.svg'
import opencv from '../assets/skills/opencv.svg'
import postman from '../assets/skills/postman.svg'
import react from '../assets/skills/react.svg'
import spring from '../assets/skills/spring.svg'
import sql from '../assets/skills/sql.svg'
import unity from '../assets/skills/unity.svg'
import vertical from '../assets/skills/vertical.svg'
import { useRef } from 'react'
import styled from 'styled-components'


export default function Skills(){
    const skills = [bootstrap, flask, git, html, javascript, microsot, mongo, opencv, postman, react, spring, sql, unity, vertical]
    const ref = useRef(null)
    const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(100%/2);
    height: 100px;
    font-family: Signika;
    font-weight: bold;
    font-size: 1.5em;
    
    
    
    @media(max-width: 1150px) {
        width: 100%
    }
  `;




    return(
        <div className=' skills' >
        <h3 className="mb-4"> Skills</h3>
        <Rerousel style={{width: '100%'}} itemRef={ref}>
            <Item ref= {ref} >
                <img src={skills[0]} style={{width : '30px', height: '30px'}} alt="icons" /> 
            </Item>

            
            {skills.slice(1).map((item)=>(
                    <Item>
                    <img src={item} style={{width : '30px', height: '30px'}} alt="icons" />
                    </Item>

                
            ))}
            
        </Rerousel>
        </div>
    )
} 