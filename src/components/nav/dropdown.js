import React from "react";
function Dropdown({ dropOpen }) {
    const render = () => {
        switch(dropOpen){
            case true :
                return (
                    <div> drop1</div>
                );
            case false :
                return (<div></div>);
            default:
                return (<div></div>);
        }
    }
    return (
        <section>
            {render()}
        </section>
    )
    }
    


export default Dropdown;