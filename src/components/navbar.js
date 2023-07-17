import NavItem from "./navitem";

const shopSections = {
    Bikes: ["Mountain", "Gravel", "Urban", "Electric"],
    Equipment: ["Helmets", "Gloves", "Glasses", "Clothing"],
};

const NavBar = () => {
    return (
        <nav>
            <section className="shop-items">
                <NavItem title="Shop"></NavItem>
                <NavItem title="Bikes" items={shopSections.Bikes}></NavItem>
                <NavItem title="Equipment" items={shopSections.Equipment}></NavItem>
                <NavItem title="About"></NavItem>
            </section>
            <section className="shop-actions">
                {/*search bar, shopping cart & currency*/}
            </section>
        </nav>
    );
};

export default NavBar;
