import Nabar from './Navbar';
import Carousel from 'react-bootstrap/Carousel';
import trial from '../images/trial.webp';
import entyrVideo from "../videos/EntryVideo.mp4";
function Home() {
   return ( 
   <>
         <div class= "Home">
            <Nabar></Nabar>
                <div className='w-100 d-flex flex-column justify-content-center'>
                <Carousel> 
                    <Carousel.Item>
                    <video
                    className="slider-video"
                    src={entyrVideo}
                    loop
                    autoPlay
                    loading="lazy">
                    </video>
                    </Carousel.Item>

                    <Carousel.Item interval={1000}>
                        <img
                        className=""
                        src={trial}
                        alt="First slide"
                        height="500"width="500" 
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
        </div>        
    </>
    )
}

export default Home;    
