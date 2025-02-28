import React from "react";
import { motion } from "framer-motion";
import "bulma/css/bulma.min.css";
import { Button } from "./components/ui/Button";
import { Card, CardContent } from "./components/ui/Card";

export default function LandingPage() {
  return (
    <div className="hero is-fullheight" style={{ backgroundImage: "url('/images/digital-background.jpg')", backgroundSize: "cover", backgroundPosition: "center", color: "white", animation: "fadeIn 2s" }}>
      <div className="hero-body has-text-centered">
        <div className="container">
          {/* Hero Section */}
          <motion.h1 
            className="title is-1 has-text-warning"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Welcome to Web3 Future
          </motion.h1>
          <p className="subtitle is-4">
            Empowering businesses with blockchain-based solutions for a decentralized world.
          </p>
          <Button className="button is-warning is-medium mt-4 is-rounded is-glowing">
            Get Started
          </Button>
          <Button className="button is-link is-medium mt-4 is-rounded is-glowing ml-4">
            Connect Wallet
          </Button>

          {/* Services Section */}
          <div className="columns is-centered mt-6">
            <div className="column is-one-third">
              <Card>
                <CardContent>
                  <figure className="image is-4by3">
                    <img src="/images/blockchain.jpg" alt="Decentralized Apps" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                  </figure>
                  <h3 className="title is-4 has-text-warning">Decentralized Apps</h3>
                  <p>Build secure, scalable dApps with blockchain technology.</p>
                </CardContent>
              </Card>
            </div>
            <div className="column is-one-third">
              <Card>
                <CardContent>
                  <figure className="image is-4by3">
                    <img src="/images/smart-contracts.jpg" alt="Smart Contracts" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                  </figure>
                  <h3 className="title is-4 has-text-warning">Smart Contracts</h3>
                  <p>Automate business processes with tamper-proof smart contracts.</p>
                </CardContent>
              </Card>
            </div>
            <div className="column is-one-third">
              <Card>
                <CardContent>
                  <figure className="image is-4by3">
                    <img src="/images/crypto-payments.jpg" alt="Crypto Payments" style={{ width: "100%", height: "250px", objectFit: "cover" }} />
                  </figure>
                  <h3 className="title is-4 has-text-warning">Crypto Payments</h3>
                  <p>Enable seamless transactions using digital currencies.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Roadmap Section */}
          <div className="section mt-6 has-text-centered">
            <h2 className="title is-3 has-text-warning">Roadmap to the Future</h2>
            <p>Explore our milestones in the journey of Web3 development.</p>
            <img src="/images/roadmap.webp" alt="Roadmap" style={{ width: "80%", margin: "auto" }} />
          </div>

          {/* Navigation & Footer Section */}
          <div className="section mt-6 has-text-centered">
            <nav className="navbar is-transparent">
              <div className="navbar-menu">
                <div className="navbar-start">
                  <a className="navbar-item has-text-white" href="#about">About Us</a>
                  <a className="navbar-item has-text-white" href="#careers">Careers</a>
                  <a className="navbar-item has-text-white" href="#contact">Contact</a>
                </div>
              </div>
            </nav>
            <div className="content has-text-centered mt-6">
              <h2 className="title is-4 has-text-warning">Join the Future of Web3</h2>
              <p>Discover career opportunities and partnerships in blockchain technology.</p>
              <Button className="button is-link is-medium mt-3 is-rounded">Explore Careers</Button>
            </div>
            <footer className="footer has-text-centered mt-6">
              <p>&copy; 2025 Web3 Future. All Rights Reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
