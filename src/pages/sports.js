const sports = [
    { name: "Football", days: "Mon, Wed, Fri", level: "Beginner → Advanced", tags: ["Ball control", "Passing", "Games"] },
    { name: "Cricket", days: "Tue, Thu, Sat", level: "Beginner → Intermediate", tags: ["Batting", "Bowling", "Fielding"] },
    { name: "Basketball", days: "Mon, Thu", level: "Beginner → Advanced", tags: ["Dribbling", "Shooting", "Defense"] },
    { name: "Badminton", days: "Wed, Sat", level: "Beginner → Intermediate", tags: ["Footwork", "Serves", "Smashes"] },
];

export default function Sports() {
    return (
        <div className="page">
            <div className="pageHead">
                <div>
                    <h1 className="h2">Sports Programs</h1>
                    <p className="sub">
                        Pick 1–2 sports. Batches are assigned by age + skill on Day 1.
                    </p>
                </div>
                <div className="metaBox">
                    <div><b>Timing:</b> 7:00–10:00 AM</div>
                    <div><b>Days:</b> Mon–Sat</div>
                    <div><b>Venue:</b> Bengaluru</div>
                </div>
            </div>

            <div className="grid2">
                {sports.map((s) => (
                    <div className="card" key={s.name}>
                        <div className="cardTop">
                            <div>
                                <div className="cardTitle">{s.name}</div>
                                <div className="small mutedText">{s.level} • <b className="bright">{s.days}</b></div>
                            </div>
                            <span className="badge">Coach-led</span>
                        </div>

                        <div className="tagRow">
                            {s.tags.map((t) => (
                                <span className="tag" key={t}>{t}</span>
                            ))}
                        </div>

                        <div className="divider" />
                        <div className="small">
                            <b>Bring:</b> water bottle, towel, shoes • <b>Note:</b> hydration breaks mandatory.
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}