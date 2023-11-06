import { NavLink } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'


const Hearder = () => {
    const headerBtnStyle = "py-2 font-semibold px-5 rounded-full border-2 border-white font-primary"
    return (
        <div className="bg-black h-1/2 relative text-white">
            <img className="object-cover w-full h-full object-center opacity-50" src="https://i.ytimg.com/vi/vh8b2WBDLjQ/maxresdefault.jpg" alt="" />

            {/* Header Content */}
            <div className="absolute top-0 w-full flex flex-col text-center mt-44">
            <h1 className="font-secondary font-bold text-4xl leading-10">
                Your Destination for Sharing <br />
                <span><Typewriter
                words={['Camera', 'Lenses', 'Gears', 'Lighting Equipments', 'Etc.']}
                loop={Infinity}
                cursor
                cursorStyle='_'
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1000}
                /></span>
            </h1>
            <p className="text-lg mt-4 mb-12 font-primary">
                Unlock Your Creative Potential with Our Premium Camera and Gear Rentals. Explore a World of <br /> Possibilities Behind the Lens!
            </p>
            <div className="space-x-4">
                <NavLink to="/" className= {({isActive}) => isActive ? `text-black bg-white ${headerBtnStyle}` : `text-white ${headerBtnStyle}`}>
                    Rent
                </NavLink>
                {/* <NavLink to="/" className={`py-1 px-3 rounded-full border-2 border-white ${({isActive})=> console.log(isActive)}`}> */}
                <NavLink to='/add' className= {({isActive}) => isActive ? `text-black bg-white ${headerBtnStyle}` : `text-white hover:bg-white hover:text-black ${headerBtnStyle}`}>
                    Add
                </NavLink>
            </div>
            </div>
        </div>
    );
};

export default Hearder;