import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState("");

    function onSubmit(e) {
        e.preventDefault();
        setStatus("Submitted ✅ (connect this to backend later)");
    }

    return (
        <div className="page">
            <div className="pageHead">
                <div>
                    <h1 className="h2">Contact / Enquiry</h1>
                    <p className="sub">
                        Fill the form. We’ll share batches, fees, and a trial session slot.
                    </p>
                </div>
                <div className="metaBox">
                    <div><b>Phone:</b> +91 90000 00000</div>
                    <div><b>Email:</b> camp@example.com</div>
                    <div><b>Location:</b> Bengaluru</div>
                </div>
            </div>

            <div className="grid2">
                <div className="card">
                    <div className="cardTitle">Send a message</div>
                    <p className="small mutedText">This is frontend-only. Add backend later if you want real submissions.</p>

                    <form className="form" onSubmit={onSubmit}>
                        <label className="label">
                            Parent / Student Name
                            <input className="input" placeholder="Enter name" required />
                        </label>

                        <label className="label">
                            Phone Number
                            <input className="input" placeholder="+91..." required />
                        </label>

                        <label className="label">
                            Age
                            <input className="input" placeholder="8–16" required />
                        </label>

                        <label className="label">
                            Interested Sport
                            <select className="input" required>
                                <option value="">Select</option>
                                <option>Football</option>
                                <option>Cricket</option>
                                <option>Basketball</option>
                                <option>Badminton</option>
                            </select>
                        </label>

                        <label className="label">
                            Message
                            <textarea className="input area" placeholder="Ask your questions..." rows="4" />
                        </label>

                        <button className="btn primary" type="submit">Submit Enquiry</button>
                        {status && <div className="success">{status}</div>}
                    </form>
                </div>

                <div className="card">
                    <div className="cardTitle">Quick info</div>
                    <ul className="list">
                        <li><b>Season:</b> May–July</li>
                        <li><b>Time:</b> 7:00–10:00 AM</li>
                        <li><b>Days:</b> Mon–Sat</li>
                        <li><b>Groups:</b> Age + skill based</li>
                        <li><b>Safety:</b> Supervised + first-aid</li>
                    </ul>
                    <div className="divider" />
                    <div className="small">
                        Want it “professional”? Add Google Maps embed + WhatsApp button next.
                    </div>
                </div>
            </div>
        </div>
    );
}