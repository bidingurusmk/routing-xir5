import Image from "next/image";
import { portofolioItems } from "@/data/portofolio";
const PortofolioPage = async ({ searchParams }: 
    { searchParams?: Promise<{ category?: string }> }) => {
    const resolvedSearchParams = searchParams ? await searchParams : {};
    const { category } = resolvedSearchParams;
    const filteredItems = category
        ? portofolioItems.filter(item => item.category === category)
        : portofolioItems;

    return (
        <div className="px-40">
            <h1 className="text-3xl font-bold text-center">Portofolio</h1>
            <div className="grid grid-cols-4 gap-10">
                {filteredItems.map((item) => (
                    <div key={item.id} className="w-full">
                        <div className="aspect-h-1 aspect-w-1 w-full 
                    overflow-hidden rounded-md bg-gray-200 lg:aspect-none 
                    group-hover:opacity-75 lg:h-80">
                            <Image src={item.image}
                                alt="Portofolio Image" className="rounded-lg w-full" width={500} height={500} />
                        </div>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default PortofolioPage;