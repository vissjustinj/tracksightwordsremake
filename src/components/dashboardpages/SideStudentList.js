import React from 'react'
import './SideStudentList.css'

const SideStudentList = (props) => {
    
    //when the add/edit button is clicked, show or hide the add student component 
    const addStudentButtonClicked = () => {
    
        props.onAddButton()
        
    }

    //when a student is clicked, change that student to the selected student for the app. 
    const selectStudent = (event) => {
        props.onClickStudent(event.target.text)
    }

    return (
        <div className="ui vertical menu" id="studentsidebar">
            <div className="item" id="studentheader">
                My Students
                <button className="ui button" id="addstudentbutton" onClick={addStudentButtonClicked}>Add/Edit</button>
            </div>

            {
                props.students.map((student) => {
                    return(
                        <a className="item" onClick={selectStudent} key={student.id}>
                            {student.name}
                        </a>
                    )
                    
                })
            }
            
        </div>
    )
}

export default SideStudentList