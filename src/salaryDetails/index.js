import React from "react";
import '../App.css';

class Sample extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
 
          
          salary: 18300,
          earningPerYear:212.28,
          feesPerYear: 21.23,
          min:500,
          max:250000,
    

        
         
    
   }
      this.handleChange = this.handleChange.bind(this);

        
         
    }







     handleChange = (e) =>{
      var value = parseInt(e.target.value.replace(/,/g, ''));
      const max = 250000;
      const earningDiv = 86.20;
      const feesDiv = 861.98;

      value = value > max ? max : value;    

      const isNaN = !Number.isNaN(parseFloat(value));    
      this.setState({
        salary: isNaN ? parseFloat(value) : "",
        earningPerYear: isNaN ? parseFloat(value / earningDiv).toFixed(2) : 0,
        feesPerYear: isNaN ? parseFloat(value / feesDiv).toFixed(2) : 0
      })
    }


   





  render() {
    
    const {salary,feesPerYear,earningPerYear,min,max}= this.state;
       
  

  return (
    <div className="container">
      <section class="generic-banner relative banner-area-inner1">
      <div  style={{backgroundColor: "black", opacity:0.4 }} ></div>


        	<div class="row height align-items-center justify-content-center">
							<div class="generic-banner-content">
                <div style={{marginTop:50}}>
								<h2 class="head2-inner" >Lending made easy</h2>
                </div>
								<p style={{marginTop:50,color:'white',fontWeight:'bold',fontSize:20}}>Earn up to -1.16% a year across a wide range of P2P sites with investUP</p>
                <button className="genric-btn primary circle"    style={{marginTop:50, color:'#abb8c3' }}>Get Started now</button>       

							</div>
              </div>							
      </section>
     
      <div className="main-content">
        <div className="form-text">
          <div style={{ fontSize: "37px", textAlign: "center" }}>With<span className="highlight-text salary">€<input min={min} max={max} value={salary} onChange={(e)=>this.handleChange(e)}></input></span> your estimated earning cound be <span className="earnings highlight-text">€-{earningPerYear}</span> * per
  year with fees of just <span className="highlight-text fees">€-{feesPerYear}</span> per year.
  </div>
          <p className="paragraph">Estimated earnings are based on -1.16% per annum before tax any potential losses. As with most forms of investment, peer-to-peer lending carries a
    degree of risk to your capital; In this case, if borrows were unable to repay your loans.</p>
        </div>
        <div className="range-value">
          <span className="start-value">€ 500</span>
          <input id="range" type="range" min={min} max={max} value={salary} onChange={(e) => this.handleChange(e)} />
          <span className="end-value">€ 250,000</span>
        </div>
      </div>
    </div>
  );
    }
  
}
  


export default Sample;
