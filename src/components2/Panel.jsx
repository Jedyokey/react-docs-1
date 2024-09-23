import React from 'react'
import { useState } from 'react';

const Panel = ({children}) => {
    const [open, setOpen] = useState(true);

  return (
    <div>
        <section className="panel">
            <button onClick={() => setOpen(!open)}>
                {open ? 'Collapse' : 'Expand'}
            </button>
            {open && children}
        </section>
    </div>
  )
}

export default Panel
