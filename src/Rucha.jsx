import React, { useEffect, useState } from 'react';

function Rucha() {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const videoId = 1;
    if (!video) {
      fetchVideoById(videoId);
    }
  }, [video]);

  const fetchVideoById = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/videos/${id}`);
      const data = await response.json();
      setVideo(data);
    } catch (error) {
      console.log('Error fetching video:', error);
    }
  };

  return (
    <>
      <div className='Demo'>
        <div className='col-md-10 Demo1'>
          <h3>Home / Sports / Cricket / Sunandan lele </h3>
          <div>
            <img src="images/Rucha.jpg" className="img1" alt="Rucha" />
          </div>
        </div>
        <div className='Demo3'>
          {video && (
            <iframe src={video.url} height="100%" width="100%" title="Video"></iframe>
          )}
        </div>
        <div className='Description'>
          {video && (
            <h3>{video.shortDescription}</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Rucha;
