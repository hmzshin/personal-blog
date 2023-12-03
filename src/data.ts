import project1 from "./assets/projects/project1.png";
import project2 from "./assets/projects/project2.png";
import arrowRight from "./assets/projects/arrow-right.svg";
import react from "./assets/skills/react.png";
import js from "./assets/skills/js.png";
import redux from "./assets/skills/redux.png";
import node from "./assets/skills/node.png";
import vscode from "./assets/skills/vscode.png";
import figma from "./assets/skills/figma.png";

export const languages = {
  skills: [
    { svg: react, text: "REACT" },
    { svg: redux, text: "REDUX" },
    { svg: js, text: "JS" },
    { svg: node, text: "NODE" },
    { svg: vscode, text: "VS CODE" },
    { svg: figma, text: "FIGMA" },
  ],
  english: {
    code: "en",
    mainpage: {
      header: {
        themeDark: "DARK MODE",
        themeLight: "LIGHT MODE",
        language: { strong: "TÜRKÇE" },
      },
      content: {
        p1: "Hi! 👋",
        p2: "I’m Hamza. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
        p3: {
          p1: "Currently",
          span1: "Freelancing",
          p2: "for",
          span2: "UX, UI, & Web Design",
          p3: "Project.",
          p4: "Invite me to join your team ->",
          span3: "hamzasahin@outlook.com",
        },
      },
    },
    skills: "Skills",
    profile: {
      header: "Profile",
      basicInfo: {
        header: "Basic Information",
        body: [
          ["Birth Date", "10.06.1995"],
          ["City of Residence", "Ankara"],
          [
            "Educational Status",
            "Orta Doğu Teknik Üniversitesi,  İnşaah Mühendisliği Lisans,2019",
          ],
          ["Preferred Working Position", "Frontend, UI"],
        ],
      },
      aboutMe: {
        header: "About me",
        body: {
          p1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          p2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam! ",
        },
      },
    },

    projects: {
      header: "Projects",
      body: [
        {
          header: "Random Jokes",
          explanation:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          skills: ["react", "vercel", "axios", "router "],
          bgColor: "bg-blue-100",
          bgColorDark: "bg-[#2D3235]",
          gitHubText: "View on Github",
          gitHubLink: "#",
          appText: "Go to app",
          appLink: "#",
          img: project1,
          arrowRight: arrowRight,
        },

        {
          header: "Are you bored?",
          explanation:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          skills: ["react", "redux", "axios", "router", "vercel"],
          bgColor: "bg-[#D9F6F1]",
          bgColorDark: "bg-[#495351]",
          gitHubLink: "#",
          appLink: "#",
          img: project2,
        },
      ],
    },

    footer: {
      body: "Let’s work together on your next product.",
      links: [
        {
          page: "Github",
          url: "https://github.com/hmzshin",
          color: "text-blue-600",
        },
        {
          page: "Personal Blog",
          url: "https://hmzshin.github.io/personal-blog",
          color: "text-gray-950",
        },
        {
          page: "Linkedin",
          url: "https://www.linkedin.com/in/hamza-%C5%9Fahin-4a351b142/",
          color: "text-sky-600",
        },
        { page: "Email", url: "", color: "text-rose-700" },
      ],
    },
  },
  turkish: {
    code: "tr",
    mainpage: {
      header: {
        themeDark: "KOYU MOD",
        themeLight: "AÇIK MOD",
        language: { strong: "ENGLISH" },
      },
      content: {
        p1: "Merhaba! 👋",
        p2: "Ben Hamza. Tam yığın geliştiriciyim. Sağlam ve ölçeklenebilir ön uç ürünleri oluşturabilirim. Tanışalım!",
        p3: {
          p1: "Şu anda ",
          span1: "Freelancing",
          p2: " olarak",
          span2: "UX, UI, & Web Tasarım",
          p3: "Projesi'nde bulunuyorum.",
          p4: "Beni takımınıza davet edin -> ",
          span3: "hamzasahin@outlook.com",
        },
      },
    },
    skills: "Beceriler",
    profile: {
      header: "Profil",
      basicInfo: {
        header: "Temel Bilgiler",
        body: [
          ["Doğum Tarihi", "10.06.1995"],
          ["Yaşadığı Şehir", "Ankara"],
          [
            "Eğitim Durumu",
            "Orta Doğu Teknik Üniversitesi, İnşaat Mühendisliği Lisans, 2019",
          ],
          ["Tercih Edilen Çalışma Pozisyonu", "Ön Uç, UI"],
        ],
      },
      aboutMe: {
        header: "Hakkımda",
        body: {
          p1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          p2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        },
      },
    },
    projects: {
      header: "Projeler",
      body: [
        {
          header: "Rastgele Şakalar",
          explanation:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          skills: ["react", "vercel", "axios", "router "],
          bgColor: "bg-blue-100",
          bgColorDark: "bg-[#2D3235]",
          gitHubText: "Github'da göster",
          gitHubLink: "#",
          appText: "Uygulamaya git",
          appLink: "#",
          img: project1,
          arrowRight: arrowRight,
        },
        {
          header: "Sıkıldınız mı?",
          explanation:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          skills: ["react", "redux", "axios", "router", "vercel"],
          bgColor: "bg-green-100",
          bgColorDark: "bg-[#495351]",
          gitHubText: "Github'da göster",
          gitHubLink: "#",
          appText: "Uygulamaya git",
          appLink: "#",
          img: project2,
          arrowRight: arrowRight,
        },
      ],
    },
    footer: {
      body: "Birlikte bir sonraki ürününüz üzerinde çalışalım.",
      links: [
        {
          page: "Github",
          url: "https://github.com/hmzshin",
          color: "text-blue-600",
        },
        {
          page: "Personal Blog",
          url: "https://hmzshin.github.io/personal-blog",
          color: "text-gray-950",
        },
        {
          page: "Linkedin",
          url: "https://www.linkedin.com/in/hamza-%C5%9Fahin-4a351b142/",
          color: "text-sky-600",
        },
        { page: "Email", url: "", color: "text-rose-700" },
      ],
    },
  },
  spanish: {
    code: "es",
    mainpage: {
      header: {
        themeDark: "MODO OSCURO",
        themeLight: "MODO CLARO",
        language: { strong: "TÜRKÇE" },
      },
      content: {
        p1: "¡Hola! 👋",
        p2: "Soy Hamza. Soy un desarrollador full-stack. Puedo crear productos frontend sólidos y escalables. ¡Vamos a conocernos!",
        p3: {
          p1: "Actualmente",
          span1: "trabajando como freelance",
          p2: "en proyectos de",
          span2: "UX, UI y diseño web",
          p3: "Invítame a unirme a tu equipo ->",
          span3: "hamzasahin@outlook.com",
        },
      },
    },
    skills: "Habilidades",
    profile: {
      header: "Perfil",
      basicInfo: {
        header: "Información Básica",
        body: [
          ["Fecha de nacimiento", "10.06.1995"],
          ["Ciudad de residencia", "Ankara"],
          [
            "Estado educativo",
            "Orta Doğu Teknik Üniversitesi, Licenciatura en Ingeniería Civil, 2019",
          ],
          ["Posición de trabajo preferida", "Frontend, UI"],
        ],
      },
      aboutMe: {
        header: "Sobre mí",
        body: {
          p1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          p2: "Mínima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        },
      },
    },
    projects: {
      header: "Proyectos",
      body: [
        {
          header: "Chistes aleatorios",
          explanation:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          skills: ["react", "vercel", "axios", "router"],
          bgColor: "bg-blue-100",
          bgColorDark: "bg-[#2D3235]",
          gitHubText: "Ver en Github",
          gitHubLink: "#",
          appText: "Ir a la aplicación",
          appLink: "#",
          img: project1,
          arrowRight: arrowRight,
        },
        {
          header: "¿Estás aburrido?",
          explanation:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          skills: ["react", "redux", "axios", "router", "vercel"],
          bgColor: "bg-[#D9F6F1]",
          bgColorDark: "bg-[#495351]",
          gitHubText: "Ver en Github",
          gitHubLink: "#",
          appText: "Ir a la aplicación",
          appLink: "#",
          img: project2,
          arrowRight: arrowRight,
        },
      ],
    },
    footer: {
      body: "Trabajemos juntos en tu próximo producto.",
      links: [
        {
          page: "Github",
          url: "https://github.com/hmzshin",
          color: "text-blue-600",
        },
        {
          page: "Blog personal",
          url: "https://hmzshin.github.io/personal-blog",
          color: "text-gray-950",
        },
        {
          page: "Linkedin",
          url: "https://www.linkedin.com/in/hamza-%C5%9Fahin-4a351b142/",
          color: "text-sky-600",
        },
        { page: "Correo electrónico", url: "", color: "text-rose-700" },
      ],
    },
  },
};
