import React,{useState} from 'react'; 
import './AddStudent.css'

const AddStudent = (props) => {
    const [enteredText, setenteredText] = useState('')
    

    //set the value of the studentname
    const enteredTextHandler = (event) => {
            setenteredText(event.target.value)
        }
    
    //when the add student button is clicked, add the entered text of student input to the array of students. 
    const addStudent = (event) => {
        event.preventDefault(); 

        const newStudent = {
            id: Math.random(), 
            name: enteredText
        }

        console.log(newStudent)
        props.onAddStudent(newStudent)
        setenteredText('')
    }

    //hide the add student component when the anchor text is clicked. 
    const backToDashboard = () => {
        props.onAddButton()
    }
    
    //when the delete button is clicked, remove the student from the array
    const deleteClicked = () => {
        props.onDeleteButton(props.student)

    }

    return (
        <div>
        <div className="backtodashboardlink">
            <a onClick={backToDashboard}> Back to Dashboard </a>
        </div>
        
            <div className="two column row" style={{display: 'flex',justifyContent:'space-around'}}>
                <div className ="column">
                    <div className="ui card add-editstudentcard" id="addstudentcard">
                        <div className="add-student-form">
                            <h2>Add Student</h2>
                            <form className="ui form" onSubmit={addStudent}>
                                <div className="field">
                                    <label>Name</label>
                                    <input type="text" placeholder="Student Name" value={enteredText} onChange={enteredTextHandler}/>
                                </div>
                                <button className="ui button" >Add Student</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui card add-editstudentcard" id="editstudentcard">
                        <div className="edit-student-form">
                                <h2>Delete Student</h2>
                                <br/>
                                <div className="row">
                                     <h2>{props.student}</h2>
                                </div>
                                <button className="ui button" onClick={deleteClicked}>Delete Student</button>
                               
                        </div>

                    </div>
                </div>
        

            </div>
            
            
            
        </div>
    )

}

export default AddStudent