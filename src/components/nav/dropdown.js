import React from "react";
function Dropdown({ dropOpt }, { dropOpen } ) {
    console.log(dropOpt);
        console.log(dropOpen);
    const render = () => {
        
        if(dropOpen){
            
            return(<div>drop1</div>);
        }else{
            return(<div></div>)
        }
    }
    return (
        <section>
            {render()}
        </section>
    )
    }
    


export default Dropdown;