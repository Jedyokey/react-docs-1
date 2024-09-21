import React from "react";

const poem = {
    lines: [
        "I was born on a rainy day",
        "In a small village, where the sun shone",
        "My father was a doctor, and my mother was a widow",
        "I grew up in a family that loved to play",
        "But I fell in love with a stranger, who had a gift for music",
        "I learned to play the guitar, and I got a job at a record store",
        "But I couldn't help but feel lonely, so I went to a church",
        "I met my beloved, and they shared their story of love and loss",
        "I fell in love again, but this time, it was for a different reason",
        "I met a beautiful woman, who was a painter, and she painted pictures of my dreams",
        "I felt a deep connection, and I knew that I had found my soulmate."
    ]
}

const Poem = () => {
    return (
        <article>
            <h2>Poem</h2>
            {poem.lines.map((line, index) => 
                <div key={index}>
                    {index > 0 && <hr />}
                    <p>{line}</p>
                    {/* <hr /> */}
                </div>
            )} 
        </article>
    )
}

export default Poem;