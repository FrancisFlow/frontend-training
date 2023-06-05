import Image from "next/image";
const About = () => {
    return (
        <>
        <section className="about section-padding" id="about" >
           <div className="container">
            <div className="grid">
                <div className="about-img">
                    <div className="img-box">
                        <Image height={400} width={400}  src="/images/joyce.jpg" alt="about image" />
                        <div className="box box-1">
                            <span className="text-white" >2.5k</span>
                            <p>satisfied clients</p>
                        </div>
                    </div>
                </div>
                <div className="about-text">
                    <div className="section-title">
                        <span className="title">about us</span>
                        <h2 className="sub-title ">we're cleaning since 2010</h2>

                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, reprehenderit. Tempora fugiat quasi similique dolore dolor quia ipsum ratione consectetur</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis at ad fuga doloribus libero officiis qui debitis tempora sit excepturi!</p>
                </div>
            </div>
           </div>
          
        </section>
        </>
      );
}
 
export default About;