import {useParams } from 'react-router-dom';
import UsersCalendar from "./UsersCalendar";
import UpcomingRuns from './UpcomingRuns.js';
import firebase from '../firebase';
import { useEffect, useState } from 'react';
import '../usersCalendar.css'
// import Stats from './Stats';

function Dashboard(){
  const [updateName, setUpdateName] = useState({});

  const {userId}  = useParams()
  const user = useParams()

    useEffect( () => {

      const dbRef = firebase.database().ref(`/sample/${user.userId}`);

      dbRef.on('value', (response) => {
      
          const data = response.val();
          setUpdateName(data)
      })   
      
    }, [user.userId])
    
  return (
    <section className="card-full">
      <div className="flex dashboard-welcome">
        <h1 className="title-cont">Hello, {updateName.name} </h1>
      </div>

      <div className="flex dashboard">
        <UpcomingRuns/>
        <UsersCalendar userId={userId} />
      </div>
    </section>  
  )
}

export default Dashboard;

