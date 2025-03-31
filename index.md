announcement

/* css
 */


/* .announcement-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2rem;
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    z-index: 1000;
  }
  
  .announcement-bar a {
    text-decoration: none;
    color: #333;
  }
  
  .close-button {
    cursor: pointer;
    font-size: 1.5rem;
    line-height: 1;
  }
  
  .announcement-toggle:checked + .announcement-bar {
    display: none;
  }
   */






/* 
   <!--     <input type="checkbox" id="announcement-toggle" class="announcement-toggle" hidden>
<div class="announcement-bar">
  <a href="#your-link">Your announcement text here</a>
  <label for="announcement-toggle" class="close-button">×</label>
</div> -->
 */



 cards code before the butchering

 .card1 {
    text-align:center;
    position: absolute;
    left: 100px;
    width: 250px;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: linear-gradient(rgb(223, 223, 223),rgb(148, 233, 155));
    transition:.6s;
    
    transform: rotatex(75deg) translatey(-200px) translatez(-100px);
    box-shadow: 0px 20px 60px rgba(0,0,0, 0.5);
  }
  .card1:hover{
    transform: rotatex(0deg);
    transform: rotatez(0deg);
    transition:.6s;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
  .card1 img{
    transform: translateY(15px);
    width:200px;
    height:120px;
  }
  h3{
    font-size:25px;
    font-family: 'Abel', sans-serif;
    color:rgb(255,255,255);
    text-shadow: 0 0 2px rgb(255,255,255);
    transform: translatey(10px);
    margin: 1rem;
  }
  
  p{
    
    font-family: 'Abel', sans-serif;
    color: white;
    text-align:center;
    width:220px;
    transform: translatex(12px);
    margin-top: 1rem;
  }
  
  
  .card2 {
    text-align:center;
    position: absolute;
    left: 550px;
    width: 250px;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: linear-gradient(rgb(93,94,170),rgb(93,66,103));
    animation: animate 1s linear infinite;
    transition:.6s;
    
    transform: rotatex(75deg) translatey(-200px) translatez(-100px);
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
  }
  .card2:hover{
     transform: rotatex(0deg);
    transition:.6s;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
  .card2 img{
    transform: translateY(15px);
    width:180px;
    height:150px;
  }
  .card3 {
    text-align:center;
    position: absolute;
    left: 1000px;
    width: 250px;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: linear-gradient(#ff5252, #b33939);
    transition:.6s;
    
    transform: rotatex(75deg) translatey(-200px) translatez(-100px);
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
  }
  .card3:hover{
     transform: rotatex(0deg);
    transition:.6s;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  }
  .card3 img{
    transform: translateY(15px);
    width:200px;
    height:120px;
  }





Pause from the cards because I need to work:


    <div class="title">
        <h1><span style="color: #ff9f43">Tou</span><span style="color: #0abde3">rist</span> <span style="color: #ee5253">Attr</span><span style="color: #00d2d3">acti<span><span style="color: #5f27cd">ons<span></h1>
      </div>
      <div class="card1 card">
        <img src="img/easy-german-logo.png" alt="">
        <h3>Pyramids</h3>
        <p>The Egyptian pyramids are ancient pyramid-shaped masonry structures located in Egypt. As of November 2008, sources cite either 118 or 138 as the number of identified Egyptian pyramids.</p>
      </div>
      
      <div class="card2 card">
        <img src="https://wallazee.global.ssl.fastly.net/images/dynamic/items/383-1024.png" alt="Eiffel Tower">
        <h3>Statue of Liberty</h3>
        <p>The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States.</p>
      </div>
      
      <div class="card3 card">
        <img src="http://pluspng.com/img-png/download-taj-mahal-png-images-transparent-gallery-advertisement-1185.png" alt="">
        <h3>Taj Mahal</h3>
        <p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor.</p>
      </div>
      <div class="footer">



css



  @import url('https://fonts.googleapis.com/css?family=Exo:700');
  @import url('https://fonts.googleapis.com/css?family=Abel');
  body {
    background-color: #dfe6e9;
    -webkit-transform: perspective(900px);
    -webkit-transform-style: preserve-3d;
  }
  .title{
    width: 100%;
    text-align: center;
  }
  .title h1{
    font-size:50px;
    font-family: 'Exo', sans-serif;
  }


  .card {
    text-align:center;
    width: 250px;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
    transition:.6s;
/*     transform: rotatex(75deg) translatey(-200px) translatez(-100px); */
    box-shadow: 0px 20px 60px rgba(0,0,0, 0.5);
  }
  
  .card1 {
    background: linear-gradient(rgb(223, 223, 223),rgb(148, 233, 155));
  }
  
  
  .card2 {
    background: linear-gradient(rgb(93,94,170),rgb(93,66,103));
  }
  
  
  .card3 {
    background: linear-gradient(#ff5252, #b33939);
  }
  
  .card img{
      transform: translateY(15px);
      width:200px;
      height:120px;
    }
    
    h3{
        font-size:25px;
        font-family: 'Abel', sans-serif;
        color:rgb(255,255,255);
        text-shadow: 0 0 2px rgb(255,255,255);
        transform: translatey(10px);
        margin: 1rem;
    }
    
    p{
        
        font-family: 'Abel', sans-serif;
        color: white;
        text-align:center;
        width:220px;
        transform: translatex(12px);
        margin-top: 1rem;
    }
    
    .card:hover{
        transform: rotatez(0deg);
        transition:.6s;
        box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    }
    
    
    /*   .card1 {
        text-align:center;
        position: absolute;
        left: 100px;
        width: 250px;
        height: 350px;
        margin-top: 10px;
        margin-bottom: 10px;
        background: linear-gradient(rgb(223, 223, 223),rgb(148, 233, 155));
        transition:.6s;
        
        transform: rotatex(75deg) translatey(-200px) translatez(-100px);
        box-shadow: 0px 20px 60px rgba(0,0,0, 0.5);
    } */
    
    /*   .card2 {
    text-align:center;
    position: absolute;
    left: 550px;
    width: 250px;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: linear-gradient(rgb(93,94,170),rgb(93,66,103));
    animation: animate 1s linear infinite;
    transition:.6s;
    
    transform: rotatex(75deg) translatey(-200px) translatez(-100px);
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
}
*/
/*   .card3 {
    text-align:center;
    position: absolute;
    left: 1000px;
    width: 250px;
    height: 350px;
    margin-top: 10px;
    margin-bottom: 10px;
    background: linear-gradient(#ff5252, #b33939);
    transition:.6s;
    
    transform: rotatex(75deg) translatey(-200px) translatez(-100px);
    box-shadow: 0px 20px 60px rgba(0, 0, 0, 0.5);
} */












Perplexity solution

nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 20px 10px rgba(54, 54, 54, 0.5);
  background-color: rgb(215, 250, 227);
}

nav ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style-type: none;
}

nav a {
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%; /* Make the anchor take full height of the nav */
}

nav li:not(.logo-item) a {
  padding: 0rem 1rem; /* Apply original padding to non-logo items */
}

.logo-item a {
  padding: 0.5rem 1rem; /* Reduce padding for logo item */
}

nav a:hover {
  background-color: purple;
  color: white; 
}

.logo-item img {
  display: block; /* Ensures the image doesn't have extra space below */
}












.watch {
  background-color: rgb(255, 255, 255);
  display: flex;
  height: 100svh;
/*   padding-bottom: 75px;  
 */}

.watch-both-videos{
  width: 70vw;
  border: solid 2px orange;
  margin: 0 auto;
  display: flex;

}

.watch-video {
  max-width: 35vw;
  margin: 0 auto;
/*   padding: 20px;
 */  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 2px purple;
}

.video-wrapper-watch iframe{
  aspect-ratio: 16 / 9;
  width: 31vw;
  height: 16.68vw;
/*   border: solid 5px rgb(179, 126, 13);
 */  margin-top: 5rem ;
  margin-bottom: 2rem;
}

.watch h2{
  padding-bottom: 2rem;
}

.video-description-watch {
  
  line-height: 1.3;
  padding: 0 0 2rem 25px;
  color: #333;
  border: dashed 2px pink;
}

.video-button-watch{
  background-color: #27a31c; 
  color: rgb(255, 255, 255);
  border: none;
  padding: 18px 24px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: center;
}

.video-button-watch:hover, .video-button-watch:focus {
  background-color: #58be6e; 
}

