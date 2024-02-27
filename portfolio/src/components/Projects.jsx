import bootstrap from '../assets/bootstrap.svg'
import flask from '../assets/flask.svg'
import game from '../assets/game.svg'
import openai from '../assets/openai.svg'
import unity from '../assets/unity.svg'
import java from '../assets/vertical.svg' 
import mongo from '../assets/mongodb.svg'
import opencv from '../assets/opencv.svg'
import truthTable from '../assets/truthtableproject.png'
import flashcardAI from '../assets/flashcard.png'
import gamePic from '../assets/playscreen.png'
import React from 'react'


export default function Projects(){
    const projects = [{name: "Flashcard.AI", image: flashcardAI, description:"This project employs Flask, Tesseract OCR, MongoDB, OpenCV, Bootstrap, and OpenAI/'s GPT-3.5-turbo for parsing student notes into flashcards. Authentication uses WTForms, Werkzeug for password hashing, and features a RESTful API for CRUD " ,link:"https://github.com/omodolapoolabanji/AI-Flashcard", techstack: [flask, opencv, openai, mongo, bootstrap]}, {name: "Wordoodle", image: gamePic, description:"This repository holds a wordle clone I made for my CSI-C292 course's final project. It utilizes Unity and the C# language to create a doodle themed wordle clone similar to that of the NewYork Time's" ,link:"https://github.com/omodolapoolabanji/Wordoodle", techstack: [unity, game]},  {name: "Truth Table Generator", image: truthTable, description:"This repository holds my first ever project that utilizes Java's Swing library as a GUI. The truth table generator parses user inputs (propostional logic expressions) and returns a truth table" ,link:"https://github.com/omodolapoolabanji/Truth-Table-Generator-JSwing", techstack:[java] }]
    
    return(
            <section id='projects'>
            <h3 className='text-center'>
                Projects
            </h3>
            <div className='container mt-5' style={{}}>
                <div className='row'>
            {projects.map((item)=>(
                
                <div className='card col m-3'  key={item.name} style={ {width: '20rem' }}>
                     <img className='card-img-top'src= {item.image} alt="card info" />
                    <div className='card-body'>
                       
                        <div className='card-body'>
                            <h5 className='card-title'>
                                {item.name}
                            </h5>
                            <p className='card-text'>
                                {item.description}
                            </p>
                            <a href={item.link} className='btn btn-primary mb-3'>
                                Check it out!
                            </a>
                            <div className='card-footer'>
                                {item.techstack.map((icons, index)=>(
                                    <div className='tech-stack'
                                    key={index}>
                                        <img  style={{width: "30px", height:" 30px"}} src={icons} alt="icons for tech-stack employed in my projects" />
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>    
                
                </div>
            ) )}

            </div>
            </div>
            </section>
        
    )



}