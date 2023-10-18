import React, { useMemo } from "react";
import VCard from "vcard-creator";
import Image from "next/image";
import ButtonAnimation from "./ButtonAnimation/ButtonAnimation";
import SocialButtons from "./SocialButton/SocialButtons";
import PoweredButton from "./PoweredButton/PoweredButton";
import QRCodeGenerator from "./generatorQr/generatorQr";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LanguageIcon from "@mui/icons-material/Language";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Contact.css";

import { URL_SITE } from "../utils/contants";

import "./Contact.css";

const Contact = ({
  addressMap,
  altlogo,
  altImg,
  contactImg,
  companySlogan,
  companyBgColor,
  companyTextColor,
  company,
  email,
  emailC,
  icons,
  imgLogo,
  jobTittle,
  lastname,
  miniLogo,
  name,
  negative,
  phone,
  primaryColor,
  secundaryColor,
  title,
  urlCompany,
  urlContact,
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

  const urlWhatsApp = `https://api.whatsapp.com/send?phone=+52${phone}&text=Hola!}`;

  // Style Company
  const companyStyles = {
    "--companyBg": companyBgColor,
    "--companyTextColor": companyTextColor,
    "--primary": primaryColor,
  };

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

  let googleMapsURL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    addressMap
  )}`;

  const bgIcon = useMemo(() => {
    if (negative) {
      true;
    }
    return false;
  }, [negative]);

  console.log(urlCompany, urlContact);
  return (
    <div
      className={`w-full min-h-screen mx-auto  font-sans text-xl pb-10 bg`}
      style={companyStyles}
    >
      <main className="mt-8">
        <div
          className="flex flex-col justify-center items-center mt-8 customText"
          style={companyStyles}
        >
          {companySlogan ? (
            <>
              <Image
                src={imgLogo}
                alt={altlogo}
                width={300}
                height={50}
                style={{ marginBottom: "1rem" }}
              />
              <div className="flex items-center justify-center w-5/6 mb-8">
                <p className="text-xl text-center font-semibold">
                  {companySlogan}
                </p>
              </div>
            </>
          ) : (
            <>
              <Image
                src={imgLogo}
                alt={altlogo}
                width={300}
                height={50}
                style={{ marginBottom: "4rem" }}
              />
            </>
          )}
          {contactImg ? (
            <div
              className={`mt-2 mb-12 w-48 h-48 border-solid border-4 border-[${
                negative ? "#000000" : "#ffffff"
              }] rounded-full`}
            >
              <Image
                src={contactImg}
                alt={altImg}
                className="w-full h-full rounded-full"
                width={200}
                height={200}
              />
            </div>
          ) : null}
        </div>

        <div
          className="flex flex-col justify-center items-center customText"
          style={companyStyles}
        >
          <div className="flex items-center justify-center w-full mb-8">
            {miniLogo && (
              <Image
                src={miniLogo}
                alt={altlogo}
                className="mr-4"
                width={50}
                height={50}
              />
            )}
            <div>
              <h2 className="text-3xl font-semibold border-b-2 ">{title}</h2>
              <p>{jobTittle}</p>
            </div>
          </div>
          <div
            className="flex flex-col justify-center items-center customText"
            style={companyStyles}
          >
            <div className="flex items-center my-4">
              <ButtonAnimation
                negative={negative}
                textColor={companyTextColor}
                backgroundColor={primaryColor}
                icon={
                  <PhoneIphoneIcon
                    className={`${
                      negative ? "text-white" : "text-black"
                    } text-3xl mr-2`}
                  />
                }
                label={phone}
                link={`tel:+52${phone}`}
              />
            </div>
            <div className="flex items-center my-4">
              <ButtonAnimation
                negative={negative}
                textColor={companyTextColor}
                backgroundColor={secundaryColor}
                icon={
                  <WhatsAppIcon
                    className={`${
                      negative ? "text-white" : "text-black"
                    } text-3xl mr-2`}
                  />
                }
                label={`WhatsApp`}
                link={urlWhatsApp}
              />
            </div>
            {email ? (
              <div className="flex items-center my-4">
                <ButtonAnimation
                  negative={negative}
                  textColor={companyTextColor}
                  backgroundColor={primaryColor}
                  icon={
                    <EmailIcon
                      className={`${
                        negative ? "text-white" : "text-black"
                      } text-3xl mr-2`}
                    />
                  }
                  label={email}
                  link={emailPersonal}
                  expand
                />
              </div>
            ) : null}
            {emailC ? (
              <div className="flex items-center my-4">
                <ButtonAnimation
                  negative={negative}
                  textColor={companyTextColor}
                  backgroundColor={secundaryColor}
                  icon={
                    <EmailIcon
                      className={`${
                        negative ? "text-white" : "text-black"
                      } text-3xl mr-2`}
                    />
                  }
                  label={emailC}
                  link={emailCompany}
                  expand
                />
              </div>
            ) : null}
            {webpage ? (
              <div className="flex items-center my-4">
                <ButtonAnimation
                  negative={negative}
                  textColor={companyTextColor}
                  backgroundColor={primaryColor}
                  icon={
                    <LanguageIcon
                      className={`${
                        negative ? "text-white" : "text-black"
                      } text-3xl mr-2`}
                    />
                  }
                  label={webpage}
                  link={`https://${webpage}/`}
                  expand
                />
              </div>
            ) : null}
            {addressMap ? (
              <div className="flex items-center my-4">
                <ButtonAnimation
                  negative={negative}
                  textColor={companyTextColor}
                  backgroundColor={secundaryColor}
                  icon={
                    <LocationOnIcon
                      className={`${
                        negative ? "text-white" : "text-black"
                      } text-3xl mr-2`}
                    />
                  }
                  label={addressMap}
                  link={`${googleMapsURL}`}
                  expand
                />
              </div>
            ) : null}

            <div className="flex items-center my-4">
              <SocialButtons icons={icons} negative={negative} />
            </div>
            <div className="flex items-center my-4">
              <QRCodeGenerator
                qrData={`${URL_SITE}/${urlCompany}/${urlContact}`}
                qrNameFile={`${urlCompany}_${urlContact}`}
              />
            </div>
            <div className="flex items-center my-4">
              <PoweredButton negative={negative} />
            </div>
          </div>
        </div>
      </main>
      {negative ? (
        <button
          onClick={downloadContact}
          className={`bg-black fixed border-2 border-white rounded-full w-20 h-20 bottom-8 right-8 flex justify-center items-center z-50 animationDowload`}
        >
          <PersonAddIcon className={`text-white text-3xl animationDowload`} />
        </button>
      ) : (
        <button
          onClick={downloadContact}
          className={`bg-white fixed border-2 border-black rounded-full w-20 h-20 bottom-8 right-8 flex justify-center items-center z-50 animationDowload`}
        >
          <PersonAddIcon className={`text-black text-3xl animationDowload`} />
        </button>
      )}
    </div>
  );
};

export default Contact;
