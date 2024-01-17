import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

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
      {
        id: "ariel",
        email: "arielgarcia960715@gmail.com",
        emailC: "info@rpmspeedcode.com",
        jobTittle: "Software Developer Engeenier",
        lastname: "Garcia",
        name: "Ariel",
        phone: "5512431147",
        title: "Ariel Garcia",
        webpage: "www.rpmspeedcode.com",
        contactImg: "/rpm/ariel.jpeg",
        altImg: "Ariel Garcia",
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
        phone: "5579398727",
        title: "Raul Basurto",
        // webpage: "www.laserinova.com",
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
    companySlogan:"Te damos utilidades mientras tus ahorros trabajan.",
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
        contactImg: "/dccapital/JoseLuis-dccapital.jpeg",
        altImg: "Jose Luis Duran Angel",
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
  {
    id: "imce",
    companyId: "imce",
    imgLogo: "/imce/IMCE-logo.png",
    miniLogo: "/imce/IMXE-minilogo.png",
    altlogo: "Logo IMCE",
    company: "IMCE",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#FDD205",
    secundaryColor: "#ffa424",
    negative: false,
    companyAddress:
      "Direccion: 5 de febrero #99, Col. El Morro, Boca del Río Veracruz, Mexico",
    contacts: [
      {
        id: "cinthya-garcia",
        email: "cinthya.garciaso@gmail.com",
        emailC:"imce.capacitacionempresarial@gmail.com",
        jobTittle: "Directora",
        lastname: "García Sotelo",
        name: "Cinthya Cecilia",
        phone: "5530200111",
        title: "Cinthya García",
        contactImg: "/imce/cinthya-garcia-imce.jpeg",
        altImg: "Cinthya García",
        icons: [
          {
            icon: (
              <FacebookIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.fb }}
              />
            ),
            link: "https://www.facebook.com/profile.php?id=100092268767375&mibextid=ZbWKwL",
            id: "fb",
          },
        ],
      },
    ],
  },
  {
    id: "rosestreasure",
    companyId: "rosestreasure",
    imgLogo: "/roses/logo.png",
    altlogo: "Logo 1",
    company: "company2",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#ff2424",
    secundaryColor: "#ff2424",
    negative: false,
    contacts: [
      {
        id: "rossyjimenez",
        emailC: "rosestreasure22@gmail.com",
        jobTittle: "",
        lastname: "Jimenez",
        name: "Rossy",
        phone: "7471066409",
        title: "Rossy Jimenez",
        // webpage: "www.laserinova.com",
        icons: [
          {
            icon: (
              <InstagramIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ig }}
              />
            ),
            link: "https://www.instagram.com/roses.treasure/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==",
            id: "ig",
          },
          { icon: (
            <FacebookIcon
              className={ICONS_STYLE}
              style={{ color: COLORS_SOCIAL.fb }}
            />
          ),
          link: "https://www.facebook.com/profile.php?id=100083075393508&mibextid=gik2fB",
          id: "facebook",
        },
        { icon: (
          <Image
          src="/socialMedia/tiktok-logo.svg"
          alt="tiktok"
          width={45}
          height={45}
            className={ICONS_STYLE}
            style={{ color: COLORS_SOCIAL.fb }}
          />
        ),
        link: "https://www.tiktok.com/@rossyjimenez737?_t=8iIKAjG5Abl&_r=1",
        id: "tiktok",
      }
        ],
      },
    ],
  },
  {
    id: "hojacapuchino",
    companyId: "hojacapuchino",
    imgLogo: "/hojaCapuchino/logo.jpeg",
    altlogo: "Logo 1",
    company: "company2",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#7e8744",
    secundaryColor: "#35682d",
    negative: false,
    contacts: [
      {
        id: "adriana",
        // emailC: "rosestreasure22@gmail.com",
        jobTittle: "",
        lastname: "Flores De Nova",
        name: "Adriana",
        phone: "5584274828",
        title: "Adriana Flores De Nova",
        // webpage: "www.laserinova.com",
        icons: [
          {
            icon: (
              <InstagramIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ig }}
              />
            ),
            link: "https://instagram.com/lahojacapuchino?igshid=OGQ5ZDc2ODk2ZA==",
            id: "ig",
          },
          { icon: (
            <FacebookIcon
              className={ICONS_STYLE}
              style={{ color: COLORS_SOCIAL.fb }}
            />
          ),
          link: "https://www.facebook.com/LaHojaCapuchino?mibextid=ZbWKwL",
          id: "facebook",
        },
        ],
      },
    ],
  },
  {
    id: "itzelromero",
    companyId: "itzelromero",
    imgLogo: "/itzelRomero/LogoItzel.png",
    altlogo: "Logo 1",
    company: "company2",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#7e8744",
    secundaryColor: "#35682d",
    negative: false,
    contacts: [
      {
        id: "itzel",
        contactImg: "/itzelRomero/itzel.jpg",
        jobTittle: "",
        lastname: "Romero",
        name: "Itzel",
        phone: "5526532113",
        title: "Itzel Romero",
        icons: [
          {
            icon: (
              <InstagramIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ig }}
              />
            ),
            link: "https://www.instagram.com/holaitzelromero?igsh=OHM2Z2dxbmd3bTJu",
            id: "ig",
          },
          { icon: (
            <FacebookIcon
              className={ICONS_STYLE}
              style={{ color: COLORS_SOCIAL.fb }}
            />
          ),
          link: "https://www.facebook.com/profile.php?id=100093279726098&mibextid=ZbWKwL",
          id: "facebook",
        },
        { icon: (
          <Image
          src="/socialMedia/tiktok-logo.svg"
          alt="tiktok"
          width={45}
          height={45}
            className={ICONS_STYLE}
            style={{ color: COLORS_SOCIAL.fb }}
          />
        ),
        link: "https://www.tiktok.com/@holaitzelromero?_t=8iNkS2ldQH7&_r=1",
        id: "tiktok",
      }
        ],
      },
    ],
  },
];
