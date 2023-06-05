import Image from "next/image";
const Team = () => {
    return ( 
        <>
    <section className="team section-padding" id="team">
        <div className="container">
            <div className="section-title">
                <span className="title">team</span>
                <h3 className="sub-title">meet our team</h3>
            </div>
            <div className="team-area ">
                <div className="grid">

                    <div className="team-item">
                        <div className="img-box">
                        <Image
                        className="rounded-full p-2"
                         width={330} height={330} src="/images/about.jpeg" alt="Team lead photo" />

                        </div>
                        <div className="detail">
                            <h3>Jane Smith</h3>
                            <p>Team Leader</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="img-box ">
                     <Image className="rounded-full "
                     height={330} width={330} src="/images/happyjane.jpg" alt="Car cleaner photo" />

                        </div>
                        <div className="detail">
                            <h3>Jane Doe</h3>
                            <p>Car cleaner</p>
                        </div>
                    </div>
                    <div className="team-item">
                        <div className="img-box" >
                        <Image  className="rounded-full pt-0" height={330} width={330} src="/images/derick.jpg" alt="general cleaner photo" />
                        </div>
                        <div className="detail">
                            <h3>John Doe</h3>
                            <p>Car cleaner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section></>
     );
}
 
export default Team;