import { useState, useEffect } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Loader from "./components/Loader";
import CodeTyper from "./components/CodeTyper";
import Site from "./components/Site";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

// Code snippets for typing animation
const headerCode = `import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary to-primary/80 text-white py-8 shadow-lg"
        >`;

const mainContentCode = `import React from 'react';
import { motion } from 'framer-motion';

const MainContent = () => {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >`;

const footerCode = `import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-primary to-primary/80 text-white py-6 text-center"
        >`;

function App() {
    const [stage, setStage] = useState(1);
    const [showHeader, setShowHeader] = useState(false);
    const [showMain, setShowMain] = useState(false);
    const [showFooter, setShowFooter] = useState(false);
    const [showSite, setShowSite] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set isLoaded to true after a short delay to trigger animations
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const goToNextStage = () => {
        setStage((prevStage) => prevStage + 1);
    };

    const renderStage = () => {
        switch (stage) {
            case 1:
                return <Loader duration={2} onComplete={goToNextStage} />;
            case 2:
                return (
                    <>
                        {showHeader && <Header />}
                        <CodeTyper
                            fileName="Header.jsx"
                            code={headerCode}
                            onComplete={() => {
                                setShowHeader(true);
                                setTimeout(goToNextStage, 1000);
                            }}
                        />
                    </>
                );
            case 3:
                return (
                    <>
                        <Header />
                        {showMain && <MainContent />}
                        <CodeTyper
                            fileName="MainContent.jsx"
                            code={mainContentCode}
                            onComplete={() => {
                                setShowMain(true);
                                setTimeout(goToNextStage, 1000);
                            }}
                        />
                    </>
                );
            case 4:
                return (
                    <>
                        <Header />
                        <MainContent />
                        {showFooter && <Footer />}
                        <CodeTyper
                            fileName="Footer.jsx"
                            code={footerCode}
                            onComplete={() => {
                                setShowFooter(true);
                                setTimeout(() => {
                                    setShowSite(true);
                                    setStage(5);
                                }, 1000);
                            }}
                        />
                    </>
                );
            case 5:
                return <Site />;
            default:
                return null;
        }
    };

    return (
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
            <div
                className={`min-h-screen flex flex-col transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            >
                {stage === 1 && <Loader duration={1} onComplete={goToNextStage} />}
                <div className={`flex-1 transition-opacity duration-500 ${showSite ? "animate-fadeIn" : ""}`}>
                    {renderStage()}
                </div>
            </div>
        </ThemeProvider>
    );
};

export default App;