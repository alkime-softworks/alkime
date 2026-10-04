import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HeroArtwork,
  CyclopsArtwork,
  BikeCheckArtwork,
} from "../components/illustrations"

const IndexPage = () => (
  <Layout>
    <SEO title="Independent software" />
    <a className="skip-link" href="#main">
      Skip to content
    </a>

    <header className="site-header container">
      <a className="wordmark" href="#top" aria-label="ALKIME home">
        alkime<span aria-hidden="true">.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#projects">Our projects</a>
        <a href="#about">About</a>
      </nav>
    </header>

    <main id="main" tabIndex="-1">
      <section className="hero container" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="small-mark" aria-hidden="true" /> ALKIME LLC /
            Independent software
          </p>
          <h1 id="hero-title">
            Ideas into
            <br />
            useful software<span className="accent">.</span>
          </h1>
          <p className="hero-description">
            We’re an independent software company designing and developing
            practical products for the web and mobile.
          </p>
          <a className="text-link" href="#projects">
            Explore our projects <span aria-hidden="true">↘</span>
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <HeroArtwork />
          <span className="art-caption">Design meets development.</span>
        </div>
      </section>

      <section
        className="projects container"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <h2 id="projects-title">What we’re building</h2>
          <span className="eyebrow">01 / Our projects</span>
        </div>

        <article
          className="project project-cyclops"
          aria-labelledby="cyclops-title"
        >
          <div className="project-art" aria-hidden="true">
            <CyclopsArtwork />
          </div>
          <div className="project-content">
            <div className="project-identity">
              <h3 id="cyclops-title">Cyclops</h3>
              <p className="project-category">Cycling events / Web</p>
              <span className="status">In development</span>
            </div>
            <div className="project-description">
              <p className="project-lead">Bring the ride together.</p>
              <p>
                A cycling-event platform for ride organizers and their
                communities. We’re building a shared home for event details,
                routes, and rider RSVPs.
              </p>
            </div>
          </div>
        </article>

        <article
          className="project project-bikecheck"
          aria-labelledby="bikecheck-title"
        >
          <div className="project-art" aria-hidden="true">
            <BikeCheckArtwork />
          </div>
          <div className="project-content">
            <div className="project-identity">
              <h3 id="bikecheck-title">BikeCheck</h3>
              <p className="project-category">Bike maintenance / iPhone</p>
              <span className="status">In development</span>
            </div>
            <div className="project-description">
              <p className="project-lead">
                Take care of the bike behind the ride.
              </p>
              <p>
                An iPhone app for tracking bike maintenance. We’re developing a
                way to connect riding activity with bike care and keep
                maintenance records close at hand.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section
        className="about container"
        id="about"
        aria-labelledby="about-title"
      >
        <div>
          <p className="eyebrow">02 / The company</p>
          <h2 id="about-title">
            Thoughtful design.
            <br />
            Practical software.
          </h2>
        </div>
        <div className="about-copy">
          <p>
            ALKIME LLC is an independent software company. We combine product
            design and software development to build focused applications for
            the web and mobile.
          </p>
          <p>
            Our current projects include Cyclops for cycling events and
            BikeCheck for bike maintenance.
          </p>
        </div>
      </section>
    </main>

    <footer className="site-footer container">
      <div>
        <a className="wordmark" href="#top" aria-label="Back to ALKIME home">
          alkime<span aria-hidden="true">.</span>
        </a>
        <p>Independent software. Made with care.</p>
      </div>
      <div className="legal">
        <p>ALKIME LLC</p>
        <a href="https://alkime.co/">alkime.co</a>
      </div>
    </footer>
  </Layout>
)

export default IndexPage
