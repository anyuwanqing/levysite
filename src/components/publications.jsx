import React, { Component } from 'react'

export default class Publications extends Component {
  render() {


    return (
      
      <div>
        <section className="colorlib-experience" data-section="publications">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">SUMMARY</span>
                <h2 className="colorlib-heading animate-box">Publications</h2>
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
                      <div className="timeline-label"><a href="https://digital.wpi.edu/concern/student_works/2r36v1741?locale=en" class="hover-link" target="_blank">
                        <h2>MQP (Major-Qualifying Project) CS: Games For Teaching Children<span>2022 WPI</span></h2>
                        <p>Research of education games. Designed and developed a 2D fairy-tale based game for children. Used Renpy (game design), Adobe toolkits (design and drawing). </p>
                        </a></div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label"><a href="https://digital.wpi.edu/downloads/gx41mm79w" class="hover-link" target="_blank">
                        <h2>IQP (Interactive Qualifying Project) CS: Building A Platform For Japanese Events In Massachusetts<span>2020</span></h2>
                        <p>Research on Japanese cultural events. Building a website based on the research for JCC(Japanese Culture Club) to share the events to students. Used CSS/HTML/JS/WordPress for web development.</p>
                      </a></div>
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
