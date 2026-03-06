export default function Footer() {
    return (
        <footer className="footer">
            <div className="footerInner">
                <div>
                    <div className="footerTitle">SummerCamp Sports</div>
                    <div className="footerText">Structured coaching. Real improvement. No nonsense.</div>
                </div>
                <div className="footerTextRight">
                    © {new Date().getFullYear()} SummerCamp • All rights reserved
                </div>
            </div>
        </footer>
    );
}