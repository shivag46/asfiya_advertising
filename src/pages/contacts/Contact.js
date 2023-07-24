function AddressCard(){
    return (
        <div className="w-1/2 flex flex-col justify-between">
            <div className="flex">
                <img src={require("../../assets/location.png")} className="w-5 h-5 m-5"  />
                <div className="text-start">
                    <p>84, Pushpa Nagar Main road</p> 
                    <p>Nungambakkam</p>
                    <p>Chennai 600034</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center">
                    <img src={require("../../assets/telephone.png")} className="w-5 h-5 m-5"  />
                    <div>Call the Company</div>
                </div>
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
            <div className=" flex items-center px-5 justify-around">
                <AddressCard />
                <img src={require("../../assets/contact us.png")}  style={{height:"320px",width:"462px"}}/>
            </div>
        </div>
    )
}
//2000 1400
export default Contact;