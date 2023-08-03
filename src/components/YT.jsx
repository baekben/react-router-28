export default function YT() {
  return (
    <>
      <div className="videoContainer">
        <div className="videoPlayer">
          <iframe
            width="968"
            height="545"
            src="https://www.youtube.com/embed/gN1wZiwvjX4?list=PLQcpjwveNrhLk4gB6c87VACB9mBS0ibas"
            title="Coffin Dance Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
