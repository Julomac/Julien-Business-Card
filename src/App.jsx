

import './App.css'

function App() {
  
  return (
    <main>
      <img className="profile-pic" src="./images/profile-picture.jpg" />
      <div className='card-main'>
        <h1 className='name'>Julien Jean Baptiste</h1>
        <h2 className='job'>Front End Developer</h2>
        <p className='website'>Julien Portfolio'website(here)</p>
        <div className='buttons'>
          <a href="mailto:jjeanbaptiste@albertus.edu">
            <button className='mail-button'>
              <img src="./images/mail.png" alt="" />
              <p>Email</p>
            </button>
          </a>
        <a href="https://www.linkedin.com/in/julien-jean-baptiste-b20b94173/">
          <button className='linkedin-button'>
            <img src="./images/linkedin.png" alt="" />
            <p>LinkedIn</p>
          </button>
        </a>
        </div>
        <h3 className='subtitle'>About</h3>
        <p className='text'>I am a Front end Developer that enjoy creating website. I have a bachelor degree in
         Computer Information System.I have work with a lot of technology inlcuding HTML, CSS, JavaScrip, and React.
         I am currently in the process of finding a full Time Job as a junior developer</p>

        <h3 className='subtitle'>Interests</h3>
        <p className='text'>When I am not coding I enjoy the outdoors and spending time with my family,
         I enjoy playing all sports and is always looking for way to stay active. I also loves animals but dog are my favorite.
        activities.</p>
      </div>
      <footer>
        <img className='social-icon' src="./images/twitter.png" alt="twitter-icon" />
        <img className='social-icon' src="./images/facebook.png" alt="facebook-icon" />
        <img className='social-icon' src="./images/github.png" alt="github-icon" />
        <img className='social-icon' src="./images/instagram.png" alt="instagram-icon" />
      </footer>
    </main>
  )
}

export default App
