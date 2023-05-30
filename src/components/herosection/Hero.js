
const HeroSection = () => {

    
    
    return (  
        <>    
        
 
        <section className="home" id="home" >
            <div className="container">
                <div className="grid">
                    <div className="hero-text">
                        <h1 className="font-bold" > Need cleaning services ? </h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum maxime mollitia facere. Asperiores, beatae minus!
                        </p>
                        <div className="btn-wrap">
                            <a href="#about" className="btn" >know more</a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="circle-wrap">
                            <div className="circle"></div>
                        </div>
                        <img src="/images/maid.png" alt="Cleaner image"/>
                    </div>
                </div>
            </div>

        </section>
        </>
    );
}
 
export default HeroSection;