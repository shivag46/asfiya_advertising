function OurTeam(){
    return (
        <div className="flex p-10 justify-around items-center">
            <img className=" hidden lg:block" src = {require("../../assets/team.png")} style={{width:"565px",height:"525px"}} />
            <div className=" lg:w-1/3 h-fit">
                <h1 className="text-4xl font-extrabold m-5">Our Team</h1>
                <p className="text-left">Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.</p>
                <a href="#">
                    <div className="flex items-center mt-5 text-blue-500 underline font-bold">
                        <p>Learn More</p>
                        <img src={require("../../assets/blue-arrow.png")} className="w-3 h-3 mx-2 underline"  />
                    </div>
                </a>
            </div>            
        </div>
    )
}

export default OurTeam