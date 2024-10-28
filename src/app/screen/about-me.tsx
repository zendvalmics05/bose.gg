const AboutMe = () => {
    return (
        <div id={'about-me'}>
            <div className={'h-[100vh] w-[94.2vw] bg-[linear-gradient(to_right,var(--cinnabar)_0%,var(--cinnabar)_50%,var(--japanese-indigo)_50%,var(--japanese-indigo)_100%)] flex flex-col justify-center items-center'}>
                <span className={'font-extrabold font-sans text-9xl text-[var(--flesh)] pb-12'}>{'s@gnik'}</span>
                <div
                    className={'group flex w-64 text-nowrap overflow-hidden bg-[var(--japanese-indigo)] italic border-solid border-[var(--cinnabar)] border-4 pt-2 pb-2 pl-6 pr-6 rounded-3xl font-bold font-mono text-1.5xl text-[var(--cadet-grey)]'}>
                    <div>
                        <ul className={'animate-loop-scroll group-hover:paused'}>
                            <li className={'inline'}>{'> fullstack </'}</li>
                            <li className={'inline'}>{'> android & ios </'}</li>
                            <li className={'inline'}>{'> software development </'}</li>
                            <li className={'inline'}>{'> cybersecurity </'}</li>
                            <li className={'inline'}>{'> blockchain </'}</li>
                            <li className={'inline'}>{'> ai & ml </'}</li>
                            <li className={'inline'}>{'> database </'}</li>
                        </ul>
                    </div>
                    <div>
                        <ul className={'animate-loop-scroll group-hover:paused'} aria-hidden={"true"}>
                            <li className={'inline'}>{'> fullstack </'}</li>
                            <li className={'inline'}>{'> android & ios </'}</li>
                            <li className={'inline'}>{'> software development </'}</li>
                            <li className={'inline'}>{'> cybersecurity </'}</li>
                            <li className={'inline'}>{'> blockchain </'}</li>
                            <li className={'inline'}>{'> ai & ml </'}</li>
                            <li className={'inline'}>{'> database </'}</li>
                        </ul>
                    </div>
                </div>
                <span className={'font-extrabold font-sans text-8xl text-[var(--flesh)] pt-4'}>{"bo$e"}</span>
            </div>

            <div className={'p-0 bg-[var(--japanese-indigo)] flex flex-nowrap flex-row justify-center items-center'}>
                <div className={'bg-[var(--cadet-grey)] border-solid border-[var(--cadet-grey)] border-4 rounded-sm m-16 flex flex-row gap-16'}>
                    <div className={'w-[20vw] flex flex-col'}>
                        <img
                            className={'ml-16 mr-16 mt-16 w-[20vw] border-solid border-[var(--cadet-grey)] bg-[var(--flesh)] rounded-full border-4 hover:border-[var(--japanese-indigo)]'}
                            src={'/placeholder.svg'} alt={'Picture of Sagnik Bose.'}/>
                        <a href={'#'}
                           className={'ml-16 mr-16 mt-2 w-[100%] border-solid border-[var(--cadet-grey)] rounded-full border-4 text-center font-bold font-mono text-[var(--flesh)] bg-[var(--japanese-indigo)] hover:border-[var(--japanese-indigo)]'}>{'<RESUME>'}</a>
                        <a href={'https://github.com/zendvalmics05'}
                           className={'ml-16 mr-16 mt-2 w-[100%] border-solid border-[var(--cadet-grey)] rounded-full border-4 text-center font-bold font-mono text-[var(--flesh)] bg-[var(--japanese-indigo)] hover:border-[var(--japanese-indigo)]'}>{'<GITHUB>'}</a>
                        <a href={'#'}
                           className={'ml-16 mr-16 mt-2 w-[100%] border-solid border-[var(--cadet-grey)] rounded-full border-4 text-center font-bold font-mono text-[var(--flesh)] bg-[var(--japanese-indigo)] hover:border-[var(--japanese-indigo)]'}>{'<LINKEDIN>'}</a>

                    </div>
                    <div>
                        <div className={'m-16 border-solid border-[var(--cadet-grey)] rounded-sm border-4 p-4 bg-[var(--japanese-indigo)]'}>
                            <h1 className={'text-base font-bold text-[var(--flesh)] font-mono'}>HEY, FELLOW HUMAN!</h1>
                            <p className={'text-sm text-[var(--cadet-grey)] font-bold font-sans'}>I am <span className={'text-3xl text-[var(--flesh)] font-bold font-mono'}>SAGNIK BOSE</span>.</p>
                            <p className={"text-sm text-[var(--cadet-grey)] font-bold font-mono"}>Based in Kolkata, India. I am currently a student.</p>
                            <p className={"text-sm text-[var(--cadet-grey)] font-bold font-mono"}>Interested in <span className={'text-2xl text-[var(--flesh)] font-bold font-mono'}>INTERNSHIPS</span>...</p>
                            <br/>
                            <p className={"text-sm text-[var(--cadet-grey)] font-bold font-sans"}>My journey with technology started at a very young age when the love for video games irked my curiosity to learn about game development; and in large, about programming. I am mostly a self taught developer and all my work are works of passion first and works of profession second.</p>
                            <br/>
                            <p className={"text-sm text-[var(--cadet-grey)] font-bold font-sans"}>Here, you can find all my projects and works, along with my other ventures. If you are interested in one of them, why not check out the other projects that I am working on?</p>
                            <br/>
                            <p className={"text-sm text-[var(--flesh)] font-bold font-sans"}>I try my best to create things with ❤️...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;