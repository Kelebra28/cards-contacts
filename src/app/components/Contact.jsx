import React from "react";
import VCard from "vcard-creator";
import Image from "next/image";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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
    <div className="bg-gray-900 border-2 w-full min-h-screen mx-auto grid grid-rows-3 font-sans text-xl">
      <main className="mt-8">
        <div className="flex flex-col justify-center mt-8 items-center text-white">
          <Image
            src="/img/rpm_white.svg"
            alt="rpm code"
            className="w-12 h-12 mr-4"
            width={100}
            height={50}
          />

          <div className="mt-12 mb-12 w-48 h-48 border-6 border-teal-900 rounded-full">
            <Image
              src="/img/eiichi.jpeg"
              alt={alt}
              className="w-full h-full rounded-full"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className={styles.Info_Container}>
          <div className={styles.Title_Container}>
            <Image
              src="/img/x_blanco.svg"
              alt="rpm code"
              className={styles.Title_Container_IMG}
              width={100}
              height={50}
            />
            <h2 className="text-3xl font-semibold border-b-2 border-teal-400">
              {title}
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center text-white ml-12">
            <div className="flex items-center mb-4">
              <PhoneIphoneIcon className="text-pink-500 text-3xl" />
              <a href={`tel:+52${phone}`} className="ml-4 text-lg">
                {phone}
              </a>
            </div>
            <div className="flex items-center mb-4">
              <WhatsAppIcon className="text-teal-500 text-3xl" />
              <a
                target="_blank"
                href={urlWhatsApp}
                className={styles.Info_Text1}
              >
                WhatsApp
              </a>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center mb-4">
                <EmailIcon className="text-red-500 text-3xl" />
              </div>

              <div className="flex items-center mb-4">
                <a href={emailPersonal} className="ml-4 text-lg">
                  {email}
                </a>
                <a href={emailCompany} className="ml-4 text-lg">
                  {emailC}
                </a>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <LanguageIcon className="text-teal-500 text-3xl" />
              <a
                href={`https://${webpage}/`}
                target="_blank"
                className="ml-4 text-lg"
              >
                {webpage}
              </a>
            </div>
            <div className={styles.Info}>
              <GitHubIcon className="ml-4 text-lg" />
              <a
                href="https://github.com/EiichiM"
                target="_blank"
                className={styles.Info_Text2}
              >
                Git Hub
              </a>
            </div>
          </div>
        </div>
      </main>
      <button
        onClick={downloadContact}
        className="fixed border-2 border-white rounded-full w-20 h-20 bottom-8 right-8 flex justify-center items-center"
      >
        <PersonAddIcon className="text-teal-900 text-3xl" />
      </button>
    </div>
  );
};

export default Contact;
