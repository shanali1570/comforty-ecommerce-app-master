import Image from "next/image"

const BrandCompany = () => {
 
    const data = [
        {
            title: "zapier",
            image: "/facilitiesLogo/Logo1.png",
        },
        {
            title: "pipedrive",

            image: "/facilitiesLogo/Logo2.png",
        },
        {
            title: "cibbank",
            image: "/facilitiesLogo/Logo3.png",
        },
        {
            title: "z",
            image: "/facilitiesLogo/Logo4.png",
        },
        {
            title: "burnttoast",
            image: "/facilitiesLogo/Logo5.png",
        },
        {
            title: "pandadoc",
            image: "/facilitiesLogo/Logo6.png",
        },
        {
            title: "moz",
            image: "/facilitiesLogo/Logo7.png",
        },
        
    ]
 
    return (
    <div className='grid grid-cols-4 md:flex justify-center items-center gap-10 py-20'>
        
        {data?.map((item)=>(
        <div key={item?.title} className='flex flex-col sm:flex-row items-center gap-3'>
                {/* Each logo will scale responsively */}
        
          <Image
            width={500}
            height={500}
            alt={item?.title}
            src={item?.image}
            className='w-[150px] cursor-pointer hover:scale-95 sm:w-[200px] lg:w-[250px] h-auto object-contain'
          />
                
            </div>
        ))}

    </div>
  )
}

export default BrandCompany