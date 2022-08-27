import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <nav>
      <div className="wrapper">
        <div className="logo">
          <a href="">Portofolio</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#lifestyle">Lifestyle</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="" className="tbl-biru">
                My Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="wrapper">
      {/* home */}
      <section id="home">
        <img src="images/Image 2022-07-27.jpeg" width={200} />
        <div className="kolom">
          <p className="deskripsi">Hello, a bit about me.</p>
          <h2>A Scorpio girl who loves music, watching movies and travel.</h2>
          <p>
            My name is Fina Dwi Landari. I am currently 21 years old, I am the
            first of three siblings. I am a student who is taking the final
            semester in the accounting department of Mataram University.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ipsum?
          </p>
          <p>
            <a href="" className="tbl-kuning">
              Pelajari Lebih Lanjut
            </a>
          </p>
        </div>
      </section>
      {/* lifestyle*/}
      <section id="lifestyle">
        <div className="kolom">
          <p className="deskripsi">This is my style</p>
          <h2>student</h2>
          <p>
            Diet is one element of health. Diet includes meal times, meal
            portions, and types of food. During this time, there are still many
            people who do not understand a good diet. Many have irregular eating
            patterns. Some eat late, the portions are not balanced, and the food
            they eat is unhealthy. Healthy foods include carbohydrates, proteins,
            fats, vitamins, etc. If it is maintained then life will be healthy and
            comfortable. Apart from eating, drinking is also important. Better to
            drink lots of water. Congratulations on being a healthy person.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo eligendi
            voluptatibus, laborum sequi minima quae eius! Saepe, beatae doloribus?
            Quos
          </p>
          <p>
            <a href="" className="tbl-biru">
              Pelajari Lebih Lanjut
            </a>
          </p>
        </div>
        <img src="lifestyle.jpg" />
      </section>
      {/* About */}
      <section id="about">
        <div className="tengah">
          <div className="kolom">
            <p className="deskripsi">Healthy Lifestyle</p>
            <h2>Benefits</h2>
            <p>
              Surely we often hear that people who have a healthy lifestyle will
              have a fit and fit body. A real example in our lives is that the
              average person in the past is still fresh and often active. That's
              because they often eat food that is still fresh, natural
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
              placeat?
            </p>
          </div>
          <div className="about-list">
            <div className="kartu-about">
              <img src="friendship.jpg" />
              <p>Friendship</p>
            </div>
            <div className="kartu-about">
              <img src="family.jpg" />
              <p>Family</p>
            </div>
            <div className="kartu-about">
              <img src="company.jpg" />
              <p>Company</p>
            </div>
            <div className="kartu-about">
              <img src="masyarakat.jpg" />
              <p>Public</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          <div className="footer-section">
            <h3>Portofolio</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, temporibus.
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Jl. pemuda 2 Gomong Mataram</p>
            <p>Kode pos: 84155</p>
          </div>
          <div className="footer-section">
            <h3>Social</h3>
            <img src="github.jpg" width={50} />
            <img src="facebook.jpg" width={50} />
            <img src="instagram.jpg" width={35} />
            <img src="twitter.jpg" width={40} />
          </div>
        </div>
      </div>
    </div>
    <div id="copyright">
      <div className="wrapper">
        ©2022. <b>Portofolio</b> All Rights Reserved.
      </div>
    </div>
  </>
  
  )
}

export default App
