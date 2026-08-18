import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-20 items-center h-full px-20">
      <div className="w-1/4 flex justify-end">
        <div className="border-10 w-50 h-50 border-white rounded-full overflow-hidden">
          <Image
            src="/images/alam.jpg"
            alt="Gambar Alam"
            width={500}
            height={500}
            className="rounded-full w-50 h-50"
          />
        </div>
      </div>
      <div className="w-3/4 text-white">
        <h1>I am John Smith</h1>
        <p>Frontend Developer</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt soluta enim beatae adipisci dicta atque expedita libero, cumque obcaecati ut unde at temporibus sapiente eligendi provident quisquam similique repellat laboriosam voluptatem magni repellendus aperiam nulla quos. Nostrum temporibus saepe modi itaque delectus mollitia ratione sequi. Nobis, exercitationem autem adipisci, consequatur mollitia earum ea sapiente quibusdam sed esse soluta. Praesentium quaerat veritatis repellendus error tempora similique maiores ut recusandae dolorem ipsam reprehenderit labore voluptate itaque a minus consequatur nostrum saepe porro numquam vitae, facere asperiores. Adipisci, ab veritatis ea nulla cupiditate eum placeat suscipit temporibus dignissimos dolorem. Cum aperiam expedita aut.</p>
      </div>
    </div>
  );
}
