import Image from "next/image";
import HeroForm from "./components/HeroForm/HeroForm";

export default function Home() {
  return (
    <main className="bg-gray-900 h-screen">
      <div className="bg-gray-900 relative flex flex-col-reverse px-12 py-14 mx-auto lg:block lg:flex-col lg:py-14 xl:py-14 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="https://kitwind.io/assets/kometa/laptop.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
            alt="Laptop Img"
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div className="flex items-center justify-center">
                <Image
                  src="/rpm/rpm_deg_white.svg"
                  alt="RPM Code Logo"
                  width={300}
                  height={24}
                  priority
                  className="mb-4"
                />
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Reinventamos la tarjeta de presentación con NFC
                <br className="hidden md:block" />
              </h2>
              <p className="sm:text-2xl text-2xl font-semibold text-[#FB2B6D] mb-2">
                Tu información de contacto se convierte en un enlace digital.
              </p>
              <p className="text-base text-gray-200 md:text-lg">
                Dile adiós a las tarjetas de papel y descubre un mundo de
                conectividad más eficiente. Con nuestra tecnología innovadora,
                ofrecemos tarjetas de presentación digitales que te destacarán
                en el competitivo mundo empresarial. ¡Convierte tu contacto en
                una experiencia inolvidable!
              </p>
            </div>
            <HeroForm />
          </div>
        </div>
      </div>
    </main>
  );
}
