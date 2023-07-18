import {summri} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex 
    justify-center items-center flex-col">
      <nav className="flex justify-between
       items-center w-full mb-10 pt-3">
        <img src={summri} alt="summri_logo" 
          className= "h-8 w-48 object-contain" />
        <button 
          onClick={() => window.open('https://github.com/piyush121728')}
          className="green_btn"
        >
          Github
        </button>
       </nav>
      <h1 className="head_text">
        <span className="black_gradient">Article Synthesis Using <br
          className="max-md:hidden" /></span>
        <span className="green_gradient">OpenAI-GPT-4</span>
      </h1>
      <h2 className="desc">
        With summri, an open-source article summarizer that turns large texts into clear, concise summaries, you can make reading easier.
      </h2>

      <footer className='mt-5'>
        <span className="font-satoshi text-sm bg-green-100 opacity-90">Made with ❤️ in India! </span>
      </footer>
    </header>
  )
}

export default Hero