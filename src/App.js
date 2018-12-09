import React, { Component } from 'react';
import Tabs from './Tabs';
import Tab from './Tab';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <Tabs>
        <Tab title="About Me">
          <li className="fluidcontainer active" style={{backgroundImage: 'url("./images/AboutMe.jpg")'}}>
            <div className="container">
              <div className="avatar" />
              <div className="aboutMe">
                <i className="far fa-comment" />
                <h1>I'm <span>Nhung Nguyen</span></h1>
                <h3>C++ Developer</h3>
                <div className="border" />
                <div className="infor">
                  <h5>FULLNAME: NGUYEN THI HONG NHUNG</h5>
                  <h5>EMAIL: nhungast@gmail.com</h5>
                  <h5>TEL: (+84) 901 323 776</h5>
                  <h5>LOCATION: District 9, Ho Chi Minh City</h5>
                </div>
              </div>
            </div>
          </li>
        </Tab>
        <Tab title="Skills">
        <li className="fluidcontainer active" style={{backgroundImage: 'url("./images/Skills.jpg")'}}>
              <div className="container">
                <div id="skill">
                  <h1>SKILL</h1>
                  <h5>HTML/CSS</h5>
                  <div className="myProgress">
                    <div className="bars" />
                  </div>
                  <h5>Vanilla Javascript</h5>
                  <div className="myProgress">
                    <div className="bars" />
                  </div>
                  <h5>ReactJS</h5>
                  <div className="myProgress">
                    <div className="bars" />
                  </div>
                  <h5>C++ &amp; OOP</h5>
                  <div className="myProgress">
                    <div className="bars" />
                  </div>
                  <h5>English</h5>
                  <div className="myProgress">
                    <div className="bars" />
                  </div>
                </div>
                <div id="project">
                  <h1>PROJECT</h1>
                  <ul>
                    <li style={{lineHeight: '22px'}}>HTML<br />CSS<br />JS</li>
                    <li>Responsive</li>
                  </ul>
                  <ul>
                    <li>ReactJS</li>
                    <li style={{lineHeight: '22px'}}>TOEIC 855 Certificate</li>
                  </ul>
                </div>
              </div>
            </li>
        </Tab>
        <Tab title="Work Experience">
        <li className="fluidcontainer active" style={{backgroundImage: 'url("./images/Experience.jpg")'}}>
              <div className="container" style={{flexDirection: 'column'}}>
                <div className="workplace">
                  <div className="company">
                    <h5>FPT Software, District 9</h5>
                    <h6>Feb 2017 - Present</h6>
                  </div>
                  <div className="jobDesc">
                    <h5><i className="fas fa-code" /> C++ Developer</h5>
                    <div className="verticalBorder" />
                    <div className="mainResponsibility">
                      <h6>Main responsibilities</h6>
                      <ul>
                        <li>Clarify customer's requirement.</li>
                        <li>Implement coding new feature of MRI (Magnetic Resonance Imaging)
                          machine then create point of views (POV), execute unit test (UT), fix bugs.</li>
                        <li>Create design document: class diagram, sequence diagram.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="company">
                    <h5>Datacenter NewLife, District 1</h5>
                    <h6>Jan 2016 - Jan 2017</h6>
                  </div>
                  <div className="jobDesc">
                    <h5><i className="fas fa-sitemap" /> Network Engineer</h5>
                    <div className="verticalBorder" />
                    <div className="mainResponsibility">
                      <h6>Main responsibilities</h6>
                      <ul>
                        <li>Monitoring systems, traffic and IT infrastructure in Datacenter using Cacti.</li>
                        <li>Create, maintain, backup hosting for website.</li>
                        <li>Set up, configure VPS (virtual private server) using VMware and support
                          customers resolving service problems on VPS.</li>
                        <li>Build, configure webserver, mailserver, VoIP server using asterisk.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
        </Tab>
        <Tab title="Education & Interests">
          <li className="fluidcontainer active" style={{backgroundImage: 'url("./images/Education.jpg")'}}>
            <div className="container">
              <div className="education">
                <h1>EDUCATION</h1>
                <div className="workplace">
                  <div className="company">
                    <h5>Astrakhan State Technical University, Russia</h5>
                    <h6>Oct 2010 - Aug 2015</h6>
                  </div>
                  <div className="jobDesc">
                    <h5><i className="fas fa-book" /> Bachelor's degree <br /> Information and Comunication Technology (ICT)</h5>
                    <div className="verticalBorder" />
                    <div className="mainResponsibility">
                      <h6>GPA: Good (~ 4.5/5)</h6>
                    </div>
                  </div>
                </div>
                <div className="diviseBorder" />
                <div className="softskill">
                  <h1>SOFT SKILL</h1>
                </div>
                <div className="hobby">
                  <h1>HOBBIES</h1>
                </div>
              </div>
            </div>
          </li>
        </Tab>
      </Tabs>
    );
  }
}

export default App;
