import img from '../assets/dolapo.png';
import resume from '../assets/OMODOLAPO_OLABANJI.pdf'
export default function Hero() {

    const downloadButton = async () =>{
        try{
            const response = await fetch(resume)
            const blob = await response.blob()
            const link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = 'Dolapo\'s_resume.pdf'
            link.click()
        }catch(error){
            console.log(error)
        }

    }
    

    return(
        <section id='Hero'>
            <div>
                <h3>Hello, My name is</h3>
                <h1>Omodolapo Olabanji</h1>
                <div>
                    <p> I am an aspiring <span id="type-writer"></span></p>
                </div>
                <div>
                    <p>
                        
Welcome to my portfolio! I'm an undergraduate instructor and aspiring software engineer with a keen interest in Machine Learning and AI. Specializing in backend and fullstack development, I've built projects using Flask, ReactJS, and Bootstrap.

My coursework in Data Structures, Algorithms, and Object-Oriented Design has refined my problem-solving skills. I've also delved into Game and WebApp Development, mastering languages like Python, Java, C, C#, JavaScript, and SQL.

Proficient in Git, Postman, Unix, Unity, and Adobe XD, I prioritize best practices, conduct unit tests, and bring critical thinking to software development. From ReactJS and Flask to Java Swing and Spring Boot, my toolkit is diverse, reflecting my commitment to excellence in every line of code. Join me as I navigate the ever-evolving field of software engineering.
                    </p>
                </div>

            </div>
            <div>
                <img src={img} alt="This is an image of me in pixel art form:)"/>

            </div>
            <div className='resume_button'>
                <button className= 'btn btn-primary m-2 ' type='button' onClick={downloadButton} >
                    Download Resume
                </button>
            </div>
        </section >

    )
}




    
    


