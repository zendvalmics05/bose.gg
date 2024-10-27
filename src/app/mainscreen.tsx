const Mainscreen = () => {
    return(
        <div>
            <div id={'about-me'} className={'h-[100vh] w-[94.2vw] bg-[linear-gradient(to_right,var(--cinnabar)_0%,var(--cinnabar)_50%,var(--japanese-indigo)_50%,var(--japanese-indigo)_100%)] flex flex-col justify-center items-center'}>
                <span className={'font-extrabold font-mono text-9xl text-[var(--flesh)] pb-8'}>{'sagnik'}</span>
                <div className={'bg-[var(--japanese-indigo)] italic border-solid border-[var(--cinnabar)] border-4 pt-2 pb-2 pl-4 pr-4 rounded-3xl font-bold font-mono text-1.5xl text-[var(--cadet-grey)]'}>
                    Frontend
                    Backend

                </div>
                <span className={'font-bold font-mono text-8xl text-[var(--flesh)] pt-4'}>{'bose'}</span>
            </div>
            hello
        </div>
    );
};

export default Mainscreen;