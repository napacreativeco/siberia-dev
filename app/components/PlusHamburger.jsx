export function PlusOverlay() {
    return (
        <div id="plus-overlay" className="plus-overlay">
            <ul className="header">
                <li className="active">shop</li>
                <li>about</li>
                <li>contact</li>
                <li>sound</li>
                <li>lookbook</li>
            </ul>
            <div className="wrapper">
                <ul className="list">
                    <li className="active">all</li>
                    <li>shirts</li>
                    <li>pants</li>
                    <li>accessories</li>
                    <li>womens</li>
                </ul>
            </div>
        </div>
    );
}

export default function PlusHamburger() {

    const handleClick = () => {
        const overlay = document.getElementById('plus-overlay');

        overlay.style.display = 'block';
    }

    return (
        <div className="plus-hamburger">
            <PlusOverlay />
            <div className="wrapper">
                <span className="plus" onClick={handleClick}>
                    <img src="/cross.svg" alt="Open Filters" />
                </span>
            </div>
        </div>
    );
}