import Image from "next/image";

const blurDataUrl = "/placeholder.png"; // Replace with your actual blur image or data URL
const format = "jpg"; // Replace with your actual image format

export default function Logo() {
  return (
    <>
      <Image
        alt="The Quintessential Logo"
        className="mt-14"
        placeholder="blur"
        blurDataURL={blurDataUrl}
        src='https://res.cloudinary.com/dxj8b6h12/image/upload/v1748059485/quintessential_tnmstk.png'
        width={350}
      />
    </>
  );
}
