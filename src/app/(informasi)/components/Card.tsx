import Image from "next/image";

export default function Card({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="flex flex-col rounded-lg shadow-md p-4 bg-[#CCE7F7] max-w-xs ">
            <Image 
                src="/information-details.jpg" 
                alt="poster" 
                width={800} 
                height={1034}
                className="rounded-xl w-full h-80"
            />
            <p className="font-bold">{title}</p>
            <p className="text-justify text-xs ">{description}</p>
        </div>
    );
}