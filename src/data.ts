import arrowRight from "./assets/projects/arrow-right.svg";
import react from "./assets/skills/react-logo.svg";
import js from "./assets/skills/js-logo 1.svg";
import redux from "./assets/skills/redux.png";
import node from "./assets/skills/node-logo 1.svg";
import vscode from "./assets/skills/vscode-logo.svg";
import figma from "./assets/skills/figma-logo 1.svg";
import ts from "./assets/skills/Typescript.svg";
import pizzaCover from "./assets/projects/pizza-cover.png";
import blogCover from "./assets/projects/personalBlog-cover.png";
import ecommerceCover from "./assets/projects/ecommerce-cover.png";

export const languages = {
  skills: [
    { svg: react, text: "REACT" },
    { svg: redux, text: "REDUX" },
    { svg: js, text: "JS" },
    { svg: node, text: "NODE" },
    { svg: vscode, text: "VS CODE" },
    { svg: figma, text: "FIGMA" },
    { svg: ts, text: "TS" },
  ],
  english: {
    code: "en",
    changeLanguage: "Language succesfully changed",
    mainpage: {
      header: {
        themeDark: "DARK MODE",
        themeLight: "LIGHT MODE",
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
          p4: "Invite me to join your team =>",
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
          ["Birthday", "10.06.1995"],
          ["City of Residence", "Sivas"],
          [
            "Educational Status",
            "Middle East Technical University, Civil Engineering Degree, 2019",
          ],
          ["Preferred Working Position", "Frontend, UI"],
        ],
      },
      aboutMe: {
        header: "About me",
        body: {
          p1: "After my experience in the construction industry, I attended the 6-month Full-Stack Web Development course at Workitech in order to direct my career in the field of software development, which I have been interested in for a long time. During this time, I took an active role in more than 50 projects and increased my practical knowledge and experience in software development.",

          p2: "My goal is to work in positions where I can continuously improve myself and adapt to innovations in the software development industry. I am looking for an environment where I can contribute by using my knowledge and competencies at the highest level",
        },
      },
    },

    projects: {
      header: "Projects",
      body: [
        {
          header: "Order Pizza",
          explanation:
            "In this project, I've developed the UI for a pizza website. The homepage features a button that directs you to place a pizza order. Upon clicking, it takes you to a page with a pizza order form where you can choose the size, thickness, and extra ingredients. As you make selections, the form instantly updates to show the price changes.",
          skills: ["react", "yup", "react-router", "javascript", "axios"],
          bgColor: "bg-blue-100",
          bgColorDark: "bg-[#2D3235]",
          gitHubText: "View on Github",
          gitHubLink: "https://github.com/hmzshin/fsweb-s7-challenge-pizza",
          appText: "",
          appLink: "#",
          img: pizzaCover,
          arrowRight: "",
        },

        {
          header: "Personal Blog",
          explanation:
            "This is a personal website project where I showcase my work.",
          skills: [
            "react",
            "react-context",
            "github",
            "axios",
            "typescript",
            "tailwind-css",
            "vs-code",
            "figma",
          ],
          bgColor: "bg-green-100",
          bgColorDark: "bg-[#495351]",
          gitHubText: "View on Github",
          gitHubLink: "https://github.com/hmzshin/personal-blog",
          appText: "Go to app",
          appLink: "https://hmzshin.github.io/personal-blog/",
          img: blogCover,
          arrowRight: arrowRight,
        },
        {
          header: "Ecommerce Clone",
          explanation:
            "This project is an E-commerce website clone that allows users to view products, search among them, add items to their cart, adjust quantities, save shipping addresses and credit cards, and proceed with payments. To test the website, you can use the following login details: customer@commerce.com with the password: 123456.",
          skills: [
            "react",
            "redux-toolkit",
            "axios",
            "router",
            "vercel",
            "typeScript",
            "tailwind-css",
            "toastify",
            "swiper",
            "slugify",
            "figma",
            "react-hook form",
          ],
          bgColor: "bg-[#D9F6F1]",
          bgColorDark: "bg-[#152A38]",
          gitHubText: "View on Github",
          gitHubLink: "https://github.com/hmzshin/ecommerce",
          appText: "Go to app",
          appLink: "https://ecommerce-sigma-ochre.vercel.app/",
          img: ecommerceCover,
          arrowRight: arrowRight,
        },
      ],
    },

    footer: {
      body: "Let’s work together on your next product.",
      links: [
        {
          page: "Github",
          url: "https://github.com/hmzshin",
          color: "text-blue-600 hover:text-blue-500",
        },
        {
          page: "Personal Blog",
          url: "https://hmzshin.github.io/personal-blog",
          color: "text-darkCyan hover:text-[#194146]",
        },
        {
          page: "Linkedin",
          url: "https://www.linkedin.com/in/hamza-%C5%9Fahin-4a351b142/",
          color: "text-sky-600 hover:text-sky-500",
        },
        {
          page: "Email",
          url: "mailto:hamzasahin@outlook.com",
          color: "text-rose-600 hover:text-rose-500",
        },
      ],
    },
  },
  turkish: {
    code: "tr",
    changeLanguage: "Dil başarıyla değiştirildi.",
    mainpage: {
      header: {
        themeDark: "KOYU MOD",
        themeLight: "AÇIK MOD",
      },
      content: {
        p1: "Merhaba! 👋",
        p2: "Ben Hamza. Web geliştirme uzmanıyım. Sağlam ve ölçeklenebilir önyüz ürünleri oluşturabilirim. Tanışalım!",
        p3: {
          p1: "Şu anda ",
          span1: "Freelancing",
          p2: " olarak",
          span2: "UX, UI, & Web Tasarım",
          p3: "Projesi'nde çalışıyorum.",
          p4: "Beni takımınıza davet edin =>",
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
          ["Yaşadığı Şehir", "Sivas"],
          [
            "Eğitim Durumu",
            "Orta Doğu Teknik Üniversitesi, İnşaat Mühendisliği Lisans, 2019",
          ],
          ["Tercih Edilen Çalışma Pozisyonu", "Önyüz,Kullanıcı Arayüzü "],
        ],
      },
      aboutMe: {
        header: "Hakkımda",
        body: {
          p1: "İnşaat sektöründeki deneyimimin ardından uzun zamandır ilgi duyduğum yazılım geliştirme alanında kariyerime yön vermek amacıyla Workitech'te 6 aylık Full-Stack Web Development kursuna katıldım. Bu süre zarfında 50'den fazla projede aktif rol alarak yazılım geliştirme konusunda pratik bilgi ve tecrübemi arttırdım.",
          p2: "Hedefim kendimi sürekli geliştirebileceğim ve yazılım geliştirme sektöründeki yeniliklere adapte olabileceğim pozisyonlarda çalışmak. Bilgi birikimimi ve yetkinliklerimi en üst seviyede kullanarak katkı sağlayabileceğim bir ortam arıyorum",
        },
      },
    },
    projects: {
      header: "Projeler",
      body: [
        {
          header: "Pizza Siparişi",
          explanation:
            "Bu proje kapsamında bir pizza web sitesi için kullanıcı arayüzü geliştirdim. Ana sayfada, sizi bir pizza siparişi verme düğmesine yönlendiren bir düğme bulunuyor. Bu düğmeye tıkladığınızda, sizi pizza sipariş formunun bulunduğu bir sayfaya yönlendiriyor; burada boyut, kalınlık ve ekstra malzemeleri seçebiliyorsunuz. Seçimlerinizi yaparken, form anında fiyat değişikliklerini gösteriyor.",
          skills: ["react", "yup", "react-router", "javascript", "axios"],
          bgColor: "bg-blue-100",
          bgColorDark: "bg-[#2D3235]",
          gitHubText: "Github'da göster",
          gitHubLink: "https://github.com/hmzshin/fsweb-s7-challenge-pizza",
          appText: "",
          appLink: "#",
          img: pizzaCover,
          arrowRight: "",
        },
        {
          header: "Kişisel Blog",
          explanation:
            "Bu, çalışmalarımı sergilediğim kişisel bir web sitesi projesidir.",
          skills: [
            "react",
            "react-context",
            "github",
            "axios",
            "typescript",
            "tailwind-css",
            "vs-code",
            "figma",
          ],
          bgColor: "bg-green-100",
          bgColorDark: "bg-[#495351]",
          gitHubText: "Github'da göster",
          gitHubLink: "https://github.com/hmzshin/personal-blog",
          appText: "Uygulamaya git",
          appLink: "https://hmzshin.github.io/personal-blog/",
          img: blogCover,
          arrowRight: arrowRight,
        },
        {
          header: "E-Ticaret Klonu",
          explanation:
            "Bu proje, kullanıcıların ürünleri görüntüleyebildiği, arama yapabildiği, ürünleri sepetlerine ekleyebildiği, miktarları ayarlayabildiği, kargo adreslerini ve kredi kartlarını kaydedebildiği ve ödemeleri tamamlayabildiği bir e-ticaret web sitesi klonudur.Web sitesini denemek için aşağıdaki giriş bilgilerini kullanabilirsiniz: customer@commerce.com ve şifre: 123456.",
          skills: [
            "react",
            "redux-toolkit",
            "axios",
            "router",
            "vercel",
            "typeScript",
            "tailwind-css",
            "toastify",
            "swiper",
            "slugify",
            "figma",
            "react-hook form",
          ],
          bgColor: "bg-[#D9F6F1]",
          bgColorDark: "bg-[#152A38]",
          gitHubText: "Github'da göster",
          gitHubLink: "https://github.com/hmzshin/ecommerce",
          appText: "Uygulamaya git",
          appLink: "https://ecommerce-sigma-ochre.vercel.app/",
          img: ecommerceCover,
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
          color: "text-blue-600 hover:text-blue-500",
        },
        {
          page: "Personal Blog",
          url: "https://hmzshin.github.io/personal-blog",
          color: "text-darkCyan hover:text-[#194146]",
        },
        {
          page: "Linkedin",
          url: "https://www.linkedin.com/in/hamza-%C5%9Fahin-4a351b142/",
          color: "text-sky-600 hover:text-sky-500",
        },
        {
          page: "Email",
          url: "mailto:hamzasahin@outlook.com",
          color: "text-rose-600 hover:text-rose-500",
        },
      ],
    },
  },
  spanish: {
    code: "es",
    changeLanguage: "Lengua modificada con éxito",
    mainpage: {
      header: {
        themeDark: "MODO OSCURO",
        themeLight: "MODO CLARO",
      },
      content: {
        p1: "¡Hola! 👋",
        p2: "Soy Hamza. Soy un desarrollador full-stack. Puedo crear productos frontend sólidos y escalables. ¡Vamos a conocernos!",
        p3: {
          p1: "Actualmente trabajando como",
          span1: " Freelance",
          p2: "para",
          span2: "UX, UI y Diseño Web",
          p3: "",
          p4: "Invítame a unirme a tu equipo =>",
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
          ["Ciudad de residencia", "Sivas"],
          [
            "Estado educativo",
            "Middle East Technical University, Licenciatura en Ingeniería Civil, 2019",
          ],
          ["Posición de trabajo preferida", "Frontend, UI"],
        ],
      },
      aboutMe: {
        header: "Sobre mí",
        body: {
          p1: "Tras mi experiencia en el sector de la construcción, asistí al curso de 6 meses de Desarrollo Web Full-Stack en Workitech para orientar mi carrera en el campo del desarrollo de software, que me interesa desde hace mucho tiempo. Durante este tiempo, participé activamente en más de 50 proyectos y aumenté mis conocimientos prácticos y mi experiencia en el desarrollo de software. ",
          p2: "Mi objetivo es trabajar en puestos en los que pueda mejorar continuamente y adaptarme a las innovaciones del sector del desarrollo de software. Busco un entorno en el que pueda contribuir utilizando mis conocimientos y competencias al más alto nivel.",
        },
      },
    },
    projects: {
      header: "Proyectos",
      body: [
        {
          header: "Pedido de Pizza",
          explanation:
            "En este proyecto, he desarrollado la interfaz de usuario para un sitio web de pizzas. La página de inicio cuenta con un botón que te lleva a realizar un pedido de pizza. Al hacer clic, te lleva a una página con un formulario de pedido de pizza donde puedes elegir el tamaño, el grosor y los ingredientes extra. A medida que haces selecciones, el formulario se actualiza al instante para mostrar los cambios de precio. ",
          skills: ["react", "yup", "react-router", "javascript", "axios"],
          bgColor: "bg-blue-100",
          bgColorDark: "bg-[#2D3235]",
          gitHubText: "Ver en Github",
          gitHubLink: "https://github.com/hmzshin/fsweb-s7-challenge-pizza",
          appText: "",
          appLink: "#",
          img: pizzaCover,
          arrowRight: "",
        },
        {
          header: "Blog Personal",
          explanation:
            "Este es un proyecto de sitio web personal donde muestro mi trabajo.",
          skills: [
            "react",
            "react-context",
            "github",
            "axios",
            "typescript",
            "tailwind-css",
            "vs-code",
            "figma",
          ],
          bgColor: "bg-green-100",
          bgColorDark: "bg-[#495351]",
          gitHubText: "Ver en Github",
          gitHubLink: "https://github.com/hmzshin/personal-blog",
          appText: "Ir a la aplicación",
          appLink: "https://hmzshin.github.io/personal-blog/",
          img: blogCover,
          arrowRight: arrowRight,
        },
        {
          header: "Clon de Comercio Electrónico",
          explanation:
            "Este proyecto es un clon de un sitio web de comercio electrónico que permite a los usuarios ver productos, buscar entre ellos, agregar artículos a su carrito, ajustar cantidades, guardar direcciones de envío y tarjetas de crédito, y proceder con los pagos.Para probar el sitio web, puedes usar los siguientes detalles de inicio de sesión: customer@commerce.com con la contraseña: 123456.",
          skills: [
            "react",
            "redux-toolkit",
            "axios",
            "router",
            "vercel",
            "typeScript",
            "tailwind-css",
            "toastify",
            "swiper",
            "slugify",
            "figma",
            "react-hook form",
          ],
          bgColor: "bg-[#D9F6F1]",
          bgColorDark: "bg-[#152A38]",
          gitHubText: "Ver en Github",
          gitHubLink: "https://github.com/hmzshin/ecommerce",
          appText: "Ir a la aplicación",
          appLink: "https://ecommerce-sigma-ochre.vercel.app/",
          img: ecommerceCover,
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
          color: "text-blue-600 hover:text-blue-500",
        },
        {
          page: "Blog personal",
          url: "https://hmzshin.github.io/personal-blog",
          color: "text-darkCyan hover:text-[#194146]",
        },
        {
          page: "Linkedin",
          url: "https://www.linkedin.com/in/hamza-%C5%9Fahin-4a351b142/",
          color: "text-sky-600 hover:text-sky-500",
        },
        {
          page: "Correo electrónico",
          url: "mailto:hamzasahin@outlook.com",
          color: "text-rose-600 hover:text-rose-500",
        },
      ],
    },
  },
};
