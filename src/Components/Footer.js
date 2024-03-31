const Footer = () => {
    return (
        <div className="footer bg-black border border-solid text-white flex h-[400px] justify-around items-start flex-wrap p-5">
            <div className="flex-1 mx-5 text-center">
                <h2 className="font-bold text-xl">Food Villa</h2>
                <h5 className="p-2">© 2023 Bundl Technologies Pvt. Ltd</h5>
            </div>
            <div className="footer-company flex-1 mx-5 text-center">
                <h2 className="font-bold text-xl">Company</h2>
                <ul>
                    <li className="p-2">About</li>
                    <li className="p-2">Careers</li>
                    <li className="p-2">Team</li>
                    <li className="p-2">Swiggy One</li>
                    <li className="p-2">Swiggy Instamart</li>
                    <li className="p-2">Swiggy Genie</li>
                </ul>
            </div>

            <div className="footer-contactus flex-1 mx-5 text-center">
                <h2 className="font-bold text-xl">Contact us</h2>
                <ul>
                    <li className="p-2">Help & Support</li>
                    <li className="p-2">Partner with us</li>
                    <li className="p-2">Ride with us</li>
                </ul>
            </div>

            <div className="footer-legal flex-1 mx-5 text-center">
                <h2 className="font-bold text-xl">Legal</h2>
                <ul>
                    <li className="p-2">Terms & Conditons</li>
                    <li className="p-2">Coockie Policy</li>
                    <li className="p-2">Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-deliver flex-1 mx-5 text-center">
                <h2 className="font-bold text-xl">We deliver to:</h2>
                <ul>
                    <li className="p-2">Banglore</li>
                    <li className="p-2">hyderabad</li>
                    <li className="p-2">Kochi</li>
                    <li className="p-2">Pune</li>
                    <li className="p-2">Trivandrum</li>

                </ul>
            </div>
           
        </div>
    )
}

export default Footer;