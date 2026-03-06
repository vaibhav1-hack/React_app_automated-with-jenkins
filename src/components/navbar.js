import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="navWrap">
            <div className="navInner">
                <div className="brand">
                    <div className="brandMark">SC</div>
                    <div className="brandText">
                        <div className="brandName">SummerCamp</div>
                        <div className="brandTag">Sports • Fitness • Confidence</div>
                    </div>
                </div>

                <nav className="navLinks">
                    <NavLink to="/" end className={({ isActive }) => (isActive ? "link active" : "link")}>
                        Home
                    </NavLink>
                    <NavLink to="/sports" className={({ isActive }) => (isActive ? "link active" : "link")}>
                        Sports
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "link active" : "link")}>
                        Contact
                    </NavLink>
                </nav>

                <a className="cta" href="/contact">
                    Enquire
                </a>
            </div>
        </header>
    );
}