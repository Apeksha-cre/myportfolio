import React from 'react'
import './ProjectCardsStyle.css';
import {FaGithub} from "react-icons/fa";



const ProjectCards = () => {
  return (
    <div className='project-cards'>
        <div className='card-container'>
        <div className='card'>
                <h3>Portfolio (React + Springboot)</h3>
                <p> full-stack portfolio project, a dazzling fusion of React and Spring Boot. With a 
                    beautifully responsive design, this portfolio showcases my skills in front-end development 
                    while incorporating a small yet robust Spring API for the "Contact Me" page, facilitating 
                    smooth user interactions and data storage. It reflects my passion for innovation and stands
                     as a testament to my commitment to crafting meaningful, full-stack solutions that leave a 
                     lasting impression. Let's embark on an exciting journey together and explore the boundless 
                     potential of this dynamic showcase!</p>
                <div className='logo'>
                    <a href='https://github.com/Apeksha-cre/myportfolio'>
                    <FaGithub size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                    </a>
                </div>
            </div>

            <div className='card'>
                <h3>Android Application (Insertion Sort)</h3>
                <p>Developed an Android Application that performs insertion sort on numbers under the Agile environment by following the scrum
                    protocols. Used the JIRA platform to track the Scrum meetings, Sprints and tickets. Prepared the CMMI Appraisals to archive</p>
                <div className='logo'>
                    <FaGithub size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                </div>
            </div>

            <div className='card'>
                <h3>Employment Matching System</h3>
                <p>Designed the Employment Matching System by the Unified Process using the concepts of OOA and OOD. Created the artifacts
and identified the different use cases and visualized the use cases with the help of UML in VisualParadigm.</p>
                <div className='logo'>
                    <FaGithub size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                </div>
            </div>

            <div className='card'>
                <h3>Myer Briggs Type indicator</h3>
                <p>Developed the Myer Briggs Type Indicator in Python using different libraries like sci-kit-learn, pandas, NumPy, imblearn, and word
cloud and performed the different Machine Learning Models such as SVM, KNN, and Logistic Regression on Jupyter Notebook. 
Implementedoversampling method to handle the imbalanced dataset</p>
                <div className='logo'>
                    <FaGithub size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                </div>
            </div>

            <div className='card'>
                <h3>Python-based Wordle game</h3>
                <p> Designed and developed a Wordle game using Python, Quart web framework and SqlLite database in the microservice architecture
using REST standards. Used NGINX for running and load balancing the replicas of the microservices</p>
                <div className='logo'>
                    <FaGithub size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                </div>
            </div>

            <div className='card'>
                <h3>Employee management web app</h3>
                <p>D Developed an employee management web platform utilizing Java Spring Framework, Hibernate, and MySQL database, providing 
comprehensive CRUD (Create, Read, Update, Delete) functionality for efficient management of employee details</p>
                <div className='logo'>
                    <FaGithub size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                </div>
            </div>

            <div className='card'>
                <h3>Covid-19 Tracking System</h3>
                <p>Created a web application system utilizing Java, Spring Boot, and servlets to track COVID-19 cases worldwide, displaying the number of 
cases in different countries along with the total global cases, all updated in real-time with specified update timestamps</p>
                <div className='logo'>
                    <FaGithub size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                </div>
            </div>

            <div className='card'>
                <h3>Online Quiz System</h3>
                <p> Developed an online quiz system using servlets, JSP, JDBC, and SQL, offering admin capabilities for adding, deleting, and modifying 
questions, and enabling students to take multiple-choice quizzes in a visually appealing Bootstrap-based interface.</p>
                <div className='logo'>
                    <FaGithub size={30} style={{color:"#17B169",marginRight:"2rem"}}/>
                </div>
            </div>

        </div>
    </div>

  )
}

export default ProjectCards