const AboutMe = () => {
  return (
      <div id={'about-me'}
           className={'h-[100vh] w-[94.2vw] bg-[linear-gradient(to_right,var(--cinnabar)_0%,var(--cinnabar)_50%,var(--japanese-indigo)_50%,var(--japanese-indigo)_100%)] flex flex-col justify-center items-center'}>
          <span className={'font-extrabold font-mono text-9xl text-[var(--flesh)] pb-8'}>{'<sagnik>'}</span>
          <div
              className={'flex w-64 text-nowrap overflow-hidden bg-[var(--japanese-indigo)] italic border-solid border-[var(--cinnabar)] border-4 pt-2 pb-2 pl-6 pr-6 rounded-3xl font-bold font-mono text-1.5xl text-[var(--cadet-grey)]'}>
              <div>
                  <ul className={'animate-loop-scroll'}>
                      <li className={'inline'}>· fullstack ·|</li>
                      <li className={'inline'}>· android & ios ·|</li>
                      <li className={'inline'}>· software development ·|</li>
                      <li className={'inline'}>· cybersecurity ·|</li>
                      <li className={'inline'}>· blockchain ·|</li>
                      <li className={'inline'}>· ai & ml ·|</li>
                      <li className={'inline'}>· database ·|</li>
                  </ul>
              </div>
              <div>
                  <ul className={'animate-loop-scroll'}>
                      <li className={'inline'}>· fullstack ·|</li>
                      <li className={'inline'}>· android & ios ·|</li>
                      <li className={'inline'}>· software development ·|</li>
                      <li className={'inline'}>· cybersecurity ·|</li>
                      <li className={'inline'}>· blockchain ·|</li>
                      <li className={'inline'}>· ai & ml ·|</li>
                      <li className={'inline'}>· database ·|</li>
                  </ul>
              </div>
          </div>
          <span className={'font-bold font-mono text-8xl text-[var(--flesh)] pt-4'}>{"<bose>"}</span>
      </div>
  );
}

export default AboutMe;