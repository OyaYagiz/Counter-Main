
import { useState } from "react";

const Accordion = ({title, description}) => {
   const [isOpen, setIsOpen] = useState(false);
   console.log(isOpen);

    console.log(title);
    console.log(description);

    return <div className="bg-white rounded-3 p-3 text-dark">
        <div className="d-flex justify-content-between align-items-center ">
            <h2>{title}</h2>
            <button
             onClick={() => {
                setIsOpen(!isOpen);
             }}
            className="btn btn-primary buton">

                {isOpen ? '-' : '+'}
            </button>
        </div>

         {isOpen && (
        <p className="mt-4 lead">{description}</p>
        )}
    </div>;
};

export default Accordion;