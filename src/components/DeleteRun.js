import React from 'react'
import {useState, useEffect} from 'react'
import firebase from '../firebase';


function DeleteRun(props) {

        // function to remove run from database
        function removeRun(removeItemId) {
            
            const user = props.userInfo
            // if theres is a key property of runs then run the following functions
            if(user.runs){
                // copy the old array
                let oldRunArray = [...user.runs]
                // filter the run that needs to be deleted by returning the elements whose id is not equal to the selected element
                const filteredArray = oldRunArray.filter(run=> run.id !== removeItemId)
                // creating an object with the filtered array.
                const runObj = {
                    runs: filteredArray
                }
                // updating the runs array in the firebase with the new filtered array of runs.
                props.runReRender(filteredArray)
                firebase.database().ref(`/sample/${props.userId}`).update(runObj);
                // rerendering the runs in the dom with the new array.
            }else{
                console.log('nothing to remove')
            }
        }
    return (
        <button className="runs-item" onClick={() => removeRun(props.run.id)}>
            <i className="fas fa-times"></i>
        </button>
    )
}

export default DeleteRun
