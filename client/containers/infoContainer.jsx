import React from 'react';
import { useSelector } from 'react-redux';

const InfoContainer = () => {
  return(
    <div className="imageContainer">
        <div>
            <img className="infoImage" src='https://ehq-production-us-california.imgix.net/2930b618d947ec9174d37ed41ca9c591b7b365f3/photos/images/000/003/914/original/GEDC0700.jpg?auto=compress'/>
            <p className="ratedCategory" >safety</p>
        </div>
        <div>
            <img className="infoImage" src='https://newyorkyimby.com/wp-content/uploads/2023/02/IMG-3521-1024x768.jpg'/> 
            <p className="ratedCategory" >scenery</p>
        </div>
        <div>
            <img className="infoImage" src='https://ddot.dc.gov/sites/default/files/dc/sites/ddot/page_content/images/_J_43049_original.jpg?itok=XuwsMy3Q'/>
            <p className="ratedCategory" >infrastructure</p>
        </div>     
    </div> 
  )
}



export default InfoContainer;