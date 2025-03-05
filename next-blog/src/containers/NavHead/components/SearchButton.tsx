const SearchButton = () => {
    const options = {
        iconUrl: 'http://www.w3.org/2000/svg',
        iconColor: 'currentColor',
        iconSize: 'size-6',
    };

    return (
        <button className="gh-search gh-icon-btn" aria-label="Search this site">
            <svg xmlns={options.iconUrl} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke={options.iconColor} className={options.iconSize}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        </button>
    );
}

export default SearchButton;
