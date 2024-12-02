import React from 'react';
import SEO from '../SEO.jsx';
import Header from '../../partials/header/Header.jsx';
import BlogOneAbout from './BlogOneAbout.js';
import Footer from '../../container/Footer/Footer.js';
import ScrollToTop from '../ScrollToTop.jsx';
 const BlogOne = () => {
    return (
        <React.Fragment>
            <SEO title="Payriva || Home Two" />
            <Header />
            <BlogOneAbout/>
            <Footer />
            <ScrollToTop/>
        </React.Fragment>
    )
}

export default BlogOne;