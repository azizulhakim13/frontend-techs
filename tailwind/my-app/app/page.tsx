import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-5">
      <div>
        <h1 className="text-3xl font-semibold underline border-2 border-gray-400 text-vue p-4">Text1</h1>
        <h1 className="text-3xl font-semibold underline text-yellow-500 bg-[#ccc]">Text2</h1>
      </div>
    </main>
  );
}
