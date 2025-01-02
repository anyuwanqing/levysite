import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Happy 2025! My name is Levy. </p>
                    <p>I am a recent college graduate from a master program at Boston Universiy in CIS (Computer Information Systems). I also hold a B.S. in CS (Computer Science) from WPI. My career aspirations are centered around becoming a data engineer, a front-end app developer or a user experience researcher. </p>
                    <p>I have a keen interest in data visualization, machine learning classification and prediction methods, strategic thinking based on qualitative research, human-computer interaction (HCI), and connecting users with new technologies. I am passionate about exploring the synergies between these disciplines.</p>
                    <p>My experiences are extremely diverse, not only in programming, but also in product design, user research, and a strong desire to bring new technologies into people's everyday lives.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>App Development - 2 Years</h3>
                    <p>I am proficient in JavaScript, TypeScript, React, Angular, HTML, and CSS for building dynamic, interactive web applications. I use frameworks like Bootstrap and jQuery for UI enhancements and integrate server-side functionality with Node.js, Express.js, and MongoDB to develop fully functional pages and apps. My MS program specialization is Web Development.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Visualization & Maching Learning - 3 Years</h3>
                    <p>I built an e-commerse database from scratch, showing proficiency in SQL. Using machine learning frameworks like PyTorch and TensorFlow, I analyzed large datasets to develop predictive models, classification systems, and text analysis tools. I used numPy, pandas, scikit-learn libraries for data visualization. I web-scraped 30,000 data points to leverage my statistic skills and I coded and back-tested stock indicators, and conducted statistical modeling using R and Stata. My primary language is Python and Java.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>UIUX Research - 1 year</h3>
                    <p>I bridge the gap between markets and users by analyzing both qualitative and quantitative data to understand user behavior and product preferences. As the Lead UI/UX Researcher at a startup, I collected and analyzed 1,000 user feedback entries through surveys and interviews, identifying key design issues. I continuously enhanced user experiences by creating new user flow maps and implementing Figma mockups to refine and improve product design. </p>
                </div>
                </div>
            </div>
            {/*
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
            */}
            </div>
        </div>
        </section>
      </div>
    )
  }
}
