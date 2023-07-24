function Customer(){
    return (    
        <div className="flex p-10 items-center">
            <div className="flex flex-col w-1/3">
                <h3 className="text-4xl font-extrabold m-5">Our Customers</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum justo sed luctus lobortis. Vivamus pellentesque vel nulla ut rhoncus. Fusce porta diam elit, eu </p>
            </div>
            <div className="w-2/3 p-14 flex justify-center flex-wrap">
                <img className="circular_card" src={require("../../assets/bg.png")} />
                <img className="circular_card" src={require("../../assets/bg.png")} />
                <img className="circular_card" src={require("../../assets/bg.png")} />
                <img className="circular_card" src={require("../../assets/bg.png")} />
                <img className="circular_card" src={require("../../assets/bg.png")} />
            </div>
        </div>
    )
}

export default Customer;