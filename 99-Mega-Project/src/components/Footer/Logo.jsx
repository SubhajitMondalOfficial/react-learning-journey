import logo from "../../assets/Logo2.png";

function Logo({ width = "150px" }) {
    return (
        <img
            src={logo}
            alt="BlogApp"
            width={width}
        />
    );
}

export default Logo;