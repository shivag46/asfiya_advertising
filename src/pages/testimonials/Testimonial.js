import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Card({content}){
   return (
        <div className="flex flex-col m-10 p-5 card">
            <div className="flex mb-6">
                <img src={require("../../assets/star.png")} className="w-6 h-6 mx-2" />
                <img src={require("../../assets/star.png")} className="w-6 h-6 mx-2" />
                <img src={require("../../assets/star.png")} className="w-6 h-6 mx-2" />
            </div>
            <div className='mb-6 font-normal'>
                {content.body}
            </div>
            <div className="flex items-center">
                <img src={require("../../assets/bg.png")} className="w-12 h-12 rounded-full mx-2" />
                <div className="flex flex-col mx-2">
                    <h1 className="font-bold text-lg">{content.author}</h1>
                    <h4 className="text-slate-600">{content.designation}</h4>
                </div>
            </div>
        </div>
   )
}

function Testimonial(){
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    const contents = [
        {
            body:"Aenean at est sapien. Praesent egestas, tortor mollis congue consequat, sem tellus hendrerit nibh, non fringilla ligula mauris sit amet mi. Phasellus finibus ac leo ut condimentum. Aenean auctor venenatis enim in malesuada. Nullam elementum in mi at lacinia. Integer aliquam, tellus et consequat volutpat, magna massa consequat massa, eget tincidunt sapien metus a ipsum. Integer eu ultrices nulla, at aliquam lectus.",
            author:"Chelsea Morgan",
            designation:"CEO of Subway",
            rating:3
        },
        {
            body:"Quisque non luctus magna. Suspendisse lacinia sapien est, eget malesuada odio sollicitudin at. Praesent hendrerit dui vel accumsan ultrices",
            author:"Nick Cave",
            designation:"CMO of Nokia",
            rating:4
        },
        {
            body:"Sed gravida sem et dui facilisis, ac euismod dui malesuada. Quisque arcu elit, pharetra nec ultrices vel, gravida nec sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque eu risus at leo tristique vulputate ut a nisl. Vivamus ante urna, facilisis eget nibh eget, dapibus venenatis erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas",
            author:"Clark Dave",
            designation:"CMO of Nokia",
            rating:4
        },
        {
            body:"Vestibulum lorem velit, tincidunt sed suscipit vel, efficitur in dolor. Sed pretium libero tellus, eu maximus nisi mollis eu. In id eleifend ligula, in accumsan risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod turpis nec mi cursus, sit amet rutrum elit orna",
            author:"Lana Rosenfield",
            designation:"Senior Vice President at Pinterest",
            rating:5
        },
        {
            body:"Donec est leo, tempor eget libero nec, ullamcorper condimentum neque. Nam eu nulla accumsan, euismod turpis non, auctor odio. Vivamus dictum, enim at pharetra tempor, tortor nisl pellentesque erat, a sollicitudin velit ex sit amet dolor. Mauris condimentum, velit a tincidunt maximus, mauris ex varius purus, id feugiat augue dolor a libero. Curabitur eget eros sed dolor volutpat iaculis sed in elit. ",
            author:"Bruce Wayne",
            designation:"CEO of Wayne industries",
            rating:2
        },
        {
            body:" Pellentesque eu risus at leo tristique vulputate ut a nisl. Vivamus ante urna, facilisis eget nibh eget, dapibus venenatis erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec et nisl arcu. Integer maximus mauris purus, at finibus quam commodo id.",
            author:"Clarke Kent",
            designation:"Journalist at Daily Planet",
            rating:4
        },
        {
            body:"Aenean at est sapien. Praesent egestas, tortor mollis congue consequat, sem tellus hendrerit nibh, non fringilla ligula mauris sit amet mi. Phasellus finibus ac leo ut condimentum. Aenean auctor venenatis enim in malesuada. Nullam elementum in mi at lacinia. Integer aliquam, tellus et consequat volutpat, magna massa consequat massa, eget tincidunt sapien metus a ipsum. Integer eu ultrices nulla, at aliquam lectus. Donec est leo, tempor eget libero nec, ullamcorper condimentum neque. Nam eu nulla accumsan, euismod turpis non",
            author:"Tony Stark",
            designation:"President at Stark Industries",
            rating:3
        }
    ]
    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
          <div className="flex justify-end mr-52 my-5 carousel-button-group"> 
            <img src={require("../../assets/left-arrow.png")} className="w-8 h-8 mx-2 hover:cursor-pointer" onClick={() => previous()} />
            <img src={require("../../assets/right-arrow.png")} className="w-8 h-8 mx-2 hover:cursor-pointer" onClick={() => next()}  />
          </div>
        );
      };
      
    return (
        <div>
            <div className="text-4xl font-extrabold m-5">
                Testimonials
            </div>

            <div className="flex flex-col">
                <Carousel
                responsive={responsive}
                arrows={false} 
                renderButtonGroupOutside={true} 
                customButtonGroup={<ButtonGroup />}
                infinite={true}
                swipeable={true}
                // centerMode={true}
                >
                    {
                        contents.map((content) => <Card content={content}/>)
                    }
                </Carousel>
            </div>    
        </div>
    )
}

export default Testimonial