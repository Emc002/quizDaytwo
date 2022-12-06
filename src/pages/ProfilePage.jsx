import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/mainStyles.css'
import { useParams } from 'react-router-dom';



const ProfilePage = () => {
  const { nama } = useParams();
  return (
    <div class="container-fluid WESC ">
      <div class="col-12">
      <h1>{nama}</h1>

        <p>In modern physics, the double-slit experiment is a 
          demonstration that light and matter can display characteristics of both classically 
          defined waves and particles; moreover, it displays the fundamentally probabilistic nature of 
          quantum mechanical phenomena. This type of experiment was first performed by Thomas Young in 1802, as a 
          demonstration of the wave behavior of visible light At that time it was thought that light consisted of 
          either waves or particles. With the beginning of modern physics, about a hundred years later, it was realized 
          that light could in fact show behavior characteristic of both waves and particles. In 1927, Davisson and Germer 
          demonstrated that electrons show the same behavior, which was later extended to atoms and molecules. Thomas Young's 
          experiment with light was part of classical physics long before the development of quantum mechanics and the concept of wave particle 
          duality. He believed it demonstrated that the wave theory of light was correct, and his experiment is sometimes referred to as Young's 
          experiment or Young's slits.</p>
      </div>
    </div>
  );
}



export default ProfilePage;