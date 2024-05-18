import { navbar, card } from "/static/components/index.js";

import {
  Headbody,
  ScreenSizes,
  GlobalStyles,
} from "../utils/index.js";

Headbody.addHeadContent({ route: "about", textStyles: true });
// It already uses the default global styles defined in the class, if no styles is provided
const globalStyles = new GlobalStyles();

// Navbar functionality
navbar("#navbar");

// Import cards styles to head.
card()

const cardBody = [
  {
    "title": "Our Mission",
    "body": {
      "type": "p",
      "content": "At Automa Automations, our mission is to revolutionize the way individuals and businesses manage their social media presence. We believe in harnessing the power of AI to simplify social media content creation and scheduling, empowering our users to focus on what truly matters: engaging with their audience."
    }
  },
  {
    "title": "How it Works",
    "body": {
      "type": "p",
      "content": "Automa Automations utilizes cutting-edge AI technology and LLMs to help generate more high quality content for your social media, whether that be videos, images, or short Twitter style posts. With Automa, you can easily schedule posts across multiple platforms, ensuring consistent and timely updates without the hassle of manual intervention."
    },
  },
  {
    "title": "Key Features",
    "body": {
      "type": "ul",
      "body": [
        {
          "type": "li",
          "content": "AI-Driven Content Creation: Our AI algorithms analyze your brand's tone, style, and audience preferences to generate engaging content ideas tailored to your brand."
        },
        {
          "type": "li",
          "content": "Automated Scheduling: Schedule posts across various social media platforms with ease. Automa's intelligent scheduling ensures optimal timing for maximum audience reach."
        },
        {
          "type": "li",
          "content": "Analytics Dashboard: Track the performance of your social media campaigns with detailed analytics. Gain insights into engagement metrics, audience demographics, and content effectiveness."
        },
        {
          "type": "li",
          "content": "Cross-Platform Integration: Connect your favorite social media platforms, including Instagram, Facebook, Twitter, and LinkedIn, to manage all your accounts from a single dashboard."
        },
      ]
    },
  }
]

const cardBodyHTML = (cardBody) => {
  const sizes = new ScreenSizes()
  const isMobile = sizes.isMobile()
  const isMediumWidth = sizes.isMediumWidth()
  const isTabletWidth = sizes.isTabletWidth()
  const isDesktopWidth = sizes.isDesktop()

  const titleClass = "headlinemd";

  return cardBody.map((card, index) => {
    switch (card["body"]["type"]) {
      case "p" || "li":
        return `<p>`
    }
  })
}
