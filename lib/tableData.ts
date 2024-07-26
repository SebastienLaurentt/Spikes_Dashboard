// data.ts

export type StatusType = "Pending" | "Cancelled" | "Ongoing" | "Waiting" | "Completed";

export interface TableRow {
  date: string;
  object: string;
  company: {
    name: string;
    image: string;
  };
  status: StatusType;
  amount: string;
}

export const tableData: TableRow[] = [
  {
    date: "Jan. 24",
    object: "Product Design : Payme...",
    company: { name: "Stripe Inc.", image: "/images/Stripe.png" },
    status: "Pending",
    amount: "7.800 $USD",
  },
  {
    date: "Jan. 24",
    object: "App Redesign : Onboar...",
    company: { name: "Github Corp.", image: "/images/GitHub.png" },
    status: "Cancelled",
    amount: "12.800 $USD",
  },
  {
    date: "Dec. 23",
    object: "Pitch Deck B2B",
    company: { name: "Amazon", image: "/images/Amazon.png" },
    status: "Ongoing",
    amount: "14.000 $USD",
  },
  {
    date: "Oct. 23",
    object: "Mobile App, UX Audit",
    company: { name: "Steam", image: "/images/Steam.png" },
    status: "Waiting",
    amount: "2.000 $USD",
  },
  {
    date: "Oct. 23",
    object: "Splash Screen Illustrator",
    company: { name: "Adobe LLC.", image: "/images/Adobe.png" },
    status: "Completed",
    amount: "5.500 $USD",
  },
  {
    date: "Oct. 23",
    object: "Features Add",
    company: { name: "The Browser Company", image: "/images/Arc.png" },
    status: "Pending",
    amount: "14.500 $USD",
  },
  {
    date: "Sept. 23",
    object: "Brand Guidelines",
    company: { name: "Figma", image: "/images/Figma.png" },
    status: "Completed",
    amount: "21.500 $USD",
  },
  {
    date: "Sept. 23",
    object: "New messages UX",
    company: { name: "Slack", image: "/images/Slack.png" },
    status: "Ongoing",
    amount: "1.900 $USD",
  },
  {
    date: "Sept. 23",
    object: "Landing page",
    company: { name: "Opensea", image: "/images/OpenSea.png" },
    status: "Pending",
    amount: "2.300 $USD",
  },
];
