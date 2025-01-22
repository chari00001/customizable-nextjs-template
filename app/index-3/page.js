
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home3/About"
import Banner from "@/components/sections/home3/Banner"
import Services from "@/components/sections/home3/Services"
import Blog from "@/components/sections/home3/Blog"
import Testimonial from "@/components/sections/home3/Testimonial"
import Features from "@/components/sections/home3/Features"
import Welcome from "@/components/sections/home3/Welcome"
import Skill from "@/components/sections/home3/Skill"
import Process from "@/components/sections/home3/Process"
import Brand from "@/components/sections/home3/Brand"
import Contact from "@/components/sections/home3/Contact"
import Funfact from "@/components/sections/home3/Funfacts"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3}>
                <Banner />
                <Features />
                <About />
                <Services />
                <Welcome />
                <Skill />
                <Funfact />
                <Testimonial />
                <Process />
                <Brand />
                <Contact />
                <Blog />

                
            </Layout>
        </>
    )
}