export type OurWorks = {
  [key: string]: {
    description: string;
    thumbnail: string;
    banner?: string;
    website_url: string;
    features: {
      title: string;
      description: string;
    }[];
    images: string[];
  };
};
export const OUR_WORKS = {
  "ToMaMe (WASSCE/GES Result Checker)": {
    slug: "tomame",
    title: "ToMaMe (WASSCE/GES Result Checker)",
    description:
      "Efficient way to check your results with or without the use of internet",
    thumbnail: "tomameHompageImg.png",
    banner: "tomameHompageImg.png",
    website_url: "https://tomamevouchers.com",
    features: [
      {
        title: "Instant Access ",
        description:
          "Obtain your results swiftly without delays, as soon as they are released by GES and WAEC ",
      },
      {
        title: "Convenient Sharing ",
        description:
          "Easily share your results with parents, guardians, or mentors to receive guidance and support ",
      },
      {
        title: "Historical Tracking ",
        description:
          "Access previous results to track your academic journey and observe trends over time  ",
      },
      {
        title: "Data Security ",
        description:
          "Your personal and academic information is safeguarded through robust security measures ",
      },
    ],
    cta: {
      buttonText: "Explore",
      desc: "Click on the button below to learn more about the site",
      url: "https://tomamevouchers.com",
    },
    images: [
      "tomamesc1.png",
      "tomamesc2.png",
      "tomamesc3.jpeg",
      "tomamesc5.png",
    ],
  },
  "Nokofio Platforms": {
    slug: "nokofio",
    title: "Nokofio Platforms",
    banner: "nokofio_1.png",
    description:
      "An all-in-one app offering a link for boosting your earnings and financial potential",
    thumbnail: "nokofio_1.png",
    features: [
      {
        title: "Instant Access ",
        description:
          "Nokofio takes data protection seriously. We implement robust data backup and disaster recovery procedures to ensure that your valuable   financial information is safe even in the face of unexpected events like hardware failures or natural disasters",
      },
      {
        title: "Multi-Layered Security ",
        description:
          "Nokofio employs a multi-layered security approach to safeguard your financial data. We use the latest encryption technology to protect sensitive information, ensuring that all transactions are processed securely. With Nokofio, you can be confident that your donors' personal and financial details are safe from prying eyes",
      },
      {
        title: "Real-Time Monitoring ",
        description:
          "Our platform provides real-time monitoring of all donation transactions. This means you can track every contribution as it happens, ensuring transparency and accountability. Any suspicious activity can be quickly identified and addressed, reducing the risk of theft and unauthorized access to your funds",
      },
      {
        title: "Access Control and Permissions",
        description:
          "We understand that not everyone requires access to financial data. Nokofio allows you to set granular access control and permissions, ensuring that only authorized personnel can view and manage financial information. This minimizes the chances of internal theft and data breaches for group contribution",
      },
    ],
    cta: {
      buttonText: "Explore",
      desc: "Unveil the magic by clicking the button  below to discover more about the site!",
      url: "https://nokofio.me",
    },
    website_url: "https://nokofio.me",
    images: [
      "nokofio-3.png",
      "nokofio-4.png",
      "nokofio-5.png",
      "nokofio-7.png",
      "nokofio-6.png",
    ],
  },
};
