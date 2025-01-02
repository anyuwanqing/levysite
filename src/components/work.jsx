import React, { Component } from 'react'

export default class Work extends Component {
  render() {


    return (
      
      <div id="work">
        <section className="colorlib-experience" data-section="work">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">SUMMARY</span>
                <h2 className="colorlib-heading animate-box">Work Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Lead UIUX Researcher / Designer at HANGER <span>  June 2024 - Dec - 2024</span></h2>
                        <p>Hanger is a fashion startup company. I led two teams -- design and product team -- here for technical project management work and user research work mainly. Months of market research, user research and adjusting product design accordingly. </p>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer at JITStack<span>   May 2019 - Argust 2019</span></h2>
                        <p>At this cloud company, I designed and developed a dashboard page (main page for cloud monitoring), applying HTML/CSS/JS and programmed in React.JS framework. Also applied stress test on the back-end.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Peer Tutor<span>   Sep 2020 - Sep 2021</span></h2>
                        <p>Peer Tutor of advanced math courses - Calculus. Gave out weekly lessons and helped grading quizzes, homework and exams.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
