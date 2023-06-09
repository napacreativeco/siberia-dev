export default function Topbar() {

    const openMenu = () => {
        console.log('menu opem')
    }

    return (
        <div className="topbar">
            <div className="wrapper">
                <div id="logo" className="logo">
                    <span>siberia</span>
                </div>
                <div onClick={openMenu} className="hamburger">
                    <img src="/cart.png" />
                </div>
            </div>
        </div>
    )
}