import react from "./assets/react.png";
import js from "./assets/js.png";
import redux from "./assets/redux.png";
import node from "./assets/node.png";
import vscode from "./assets/vscode.png";
import figma from "./assets/figma.png";

export const languages = {
  english: {
    mainpage: {
      header: {
        theme: "DARK MODE",
        language: { strong: "TÜRKÇE", span: "'YE GEÇ" },
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
          p4: "Invite me to join your team->",
          span3: "hamzasahin@outlook.com",
        },
      },
    },
    skills: {
      header: "Skills",
      content: {
        svgs: [js, react, redux, node, vscode, figma],
        texts: ["JAVASCRIPT", "REACT", "REDUX", "NODE", "VS CODE", "FIGMA"],
      },
    },
    profile: {
      header: "Profile",
      basicInfo: {
        header: "Basic Information",
        body: {
          "Birth Date": "10.06.1995",
          "City of Residence": "Ankara",
          "Educational Status":
            "Orta Doğu Teknik Üniversitesi,  İnşaah Mühendisliği Lisans,2019",
          "Preferred Working Position": "Frontend, UI",
        },
      },
      aboutMe: {
        header: "About Me",
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
          github: "View on Github",
          goTo: "Go to app",
        },
        {
          header: "Are you bored?",
          explanation:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          skills: ["react", "redux", "axios", "router", "vercel"],
          github: "View on Github",
          goTo: "Go to app",
        },
      ],
    },

    footer: {
      body: "Let’s work together on your next product.",
      links: ["Github", "Personal Blog", "Linkedin", "Email"],
    },
  },
  turkish: {
    mainpage: {
      header: {
        theme: "KARANLIK MOD",
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
    skills: {
      header: "Yetenekler",
      content: {
        svgs: ["js", "react", "redux", "node", "vscode", "figma"],
        texts: ["JAVASCRIPT", "REACT", "REDUX", "NODE", "VS CODE", "FIGMA"],
      },
    },
    profile: {
      header: "Profil",
      basicInfo: {
        header: "Temel Bilgiler",
        body: {
          "Doğum Tarihi": "10.06.1995",
          "Yaşadığı Şehir": "Ankara",
          "Eğitim Durumu":
            "Orta Doğu Teknik Üniversitesi, İnşaat Mühendisliği Lisans, 2019",
          "Tercih Edilen Çalışma Pozisyonu": "Ön Uç, UI",
        },
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
          github: "Github'da Görüntüle",
          goTo: "Uygulamaya Git",
        },
        {
          header: "Sıkıldınız mı?",
          explanation:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          skills: ["react", "redux", "axios", "router", "vercel"],
          github: "Github'da Görüntüle",
          goTo: "Uygulamaya Git",
        },
      ],
    },
    footer: {
      body: "Birlikte bir sonraki ürününüz üzerinde çalışalım.",
      links: ["Github", "Kişisel Blog", "Linkedin", "E-posta"],
    },
  },
};
