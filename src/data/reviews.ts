import { client } from "@/config/client";

export interface Review {
  id: number;
  name: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
}

export const reviewsSummary = {
  totalReviews: 8,
  averageRating: 2.6,
  fiveStarPercentage: 38,
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJc_sznaVwfkgRHF4wgbiC5uQ",
};

export const reviews: Review[] = [
  {
    id: 1,
    name: "Elaine Shaw",
    date: "March 2024",
    rating: 5,
    text: "Front garden and drive block paved. Great job, lads worked well despite bad weather. Very efficient and listened. Thanks to Michael and the lads. Positive: Punctuality, Quality, Professionalism, Value. Services: Driveway landscaping.",
  },
  {
    id: 2,
    name: "Chris Snowdon",
    date: "March 2018",
    rating: 5,
    text: "Highly rated and excellent service from A C Services. They completed our decking in a few days, was exactly as we wanted with first class materials and friendly and professional staff. Highly recommended.",
  },
  {
    id: 3,
    name: "D Mona",
    date: "March 2018",
    rating: 5,
    text: "Fantastic New Lawn, very happy with our lawn and the service.",
  },
  {
    id: 4,
    name: "david liston",
    date: "March 2020",
    rating: 3,
    text: "A C Services relaid a path and patio area. Start to finish in three days, excellent work I'm really pleased with the result. I'd absolutely recommend them for your future work.",
  },
  {
    id: 5,
    name: "Nigel Jolly",
    date: "March 2024",
    rating: 1,
    text: "Just can't get hold of them.",
  },
  {
    id: 6,
    name: "M Smith",
    date: "March 2019",
    rating: 1,
    text: "Had paving done by this company and was pleased with it. Recommended them to my 85 year old gran, they arranged to go out twice and didn't turn up. Gave them the benefit of the doubt and arranged for them to do further work for us, they didn't turn up until I complained. Second lot of work done fine. Recently asked them to do further work to move a paving stone. Lady in the office is great and very polite, however 6 attempts later no one and bothered to get in touch with us. Appalling behaviour. We are a repeat customer and it means nothing to them. We are planning extensive work in the future and wont be getting ac to do it.",
  },
  {
    id: 7,
    name: "P D",
    date: "March 2020",
    rating: 1,
    text: "Had a fence replaced by these people. The guy that came did a good quick job. I paid promptly on completion. Then it was pointed out that a corner panel had been left off leaving a gap in the fence. I phoned them to ask for it to be put right and was promised that it would be done the very next day. 8 weeks later I get the same response along with 'Oh! I thought he'd done that' every time I called. Total waste of space. He's missed out on two big landscape project I have planned front and back.",
  },
  {
    id: 8,
    name: "Keith Holland",
    date: "March 2017",
    rating: 1,
    text: "Rang this company to arrange for a quote. Someone visited my house and promised the quote would be through my letterbox the next day - chased 3 days later as no sign of it, was promised a call back which never happened. Called in a week later and still no quote - poor customer service and would not recommend.",
  },
];
