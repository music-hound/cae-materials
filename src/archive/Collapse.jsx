import { useRef } from "react";


const Collapse = ( { isOpen, children } ) => {
  const contentRef = useRef(null);

  return (
    <div
    onClick={ (e) => e.stopPropagation() }
      style={{

        borderLeft:'1px solid',
        borderColor:'border.soft',
        display:'flex',
        flexDirection:'column',
        gap:'10px',
        padding:'80px 20px 0px 20px',
        backgroundColor:'background.default',

        overflow: "hidden",
        transition: "height 0.3s ease",
        height: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
      }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default Collapse;
