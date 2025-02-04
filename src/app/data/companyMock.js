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
        webpage: "www.laserinova.com/",
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
          {
            icon: (
              <FacebookIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.fb }}
              />
            ),
            link: "https://www.facebook.com/profile.php?id=100093617932950",
            id: "fb",
          },
        ],
      },
      {
        id: "ricardob",
        emailC: "informes@laserinova.com",
        jobTittle: "",
        lastname: "Basurto",
        name: "Ricardo",
        phone: "5512431147",
        title: "Raul Basurto",
        webpage: "www.laserinova.com/",
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
          {
            icon: (
              <FacebookIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.fb }}
              />
            ),
            link: "https://www.facebook.com/profile.php?id=100093617932950",
            id: "fb",
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
        link: "https://www.tiktok.com/@roses.treasure?_t=8iNpTUvM4P7&_r=1",
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
  {
    id: "segurosSura",
    companyId: "segurosSura",
    imgLogo: "/sura/sura.jpeg",
    altlogo: "Seguros Sura",
    company: "Seguros Sura S.A. de C.V.",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#0cb7f2",
    secundaryColor: "#0979b0",
    negative: false,
    // companySlogan:"Te damos utilidades mientras tus ahorros trabajan.",
    companyAddress:
      "Av. Insurgentes Sur #2475, Piso 22 y 23",
    contacts: [
      {
        id: "ana-bolena",
        email: "ana.ramirez@segurossura.com.mx",
        jobTittle: "Subdirector de competividad y habitat",
        lastname: "Ramírez Sánchez",
        name: "Ana Bolena",
        phone: "5580609649",
        title: "Ana Bolena Ramírez Sánchez",
        // webpage: "www.dccapitala.mx",
        // contactImg: "/dccapital/JoseLuis-dccapital.jpeg",
        // altImg: "Jose Luis Duran Angel",
        icons: [
          // {
          //   icon: (
          //     <LinkedInIcon
          //       className={ICONS_STYLE}
          //       style={{ color: COLORS_SOCIAL.ln }}
          //     />
          //   ),
          //   link: "https://www.linkedin.com/in/jose-luis-duran-angel-3456bb66?trk=contact-info",
          //   id: "ln",
          // },
        ],
      },
    ],
  },
  {
    id: "suraM",
    companyId: "segurosSuraMe",
    imgLogo: "/sura/sura-m.jpeg",
    altlogo: "Seguros Sura",
    company: "Suramericana S.A.",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#0cb7f2",
    secundaryColor: "#0979b0",
    negative: false,
    // companySlogan:"Te damos utilidades mientras tus ahorros trabajan.",
    // companyAddress:
    //   "Calle 48",
    contacts: [
      {
        id: "elizabeth-cardona",
        email: "ecardona@sura.com",
        jobTittle: "Gerente de Portafolio Sostenible",
        lastname: "Cardona Rendon",
        name: "Elizabeth",
        phone: "5730003238149",
        title: "Elizabeth Cardona Rendon",
        // webpage: "www.dccapitala.mx",
        // contactImg: "/dccapital/JoseLuis-dccapital.jpeg",
        // altImg: "Jose Luis Duran Angel",
        icons: [
          // {
          //   icon: (
          //     <LinkedInIcon
          //       className={ICONS_STYLE}
          //       style={{ color: COLORS_SOCIAL.ln }}
          //     />
          //   ),
          //   link: "https://www.linkedin.com/in/jose-luis-duran-angel-3456bb66?trk=contact-info",
          //   id: "ln",
          // },
        ],
      },
    ],
  },
  {
    id: "tkAsesora",
    companyId: "tkAsesora",
    imgLogo: "/tkAsesora/TK-Asesores.png",
    altlogo: "Tk Asesora",
    company: "TK ASESORES INTEGRADOS",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#0cb7f2",
    secundaryColor: "#0979b0",
    negative: false,
    // companySlogan:"Te damos utilidades mientras tus ahorros trabajan.",
    // companyAddress:
    //   "Av. Insurgentes Sur #2475, Piso 22 y 23",
    contacts: [
      {
        id: "mayra-cruz",
        email: "arbol_cruz@yahoo.com.mx",
        emailC: "tkasesores@outlook.com",
        jobTittle: "Directora General",
        lastname: "Cruz",
        name: "Mayra",
        phone: "5530509005",
        title: "Mayra Cruz",
        webpage: "www.tkasesoresintegrados.com.mx/",
        contactImg: "/tkAsesora/mayra-cruz-short.jpeg",
        altImg: "Mayra Cruz",
        icons: [
          // {
          //   icon: (
          //     <LinkedInIcon
          //       className={ICONS_STYLE}
          //       style={{ color: COLORS_SOCIAL.ln }}
          //     />
          //   ),
          //   link: "https://www.linkedin.com/in/jose-luis-duran-angel-3456bb66?trk=contact-info",
          //   id: "ln",
          // },
        ],
      },
    ],
  },
  {
    id: "growthTigger",
    companyId: "growthTigger",
    imgLogo: "/growthTigger/LOGO_GT.png",
    altlogo: "Growth Tigger",
    company: "GROWTH TRIGGER",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#0cb7f2",
    secundaryColor: "#0979b0",
    negative: false,
    // companySlogan:"Te damos utilidades mientras tus ahorros trabajan.",
    // companyAddress:
    //   "Av. Insurgentes Sur #2475, Piso 22 y 23",
    contacts: [
      {
        id: "kevin_armando",
        email: "kevinarmando@growthtrigger.com.mx",
        // emailC: "tkasesores@outlook.com",
        jobTittle: "Representante",
        lastname: "Flores",
        name: "Kevin Armando",
        phone: "5561157141",
        title: "Kevin Armando Flores",
        webpage: "www.growthtrigger.com.mx/",
        contactImg: "/growthTigger/kevin-short.jpeg",
        altImg: "Kevin Armando Flores",
        icons: [
          // {
          //   icon: (
          //     <LinkedInIcon
          //       className={ICONS_STYLE}
          //       style={{ color: COLORS_SOCIAL.ln }}
          //     />
          //   ),
          //   link: "https://www.linkedin.com/in/jose-luis-duran-angel-3456bb66?trk=contact-info",
          //   id: "ln",
          // },
        ],
      },
    ],
  },
  {
    id: "grupoSlp",
    companyId: "grupoSlp",
    imgLogo: "/grupoSlp/grupo_slp_logo.jpg",
    altlogo: "Grupo SLP",
    company: "Grupo SLP",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#0cb7f2",
    secundaryColor: "#0979b0",
    negative: false,
    // companySlogan:"Te damos utilidades mientras tus ahorros trabajan.",
    // companyAddress:
    //   "Av. Insurgentes Sur #2475, Piso 22 y 23",
    contacts: [
      {
        id: "marcela-rangel",
        email: "mrangel@gruposlp.com",
        jobTittle: "Gerencia RRHH",
        lastname: "Rangel",
        name: "Mariana",
        phone: "5579204291",
        title: "Mariana Rangel",
        // webpage: "www.dccapitala.mx",
        // contactImg: "/dccapital/JoseLuis-dccapital.jpeg",
        // altImg: "Jose Luis Duran Angel",
        icons: [
          // {
          //   icon: (
          //     <LinkedInIcon
          //       className={ICONS_STYLE}
          //       style={{ color: COLORS_SOCIAL.ln }}
          //     />
          //   ),
          //   link: "https://www.linkedin.com/in/jose-luis-duran-angel-3456bb66?trk=contact-info",
          //   id: "ln",
          // },
        ],
      },
    ],
  },
  {
    id: "codigoAbierto",
    companyId: "codigoAbierto",
    imgLogo: "/codigoAbierto/logo-black.webp",
    altlogo: "Codigó Abierto",
    company: "Codigó Abierto",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#0cb7f2",
    secundaryColor: "#0979b0",
    negative: false,
    // companySlogan:"Te damos utilidades mientras tus ahorros trabajan.",
    // companyAddress:
    //   "Av. Insurgentes Sur #2475, Piso 22 y 23",
    contacts: [
      {
        id: "angel-luna",
        // email: "mrangel@gruposlp.com",
        jobTittle: "Director Académico",
        lastname: "Angel",
        name: "Luna",
        emailC: "contacto@codigoabierto.tech",
        phone: "2212149603",
        title: "Angel Luna",
        webpage: "www.fundacioncodigoabierto.com",
        contactImg: "/codigoAbierto/angelo.jpeg",
        altImg: "Angel Luna",
        icons: [
          {
            icon: (
              <InstagramIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ig }}
              />
            ),
            link: "https://www.instagram.com/codigoabierto.tech/",
            id: "ig",
          },
          {
            icon: (
              <LinkedInIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ln }}
              />
            ),
            link: "https://www.linkedin.com/in/angelolunamx/",
            id: "ln",
          },
        ],
      },
      {
        id: "anuar",
        // email: "mrangel@gruposlp.com",
        jobTittle: "Director",
        lastname: "Auar",
        name: "Harb",
        emailC: "contacto@codigoabierto.tech",
        phone: "2212149603",
        title: "Anuar Harb",
        webpage: "www.fundacioncodigoabierto.com",
        contactImg: "/codigoAbierto/anuar.jpeg",
        altImg: "Anuar Harb",
        icons: [
          {
            icon: (
              <InstagramIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ig }}
              />
            ),
            link: "https://www.instagram.com/codigoabierto.tech/",
            id: "ig",
          },
          {
            icon: (
              <LinkedInIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ln }}
              />
            ),
            link: "https://www.linkedin.com/in/anuarharb/",
            id: "ln",
          },
        ],
      },
      {
        id: "grace",
        // email: "mrangel@gruposlp.com",
        jobTittle: "Directora Operativa",
        lastname: "Grace",
        name: "Torres",
        emailC: "contacto@codigoabierto.tech",
        phone: "2212149603",
        title: "Grace Torres",
        webpage: "www.fundacioncodigoabierto.com",
        contactImg: "/codigoAbierto/grace.jpeg",
        altImg: "Grace Torres",
        icons: [
          {
            icon: (
              <InstagramIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ig }}
              />
            ),
            link: "https://www.instagram.com/codigoabierto.tech/",
            id: "ig",
          },
          {
            icon: (
              <LinkedInIcon
                className={ICONS_STYLE}
                style={{ color: COLORS_SOCIAL.ln }}
              />
            ),
            link: "https://www.linkedin.com/in/grace-torres-8616b0266/",
            id: "ln",
          },
        ],
      },
    ],
  },
  {
    id: "sunnyparty",
    companyId: "sunnyparty",
    imgLogo: "/sunnyParty/logo.png",
    // miniLogo: "/rpm/x_blanco.svg",
    altlogo: "Sunny Paty ",
    company: "company1",
    companyBgColor: "#ffffff",
    companyTextColor: "#000000",
    primaryColor: "#1A73E8",
    secundaryColor: "#D4AF37",
    negative: false,
    contacts:[ 
    {
      id: "sonia",
      email: "sunnyfunandparty@gmail.com",
      // emailC: "info@rpmspeedcode.com",
      jobTittle: "Cordinadora de Eventos",
      lastname: "Villegas",
      name: "Sonia",
      phone: "5515330068",
      title: "Sonia Villegas",
      // webpage: "www.rpmspeedcode.com",
      // contactImg: "/rpm/ricardo_basurto.jpeg",
      altImg: "Sonia Villegas",
      icons: [
        {
          icon: (
            <InstagramIcon
              className={ICONS_STYLE}
              style={{ color: COLORS_SOCIAL.ig }}
            />
          ),
          link: "https://www.instagram.com/sonnyfunandparty?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          id: "ig",
        },
        {
          icon: (
            <Image
            src="/socialMedia/tiktok-logo.svg"
            alt="tiktok"
            width={45}
            height={45}
              className={ICONS_STYLE}
              style={{ color: COLORS_SOCIAL.fb }}
            />
          ),
          link: "https://www.tiktok.com/@sonny.funandparty?_t=ZM-8tEOkD0xuPF&_r=1",
          id: "tiktok",
        },
        {
          icon: (
            <FacebookIcon
            className={ICONS_STYLE}
            style={{ color: COLORS_SOCIAL.fb }}
            />
          ),
          link: "https://www.facebook.com/share/1BYRbXUZXG/",
          id: "ig",
        }
      ],
    },
  ],
},
];
