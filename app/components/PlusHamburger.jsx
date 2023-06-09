import {useState} from 'react';

export function PlusOverlay({ open }) {
    return (
        <div id="plus-overlay" style={{ display: open }} className="plus-overlay">
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
            <ul className="footer">
                <li>terms</li>
                <li>policy/questions</li>
            </ul>
        </div>
    );
}

export default function PlusHamburger() {

    const [open, setOpen] = useState('none');

    const handleClick = () => {

        if (open === 'none') {
            setOpen('block');
        } else {
            setOpen('none');
        }
        
        // const overlay = document.getElementById('plus-overlay');
    }

    return (
        <div className="plus-hamburger">
            <PlusOverlay open={open} />
            <div className="wrapper">
                <span className="plus" onClick={handleClick}>
                    <img src="/cross.svg" alt="Open Filters" />
                </span>
            </div>
        </div>
    );
}