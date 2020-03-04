import React, { useState, useEffect } from 'react';
import Gallery from "react-photo-gallery";

export default function Snapshots(props) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        // Update the document title using the browser API
        if (checked === false) {
            setChecked(true);
        }
    });

    const photos = props.photos;

    return(
        <div>
            <Gallery photos={photos} limitNodeSearch={4} />
        </div>
    )
}