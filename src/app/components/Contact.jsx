import React from "react";
import VCard from "vcard-creator";
import Image from "next/image";
import ButtonAnimation from "./ButtonAnimation/ButtonAnimation";
import SocialButtons from "./SocialButton/SocialButtons";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PoweredButton from "./PoweredButton/PoweredButton";

const Contact = ({
  altlogo,
  altImg,
  company,
  email,
  emailC,
  jobTittle,
  lastname,
  name,
  phone,
  title,
  waMessage,
  webpage,
}) => {
  const emailSubject = "Cotizacion desarollo";

  const emailPersonal = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}`;
  const emailCompany = `mailto:${emailC}?subject=${encodeURIComponent(
    emailSubject
  )}`;
  const urlWhatsApp = `https://api.whatsapp.com/send?phone=+52${phone}&text=${waMessage}`;

  const downloadContact = () => {
    const vCard = new VCard();
    vCard.addName(name, lastname);

    const telefono = `+52 ${phone}`;
    vCard.addPhoneNumber(telefono);
    vCard.addCompany(company);
    vCard.addJobtitle(jobTittle);
    vCard.addEmail(email);

    const vCardData = vCard.toString();

    const blob = new Blob([vCardData], { type: "text/vcard" });

    const a = document.createElement("a");

    a.style.display = "none";
    a.href = URL.createObjectURL(blob);
    a.download = `contact_${name}_${lastname}.vcf`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(a.href);
    document.body.removeChild(a);
  };

  return (
    <div className="bg-gray-900 border-2 w-full min-h-screen mx-auto  font-sans text-xl pb-10">
      <main className="mt-8">
        <div className="flex flex-col justify-center items-center mt-8 text-white">
          <Image
            src="/rpm/rpm_white.svg"
            alt={altlogo}
            className="mb-4"
            width={150}
            height={50}
          />

          <div className="mt-12 mb-12 w-48 h-48 border-6 border-teal-900 rounded-full">
            <Image
              src="/rpm/eiichi.jpeg"
              alt={altImg}
              className="w-full h-full rounded-full"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-white">
          <div className="flex items-center justify-center w-full mb-8">
            <Image
              src="/rpm/x_blanco.svg"
              alt="rpm code"
              className="mr-4"
              width={100}
              height={50}
            />
            <h2 className="text-3xl font-semibold border-b-2 ">{title}</h2>
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <div className="flex items-center my-4">
              <ButtonAnimation
                backgroundColor="#FB2B6D"
                icon={<PhoneIphoneIcon className="text-white text-3xl mr-2" />}
                label={phone}
                link={`tel:+52${phone}`}
              />
            </div>
            <div className="flex items-center my-4">
              <ButtonAnimation
                backgroundColor="#90FAD6"
                icon={<WhatsAppIcon className="text-white text-3xl mr-2" />}
                label={`WhatsApp`}
                link={urlWhatsApp}
              />
            </div>
            <div className="flex items-center my-4">
              <ButtonAnimation
                backgroundColor="#FB2B6D"
                icon={<EmailIcon className="text-white text-3xl mr-2" />}
                label={email}
                link={emailPersonal}
              />
            </div>
            <div className="flex items-center my-4">
              <ButtonAnimation
                backgroundColor="#FB2B6D"
                icon={<EmailIcon className="text-white text-3xl mr-2" />}
                label={emailC}
                link={emailCompany}
              />
            </div>
            <div className="flex items-center my-4">
              <ButtonAnimation
                backgroundColor="#90FAD6"
                icon={<LanguageIcon className="text-white text-3xl mr-2" />}
                label={webpage}
                link={`https://${webpage}/`}
              />
            </div>

            <div className="flex items-center my-4">
              <SocialButtons />
            </div>
            <div className="flex items-center my-4">
              <PoweredButton />
            </div>
            <div className="flex items-center mb-4">
              <GitHubIcon className="ml-4 text-lg" />
              <a
                href="https://github.com/EiichiM"
                target="_blank"
                className="ml-4 text-2xl"
              >
                Git Hub
              </a>
            </div>
          </div>
        </div>
      </main>
      <button
        onClick={downloadContact}
        className="fixed border-2 border-white rounded-full w-20 h-20 bottom-8 right-8 flex justify-center items-center z-50"
      >
        <PersonAddIcon className="text-white text-3xl " />
      </button>
    </div>
  );
};

export default Contact;
