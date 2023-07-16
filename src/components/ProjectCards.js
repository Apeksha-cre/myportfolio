import React from 'react'
import './ProjectCardsStyle.css';
import {FaGithub} from "react-icons/fa";



const ProjectCards = () => {
  return (
    <div className='project-cards'>
        <div className='card-container'>
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
        </div>
    </div>

  )
}

export default ProjectCards