const SideBar = () => {
    return (
        <div
            className={'fixed top-0 left-0 h-screen w-[4.6vw] m-0 p-0 flex flex-col bg-[var(--japanese-indigo)] border-solid border-l-0 border-t-0 border-b-0 border-r-2 border-[var(--cinnabar)]'}>
            <div className={'mb-auto pl-0.5 pt-2 grid grid-rows-2 grid-flow-col gap-0'}>
                <span className={'font-bold font-mono text-5xl text-[var(--flesh)] row-span-2'}>b</span>
                <span className={'font-bold font-mono text-[var(--cadet-grey)] tracking-tighter'}>ose</span>
                <span className={'italic font-bold font-mono text-[var(--flesh)] text-base tracking-tighter'}>.gg</span>
            </div>
            {/* TODO: This div is for the icon of the page, fill it later. */}
            <div className={'mb-4'}>
                <a href={'#my-work'}>
                    <span
                        className={'font-bold italic text-base font-mono text-[var(--cadet-grey)] pl-2 hover:text-[var(--flesh)]'}> {"!————"} </span>
                </a>
            </div>
            <div className={'mb-4'}>
                <a href={'#my-projects'}>
                    <span
                        className={'font-bold italic text-base font-mono text-[var(--cadet-grey)] pl-2 hover:text-[var(--flesh)]'}> {"—!———"} </span>
                </a>
            </div>
            <div className={'mb-4'}>
                <a href={'#my-qualifications'}>
                    <span
                        className={'font-bold italic text-base font-mono text-[var(--cadet-grey)] pl-2 hover:text-[var(--flesh)]'}> {"——!——"} </span>
                </a>
            </div>
            <div className={'mb-4'}>
                <a href={'#my-media'}>
                    <span
                        className={'font-bold italic text-base font-mono text-[var(--cadet-grey)] pl-2 hover:text-[var(--flesh)]'}> {"———!—"} </span>
                </a>
            </div>
            <div className={'mb-4'}>
                <a href={'#my-contacts'}>
                    <span
                        className={'font-bold italic text-base font-mono text-[var(--cadet-grey)] pl-2 hover:text-[var(--flesh)]'}> {"————!"} </span>
                </a>
            </div>
            <div className={'mt-auto pl-1'}>
                <a href={'#about-me'}>
                    <p className={'font-bold font-mono text-2xl text-[var(--cadet-grey)] pl-1.5 pb-4 hover:text-[var(--flesh)]'}>
                        {'</>'}
                    </p>
                </a>
            </div>
        </div>
    );
};

export default SideBar;