import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="logo"
          className="w-28 object-contain cursor-pointer"
        />
        <button
          type="button"
          onClick={() =>
            window.open(
              "https://github.com/vronney/article-summarizer",
              "_blank"
            )
          }
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Articles with <br className="max-md-hidden" />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Unlock the power of effortless reading with Summize! Our revolutionary
        open-source article summarizer takes the hassle out of sifting through
        long-winded articles, delivering crisp, clear, and concise summaries
        straight to your screen.
      </h2>
    </header>
  );
};

export default Hero;
