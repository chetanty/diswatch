import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";

// Dynamically import the Map component with SSR disabled
const Map = dynamic(() => import("../components/Map"), { ssr: false });

const HomePage = () => {
  return (
    <div className="container">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="header">
        <h1 className="title">Disaster Preparedness Map</h1>
        <p className="subtitle">
          Be informed. Stay safe. Explore the potential disasters in your area and prepare accordingly.
        </p>
      </header>
      <main className="main">
        <div className="map-container">
          <Map />
        </div>
      </main>
      <footer className="footer">
        <p>Powered by AWS Amplify, React, Leaflet, and Next.js</p>
      </footer>
      <style jsx>{`
        /* General Styles */
        .container {
          font-family: "Roboto", Arial, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          background: linear-gradient(to bottom, #1e3c72, #2a5298);
          color: #ffffff;
          min-height: 100vh;
          padding: 0 20px;
          margin: 0;
        }
        .header {
          text-align: center;
          margin-top: 30px;
        }
        .title {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          animation: fadeIn 1s ease-in-out;
        }
        .subtitle {
          font-size: 1.2rem;
          margin: 10px 0 20px;
          font-weight: 400;
          color: #dcdcdc;
          max-width: 600px;
          line-height: 1.5;
        }

        /* Map Container */
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-bottom: 20px;
        }
        .map-container {
          width: 80%;
          height: 70vh;
          border: 3px solid #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          background-color: #f0f0f0;
        }

        /* Footer */
        .footer {
          text-align: center;
          font-size: 0.9rem;
          color: #dcdcdc;
          margin-bottom: 10px;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .map-container {
            width: 95%;
            height: 60vh;
          }
          .title {
            font-size: 2rem;
          }
          .subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
