import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {


    return (
      
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Education</h2>
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
                        <h2>Boston University: Masters of Science <span> Sep 2022 - May 2024</span></h2>
                        <p>I pursued the MS program in Computer Information Systems with a specialization in Web Development. The two-year curriculum covered a vaeirty of topics for IT business, Reponsive and Server-side web development, AI and machine learning, Database Design, and IT strategies. </p>
                        </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Worcester Polytechnic Institute (WPI):  Bachelor of Science<span> Sep 2018 - May 2022</span></h2>
                        <p>I majored in Computer Science, going through a well-rounded four-year CS education that covers programming languages, algorithms, data type, OOP, operating systems, database, and advanced math such as Linear Alg and statistical models.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Miss Hall's School <span>Sep 2014 - June 2022</span></h2>
                        <p>This is a small private all-girls school in Pittesfield, MA. I have learnt AP math, AP computer science and AP physics here along with a variety of humanities courses.</p> 
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
