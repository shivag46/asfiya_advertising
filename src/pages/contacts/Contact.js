function AddressCard(){
    return (
        <div className="w-96 h-100 flex flex-col p-5 justify-between" style={{boxShadow:"0px 16px 24px 0px rgba(118, 118, 178, 0.24)"}}>
            <div className=" mt-5 text-start text-red-600">CONTACT - ASFIYA ADVERTISING</div>
            <div className="flex w-60">
                <img src={require("../../assets/location.png")} className="w-5 h-5 mx-2"  />
                <div className="text-start">
                    <p>84, Pushpa Nagar Main road</p> 
                    <p>Nungambakkam</p>
                    <p>Chennai 600034</p>
                    <p>India</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex p-1 w-60 rounded-full justify-center items-center bg-emerald-500 text-white mb-3">
                    <img src={require("../../assets/telephone.png")} className="w-5 h-5 mx-2"  />
                    <div>Call the Company</div>
                </div>
                <div className=" flex p-2 w-60 rounded-full justify-center border-emerald-500 border-2 border-solid">
                    <div className="text-emerald-500">Ask for Information</div>
                </div>
            </div>
            <div className=" text-start">
                Fax +91 44 28171742
            </div>
        </div>
    )
}

function Contact(){
    return (
        <div className="flex flex-col p-10">
            <div className=" text-start text-4xl font-extrabold mt-5 mb-10">
                Contact Us
            </div>
            <div className=" flex justify-between items-center px-5">
                <AddressCard />
                <div className="flex">                    
                    <div className="w-80 mr-5 flex p-1 items-center" style={{borderRadius:"4px",border:"2px solid var(--grayish-blue, #D1ECFD)"}}>
                        <input className=" h-full w-11/12 border-0 outline-0 bg-transparent" placeholder="Email" />
                        <img src={require("../../assets/go.png")} className=" w-5 h-5 mx-2"  />
                    </div>
                    <div className=" py-2 px-5 text-white" style={{backgroundColor:"#1F6E8A"}}>
                        Get Early Access
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;