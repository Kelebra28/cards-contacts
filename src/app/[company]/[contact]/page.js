"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Contact from "@/app/components/Contact";
import { companyMock } from "@/app/data/companyMock";

export default function ContactPage() {
  const contactStructure = {
    id: "",
    imgLogo:"",
    altlogo: "",
    altImg: "",
    company: "",
    email: "",
    emailC: "",
    jobTittle: "",
    lastname: "",
    name: "",
    phone: "",
    title: "",
    webpage: "",
  };
  const companyStructure = {
    id: "",
    companyId: "",
    imgLogo: "",
    altlogo: "",
    company: "",
    companyBgColor: "",
    companyTextColor: "",
    primaryColor: "",
    secundaryColor: "",
    negative: "",
  }
  const [contactData, setContactData] = useState(contactStructure);
  const [companyData, setCompanyData] = useState(companyStructure);
  const router = useRouter();
  const { company, contact } = useParams();

  useEffect(() => {
    if (company && contact) {
      // Find the company object that matches the 'company' parameter
      const matchedCompany = companyMock.find((data) => data.companyId === company);
      setCompanyData(matchedCompany);
      if (matchedCompany) {
        // Find the contact information within the matched company
        const matchedContact = matchedCompany.contacts.find(
          (c) => c.id === contact
        );
        if (matchedContact) {
          setContactData(matchedContact);
        } else {
          // router.push("/"); // Redirect to the homepage if no match is found for 'contact'
        }
      } else {
        // router.push("/"); // Redirect to the homepage if no match is found for 'company'
      }
    }
  }, [company, contact, router]);

  if (!contactData) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex items-center justify-center">
      <Contact
        addressMap={companyData.companyAddress}
        altlogo={contactData.altlogo}
        altImg={contactData.altImg}
        company={contactData.company}
        contactImg={contactData.contactImg}
        companySlogan={companyData.companySlogan}
        companyBgColor={companyData.companyBgColor}
        companyTextColor={companyData.companyTextColor}
        email={contactData.email}
        emailC={contactData.emailC}
        imgLogo={companyData.imgLogo}
        icons={contactData.icons}
        jobTittle={contactData.jobTittle}
        lastname={contactData.lastname}
        miniLogo={companyData.miniLogo}
        name={contactData.name}
        negative={companyData.negative}
        phone={contactData.phone}
        title={contactData.title}
        primaryColor={companyData.primaryColor}
        secundaryColor={companyData.secundaryColor}
        urlCompany={company}
        urlContact={contact}
        webpage={contactData.webpage}
      />
    </main>
  );
}
