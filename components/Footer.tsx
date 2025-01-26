export default function Footer() {
  return (
    <footer className="flex flex-col space-y-10 justify-center m-10">
      <div className="flex justify-center space-x-5">
        <a
          href="https://github.com/Daheer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/github.png"
            alt="github"
          />
        </a>
        <a
          href="https://www.youtube.com/@deedaxinc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/youtube-play--v1.png"
            alt="youtube-play--v1"
          />
        </a>
        <a
          href="https://www.linkedin.com/daheer-deedax"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="https://www.x.com/deedaxinc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios/50/twitterx.png"
            alt="twitterx"
          />
        </a>
      </div>
      <p className="text-center text-gray-700 font-medium">
        &copy; 2025 Deedax Inc. All rights reservered.
      </p>
    </footer>
  );
}
