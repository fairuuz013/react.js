import React from "react";

function ChildWithButton({ onAction }) {
    console.log("Render ChildWithButton")

    return (
        <div>
            <button onClick={onAction}></button>
        </div>
    )
}


export default React.memo(ChildWithButton)