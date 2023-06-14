

const BannerText = () => {
    return (
        <div className="absolute rounded-xl flex items-center justify-center w-full h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 lg:pl-12 w-full text-center'>
                <h2 className="text-5xl font-bold font-primary text-center">Play Your Instrument</h2>
                <h2 className='text-3xl font-bold font-primary text-cyan-500'>Unleash Your Inner Maestro,Unlock the Melodies Within</h2>
                <div>
                    <button className="btn btn-outline border-t-0 border-x-0 border-b-4 btn-info">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default BannerText;