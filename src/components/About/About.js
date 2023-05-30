const About = () => {
    return (
        <>
        <section className="about section-padding" id="about" >
           <div className="container">
            <div className="about-grid">
                <div className="about-image">
                    <div className="wonky-wrapper">
                        <div className="wonky-dot text-center">
                            <h1 className="text-4xl font-semibold text-white" >2.5k</h1>
                            <p className="font-light text-white uppercase" >satisfied clients</p>
                        </div>
                    </div>
                    <img src="/images/francisngigi1.jpg" alt="about image" />
                </div>
                <div className="about-text">
                    <h3>__ about us __</h3>
                    <h1>we're cleaning since 2010</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti labore nihil provident </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, expedita id tempore ipsam perferendis natus praesentium odio architecto dolores fugit.</p>
                </div>
            </div>
           </div>
        </section>
        </>
      );
}
 
export default About;