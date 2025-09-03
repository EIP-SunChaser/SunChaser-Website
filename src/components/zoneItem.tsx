type ZoneItemProps = {
    title: string;
    description: string;
    image: string;
};


function ZoneItem({ title, description, image }: ZoneItemProps) {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 w-full max-w-5xl mx-auto">
            <div className="space-y-4 lg:space-y-6 max-w-xl text-center lg:text-left">
                <p className="font-oswald-bold text-3xl sm:text-4xl lg:text-5xl">{title}</p>
                <p className="font-oswald text-lg sm:text-xl">{description}</p>
            </div>
            <img src={image} alt="Logo" className="w-48 sm:w-64 lg:w-75 h-auto object-contain rounded-full" />
        </div>
    )
}

export default ZoneItem