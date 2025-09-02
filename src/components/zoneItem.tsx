type ZoneItemProps = {
    titre: string;
    description: string;
    image: string;
};


function ZoneItem({ titre, description, image }: ZoneItemProps) {
    return (
        <div className="flex items-center justify-between gap-10 w-full max-w-5xl mx-auto">
            <div className="space-y-6 max-w-xl">
                <p className="font-oswald-bold text-5xl">{titre}</p>
                <p className="font-oswald text-xl">{description}</p>
            </div>
            <img src={image} alt="Logo" className="w-75 h-auto object-contain rounded-full" />
        </div>
    )
}

export default ZoneItem