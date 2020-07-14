import React from 'react'

function Portfolio () {
    return(
        <main>
            <div className="pfContainer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 pfHeader">
                            <h1>Alex's Portfolio</h1>
                        </div>
                        <div className="col-md-12 col-sm-12 pfBlurb">
                            <h4>On this page you will find some projects I have worked on that I am expecially proud of,
                                as
                                well as a
                                copy of my resume and links to my GitHub profile and my LinkedIn</h4>
                        </div>
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <h2 className="pfBrand">Brand Statement!</h2>
                                <p className="statementText">My name is Alex, I am a 19 year old from Adelaide who is
                                    experienced in customer
                                    service and learning technology. In
                                    my previous work experiences I have worked roles which strengthened my skills
                                    in
                                    customer service which has enhanced my ability to communicate, listen, understand
                                    and
                                    cooperate with customers and clientele. My passion is to work within IT specifically
                                    in
                                    the field of front end development and software. I believe my social skills from
                                    prior
                                    hospitality experience could prove useful to the IT industry.</p>
                            </div>
                            <div className="col-md-4">
                                <div className="statementPic">
                                    <img className="statementImg" src="assets/images/croppedrecent2.png"
                                        alt="Recent Photo Of Me!" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="socialContainer">
                                <a href="https://www.linkedin.com/in/alexander-waite-005165199/" target="_blank" rel="noopener noreferrer">
                                    <p><i className="fab fa-linkedin"></i> My LinkedIn</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="socialContainer">
                                <a href="https://github.com/Alex-Waite" target="_blank" rel="noopener noreferrer">
                                    <p><i className="fab fa-github"></i> My GitHub</p>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="socialContainer">
                                <a href="assets/AlexResume.pdf" target="_blank" rel="noopener noreferrer">
                                    <p><i className="fas fa-user"></i> My Resume</p>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 pfProjectHeader">
                                <h2>My Featured Projects!</h2>
                            </div>

                            <div className="col-md-4 col-sm-12">
                                <div className="container pfCardContainer">
                                    <div className="card">
                                        <a href="https://secret-mountain-73457.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <img className="card-img-top" src="assets/images/notetaker.png"
                                                alt="NOTE TAKER screenshot" />
                                        </a>
                                        <div className="card-body">
                                            <h4>E-NOTE TAKER!</h4>
                                                <p className="card-text">This is a project I am quite happy with the outcome
                                                    of as I was stuck and felt like I was not making much progress
                                                    however when I look back on it I am proud of myself for not giving
                                                    up and taking an oppurtunity to teach myself some new skills.
                                                </p>
                                                <a href="https://github.com/Alex-Waite/NoteTaker" target="_blank" rel="noopener noreferrer">
                                                    <h4>click here to see the code!</h4>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="container pfCardContainer">
                                    <div className="card">
                                        <a href="https://alex-waite.github.io/CodeQuizHomework/" target="_blank" rel="noopener noreferrer">
                                            <img className="card-img-top" src="assets/images/codequiz.png"
                                                alt="CODE-QUIZ screenshot" />
                                        </a>
                                        <div className="card-body">
                                            <h4>CODE-QUIZ!</h4>
                                                <p className="card-text">This was a quiz I made when I was still grasping
                                                    the
                                                    basics of Javascript, this quiz is special to me because it was
                                                    around
                                                    this point in time when i finally felt i understood Javascript.
                                                    Overall
                                                    I am satisfied with the simplicity of the code and the lack of bugs
                                                    clean design.</p>
                                                <a href="https://github.com/Alex-Waite/CodeQuizHomework"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <h4>click here to see the code!</h4>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12">
                                <div className="container pfCardContainer">
                                    <div className="card">
                                        <a href="https://alex-waite.github.io/PasswordGeneratorHomework/"
                                            target="_blank" rel="noopener noreferrer">
                                            <img className="card-img-top" src="assets/images/passgen.png"
                                                alt="PASSWORD GENERATOR screenshot" />
                                        </a>
                                        <div className="card-body">
                                            <h4>PASSWORD GENERATOR!</h4>
                                                <p className="card-text">I am proud of this project because it was a task I
                                                    remember feeling hopeless about, I was very new to Javascript and I
                                                    had
                                                    no idea where to begin, however after some time I was left with an
                                                    application I was proud of. This project boosted my coding
                                                    confidence!
                                                </p>
                                                <a href="https://github.com/Alex-Waite/PasswordGeneratorHomework"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <h4>click here to see the code!</h4>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="container pfCardContainer">
                                    <div className="card">
                                        <a href="https://teamcabbn.github.io/GiphyBoggle/" target="_blank" rel="noopener noreferrer">
                                            <img className="card-img-top" src="assets/images/giphy.png"
                                                alt="GIPHYBOGGLE screenshot" />
                                        </a>
                                        <div className="card-body">
                                            <h4>GIPHYBOGGLE!</h4>
                                                <p className="card-text">This was a game I worked with a team of learning
                                                    developers
                                                    to produce, it uses API's to create a game board for Boggle and
                                                    return a
                                                    GIF
                                                    of the word the user has found, I mainly worked on the front end of
                                                    the
                                                    game
                                                    however had small contributions to the back end.</p>
                                                <a href="https://github.com/TeamCABBN/GiphyBoggle" target="_blank" rel="noopener noreferrer">
                                                    <h4>click here to see the code!</h4>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="container pfCardContainer">
                                    <div className="card">
                                        <a href="https://wuber-wines.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                            <img className="card-img-top" src="assets/images/wuber.png"
                                                alt="WUBER screenshot" />
                                        </a>
                                        <div className="card-body">
                                            <h4>W-UBER!</h4>
                                                <p className="card-text">This project is great because it gave me an
                                                    oppurtunity to work in a team on a project that was similar to a
                                                    project I might work on in a real life secenario. This project
                                                    helped me get a firm understanding of back end coding.
                                                </p>
                                                <a href="https://github.com/TeamPACA/WUber" target="_blank" rel="noopener noreferrer">
                                                    <h4>click here to see the code!</h4>
                                                </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Portfolio