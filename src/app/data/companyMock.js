import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { COLORS_SOCIAL, ICONS_STYLE } from "../utils/contants";

export const companyMock = [
    {
      id: "rpm",
      companyId: "rpm",
      imgLogo: "/rpm/rpm_deg_white.png",
      miniLogo: "/rpm/x_blanco.svg",
      altlogo: "Logo 1",
      company: "company1",
      companyBgColor: "#000000",
      companyTextColor: "#ffffff",
      primaryColor: "#90FAD6",
      secundaryColor: "#FB2B6D",
      negative: true,
      contacts:[ {
        id: "eiichi",
        email: "e.matsuo99@gmail.com",
        emailC: "info@rpmspeedcode.com",
        jobTittle: "Software Developer Engeenier",
        lastname: "Matsuo",
        name: "Eiichi",
        phone: "5527322661",
        title: "Eiichi Matsuo",
        webpage: "www.rpmspeedcode.com",
        contactImg: "/rpm/eiichi.jpeg",
        altImg: "Eiichi Matsuo",
      },
      {
        id: "ricardo",
        email: "ricardokelebra@gmail.com",
        emailC: "info@rpmspeedcode.com",
        jobTittle: "Software Developer Engeenier",
        lastname: "Basurto",
        name: "Ricardo",
        phone: "5512431147",
        title: "Ricardo Basurto",
        webpage: "www.rpmspeedcode.com",
        contactImg: "/rpm/ricardo_basurto.jpeg",
        altImg: "Ricardo Basurto",
      },
    ],
  },
  {
    id: "rpm2",
    companyId: "rpm2",
    imgLogo: "/rpm/rpm_black.svg",
    miniLogo: "/rpm/x_negro.svg",
    altlogo: "Logo 1",
    company: "company2",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#90FAD6",
    secundaryColor: "#FB2B6D",
    negative: false,
    contacts: [
      {
        id: "ricardo",
        email: "ricardokelebra@gmail.com",
        emailC: "info@rpmspeedcode.com",
        jobTittle: "Software Developer Engeenier",
        lastname: "Basurto",
        name: "Ricardo",
        phone: "55 12431147",
        title: "Ricardo Basurto",
        webpage: "www.rpmspeedcode.com",
        contactImg: "/rpm/ricardo_basurto.jpeg",
        altImg: "Ricardo Basurto",
      },
    ],
  },
  {
    id: "laserinova",
    companyId: "laserinova",
    imgLogo: "/laserInova/logo_laser_inova.png",
    altlogo: "Logo 1",
    company: "company2",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#ff2424",
    secundaryColor: "#ff2424",
    negative: false,
    contacts: [
      {
        id: "raulb",
        emailC: "informes@laserinova.com",
        jobTittle: "",
        lastname: "Basurto",
        name: "Raul",
        phone: "5527322661",
        title: "Raul Basurto",
        webpage: "www.laserinova.com",

        icons: [
          {
            icon: (
              <InstagramIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ig }}
              />
            ),
            link: "https://instagram.com/laserinova23",
            id: "ig",
          },
        ],
      },
    ],
  },
  {
    id: "dccapital",
    companyId: "dccapital",
    imgLogo: "/dccapital/logo_dccpital.jpeg",
    altlogo: "Logo DC Capital",
    company: "DC Capital",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#ff2424",
    secundaryColor: "#0303b5",
    negative: false,
    companyAddress:
      "Av. Americas 140 Piso 14 Fracc. Las America, Boca Del Rio Veracruz, Mexico",
    contacts: [
      {
        id: "jose-luis-duran",
        email: "jlduran@dccapitala.mx",
        jobTittle: "Dir. Sureste",
        lastname: "Duran Angel",
        name: "Jose Luis",
        phone: "2292138397",
        title: "Jose Luis Duran Angel",
        webpage: "www.dccapitala.mx",
        contactImg: "/dccapital/ricardo_basurto.jpeg",
        altImg: "Ricardo Basurto",
        icons: [
          {
            icon: (
              <LinkedInIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ln }}
              />
            ),
            link: "https://www.linkedin.com/in/jose-luis-duran-angel-3456bb66?trk=contact-info",
            id: "ln",
          },
        ],
      },
    ],
  },
];
