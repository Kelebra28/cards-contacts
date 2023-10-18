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
  const { company } = useParams();
  const { contact } = useParams();

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
        altlogo={contactData.altlogo}
        altImg={contactData.altImg}
        imgLogo={companyData.imgLogo}
        miniLogo={companyData.miniLogo}
        contactImg={contactData.contactImg}
        company={contactData.company}
        email={contactData.email}
        emailC={contactData.emailC}
        jobTittle={contactData.jobTittle}
        lastname={contactData.lastname}
        name={contactData.name}
        phone={contactData.phone}
        title={contactData.title}
        webpage={contactData.webpage}
        icons={contactData.icons}
        companyBgColor={companyData.companyBgColor}
        companyTextColor={companyData.companyTextColor}
        primaryColor={companyData.primaryColor}
        secundaryColor={companyData.secundaryColor}
        negative={companyData.negative}
      />
    </main>
  );
}
