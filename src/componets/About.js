import aboutImg1 from '../images/Mario and Adrian A.jpg';
import aboutImg2 from '../images/Mario and Adrian b.jpg';
import "./About.css";

function About() {
    return (
        <main className="about_container">
            <div className="about_name">Little Lemon</div>
            <div className="about_city">Chicago</div>
            <div className="about_desc">Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.  The restaurant features a locally-sourced menu with daily specials.</div>
            <div className="about_image1"><img src={aboutImg1}
                alt="Mario and Adrian"
                class="about_img_format1"
            /></div>
            <div className="about_image2"><img src={aboutImg2}
                alt="Mario and Adrian"
                class="about_img_format2"
            /></div>
        </main>
    )
}
export default About;