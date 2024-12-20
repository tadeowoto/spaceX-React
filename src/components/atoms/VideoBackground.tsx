const VideoBackground = () => {
    return (
      <div className="fixed inset-0 w-full h-screen overflow-hidden z-[-1] ">
        <video
          className="absolute top-1/2 left-1/2 w-full h-screen object-cover transform -translate-x-1/2 -translate-y-1/2 "
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_6_West_Drone_20241119_website_H_email_aebad7e040.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoBackground;
  