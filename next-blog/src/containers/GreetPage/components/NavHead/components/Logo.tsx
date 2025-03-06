const Logo = () => {

    const logoUrl = "/images/logo.png";
    const altText = "MainLogo";
    
    return (
        <a className="gh-head-logo" href="/">
            <img src={`${logoUrl}`} alt={altText} className="h-8" />
        </a>
    )
}

export default Logo;