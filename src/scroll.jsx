import React, {useState} from 'react';

let Scroll = () => {

    const [visible, setVisible] = useState(false);
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500){
      setVisible(true);
    } 
    else if (scrolled <= 500){
      setVisible(false);
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth',
    });
  };
  
  window.addEventListener('scroll', toggleVisible);


    return(
        <>
            <div className="container">
                <span className="fas fa-triangle" onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}><b>&#8593;</b></span>
            </div>
        </>
    );
}
export default Scroll;