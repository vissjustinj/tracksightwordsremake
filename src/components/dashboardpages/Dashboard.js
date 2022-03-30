import React,{useState} from 'react'
import Header from './Header'
import SideStudentList from './SideStudentList'
import AddStudent from './addstudentcomponents/AddStudent'

const Dashboard = () => {
    const [myStudents,setmyStudents] = useState([
        {id: 1, name: 'Justin'},
        {id: 2, name: 'Isaac'}, 
        {id: 3, name: 'Dave'}, 
        {id: 4, name: 'Adam'}, 
        {id: 5, name: 'CoonDog'},
        {id: 6, name: 'Cory'},
        {id: 7, name: 'Soy'}
      ])
    
    //change the selected student for the app
    const [selectedstudent, setselectedstudent] = useState('Select a Student from the Left Sidebar')
    const changeSelectedStudent = (student) => {
        setselectedstudent(student)
    }

    //add a student to the mystudents array 
    const addStudentHandler = (newstudent) => {
        
        setmyStudents(
            myStudents.concat(newstudent)
        )
    }

    //toggle the showing of the addstudents page 
    const [showAddStudentPage, setshowAddStudentPage] = useState(false)
    const toggleAddStudentPage = () => {
        setshowAddStudentPage(!showAddStudentPage)
    }

    //delete a student from the array 
    const deleteStudent = (student) => {
        //find the index of the student's name in array 
        let index = myStudents.findIndex((element) => element.name == student)
        console.log(index)
        let filteredstudents = myStudents.filter((element) => element.name !== student)
        let removedstudent = myStudents.splice(index,1)
        console.log(`removed ${removedstudent}`)
        setmyStudents(filteredstudents)
        setselectedstudent('Select a Student from the Left Sidebar')
    }

    //render the app
    if (showAddStudentPage) {
        return (
            <div>
                <Header />
                <div className="DashboardContent">
                    <SideStudentList students={myStudents} onAddButton={toggleAddStudentPage} onClickStudent={changeSelectedStudent}/>
                    <AddStudent onAddStudent={addStudentHandler} onAddButton={toggleAddStudentPage} student={selectedstudent} onDeleteButton={deleteStudent}/>
                </div>
            </div>
        )
    } 
    else if (!showAddStudentPage) {
        return (
            <div>
            <Header />
                <div className="DashboardContent">
                    <SideStudentList students={myStudents} onAddButton={toggleAddStudentPage} onClickStudent={changeSelectedStudent}/>
                    This is the dashboard
                </div>
            </div>
            )
    }
    
}

export default Dashboard