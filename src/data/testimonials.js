const testimonials = [
  // ───────────── EXISTING (1–7 unchanged) ─────────────
  {
    id: 1,
    name: "Client",
    role: "Senior Project",
    quote:
      "Really happy with the work from day one. Every small detail was taken care of, and the results turned out even better and cleaner than I expected. The project was finished on time without any delay, and I always felt updated on the quality and details. Working with you was easy and professional.",
  },
  {
    id: 2,
    name: "Client",
    role: "Senior Project Team",
    quote:
      "Thank you so much for all the effort you put in with us during the senior project. Honestly, we couldn't have asked for anyone more organized and professional. You worked hard on it and were always available whenever we needed help — no matter what we asked for, you made sure it was done right. Really appreciate everything you did.",
  },
  {
    id: 3,
    name: "Client",
    role: "Project Owner",
    quote:
      "Thank you, the work was professional and super attentive to every detail. What we appreciated most is that you kept us updated throughout the whole project. Big thanks.",
  },
  {
    id: 4,
    name: "Client",
    role: "Mobile Application",
    quote:
      "I honestly can't put into words how thankful I am for the incredible work you did. The application turned out to be a true piece of art — even better than what I had imagined. Clear from every angle, detailed down to the smallest thing, and you could tell how much heart and effort went into it. Thank you for your time, your effort, and your patience until the project reached this polished, professional look. I really value your hard work and your skill.",
  },
  {
    id: 5,
    name: "Client",
    role: "Development Project",
    quote:
      "When it comes to the work, it was really smooth and professional — everything was perfect and organized exactly as we expected, even better. Very attentive to the smallest details, and the whole experience of working together was honest and straightforward. Never worried that anything would be late. Thank you so much.",
  },
  {
    id: 6,
    name: "Client",
    role: "web project",
    quote:
      "The work was perfect, thank you. Everything was neat and organized, exactly as I asked for. Working with you was great, and the project turned out very well organized. Impressive — good luck to you.",
  },
  {
    id: 7,
    name: "Client",
    role: "Website Project",
    quote:
      "Honestly, I'm really happy you helped me. The work you did on the website was nice and well done, and you fixed the issues quickly and cleanly. Dealing with you was really easy and comfortable, and your help made a big difference. What I appreciated the most was your attitude — you were always responsive, patient, and willing to explain everything clearly. Thank you so much, the result was better than I expected.",
  },

  // ───────────── 8 & 9: REPLACED with the exact wording from the screenshots ─────────────
  {
    id: 8,
    name: "Client",
    role: "Website Project",
    quote:
      "Thank you for your service and your credibility, the website is very professional and easy to use. I appreciate all your hard efforts to make the registration process easier through the QR code. Thank you Ali ur the best in town !!!!",
  },
  {
    id: 9,
    name: "Client",
    role: "Client Feedback",
    quote: "Ur the best. Trust ur self. Trust the process.",
  },

  // ───────────── NEW: client project feedback ─────────────
  {
    id: 10,
    name: "Client",
    role: "Project Client",
    quote:
      "Hello! I really loved the work — very organized, professional, and you always delivered everything on time, honestly. Thank you so much, it was a pleasure working with you.",
  },
  {
    id: 11,
    name: "Client",
    role: "Client Feedback",
    quote:
      "On the contrary, it's very nice and good! And the information is very, very good — you can tell how much work and research went into it.",
  },
  {
    id: 12,
    name: "Client",
    role: "Project Client",
    quote:
      "Ali, oh Ali! I'm very happy, first of all, with this lovely work on this project, which is complete in every aspect, to the point that I don't have the heart to close the laptop — I want it to keep running, that's how happy I am with the project. Thank you, I'm so proud of you, you legend! And whatever I say, it won't be enough.",
  },
  {
    id: 13,
    name: "Client",
    role: "WhatsApp Account Recovery",
    quote:
      "Good morning! Ali, I want to tell you, you gave me so much relief yesterday when WhatsApp started working. I swear my work was at a standstill, and thanks to you my appointments are coming back. I know I wore you out a lot, and honestly you put up with me and stayed with me every moment until you set my email up for me and sorted out all the mess that happened. However much I thank you, it's not enough (especially since I had an experience with a phone shop that lost me my main number for my work and stopped my appointments because of it). I wish you would post videos and posts to make people aware to go to a specialist, because not every shop owner knows how to solve these problems, especially business owners.",
  },

  // ───────────── NEW: Git & GitHub sessions / workshops / courses ─────────────
  {
    id: 14,
    name: "Participant",
    role: "Git & GitHub Session",
    quote:
      "It was An amazing session to someone who doesn't k ow anything about Git and GitHub , things are more clear now !! And I really can't wait for other sessions to be held . Thank you for your time and effort , thank you for following up with me . It was a pleasure knowing u",
  },
  {
    id: 15,
    name: "Participant",
    role: "Session Attendee",
    quote:
      "Ali, thank you for the session, honestly. You were explaining from your heart despite the pressure you were under, you gave us your time, and I benefited a lot from practicing with you. A thousand well-dones to you, and I'm with you in everything new, God willing.",
  },
  {
    id: 16,
    name: "Participant",
    role: "Session Attendee",
    quote:
      "Honestly, I really liked the session! Your way of explaining was very nice and light, I didn't even feel it, I was just sitting and learning. The session was fun and the result was great, plus it was practical — I'm the one who did everything — so this way I'm benefiting more. Thank you for the effort.",
  },
  {
    id: 17,
    name: "Participant",
    role: "Git & GitHub Course",
    quote:
      "I really enjoyed the Git and GitHub course. It was very interesting, well-organized, and easy to understand. I learned many new things and gained useful knowledge about using Git and GitHub to manage projects and track code changes. The explanations were clear, and the practical examples were very helpful. Overall, it was a great learning experience, and I benefited a lot from this course. Thank you!",
  },
  {
    id: 18,
    name: "Participant",
    role: "Session Attendee",
    quote:
      "As a complete beginner, I found the session very informative and helpful, everything was explained in a simple and clear way. Overall it was great, and I feel confident now in using the tools in future projects. Thank you!!!",
  },
  {
    id: 19,
    name: "Participant",
    role: "Workshop Participant",
    quote: "You know how to explain things well and simplify informations.",
  },
  {
    id: 20,
    name: "Participant",
    role: "Workshop Participant",
    quote: "The explanation was clear, well-organized, and easy to understand",
  },
  {
    id: 21,
    name: "Participant",
    role: "Workshop Participant",
    quote: "I like ittt, it was simple clear & beneficial. Thankk youu Ali",
  },
  {
    id: 22,
    name: "Participant",
    role: "Workshop Participant",
    quote: "Thank you for an intuitive workshop",
  },
  {
    id: 23,
    name: "Participant",
    role: "Workshop Participant",
    quote:
      "It was a great session. I just feel it would have been even better if we had done more practical application.",
  },
  {
    id: 24,
    name: "Participant",
    role: "Workshop Participant",
    quote:
      "It was productive i had a bit of experience with github and yet i learned even more thank you",
  },
  {
    id: 25,
    name: "Participant",
    role: "Workshop Participant",
    quote:
      "It was great and full with important knowlage to know especially for beginners.",
  },
  {
    id: 26,
    name: "Participant",
    role: "Workshop Participant",
    quote:
      "Very nice, useful, and simple, it gets the idea across directly.",
  },

  // ───────────── OPTIONAL: very short responses (too short for a card) ─────────────
  // "Very very very perfect"
  // "Excellent implementation"
  // "important and clear"
  // "Very good workshop"
  // "so special top"
  // "It was great!"
  // "Good" / "good" / "Very good"
];

export default testimonials;

// const testimonials = [
//   {
//     id: 1,
//     name: "Client",
//     role: "Senior Project",
//     quote:
//       "Really happy with the work from day one. Every small detail was taken care of, and the results turned out even better and cleaner than I expected. The project was finished on time without any delay, and I always felt updated on the quality and details. Working with you was easy and professional.",
//   },
//   {
//     id: 2,
//     name: "Client",
//     role: "Senior Project Team",
//     quote:
//       "Thank you so much for all the effort you put in with us during the senior project. Honestly, we couldn't have asked for anyone more organized and professional. You worked hard on it and were always available whenever we needed help — no matter what we asked for, you made sure it was done right. Really appreciate everything you did.",
//   },
//   {
//     id: 3,
//     name: "Client",
//     role: "Project Owner",
//     quote:
//       "Thank you, the work was professional and super attentive to every detail. What we appreciated most is that you kept us updated throughout the whole project. Big thanks.",
//   },
//   {
//     id: 4,
//     name: "Client",
//     role: "Mobile Application",
//     quote:
//       "I honestly can't put into words how thankful I am for the incredible work you did. The application turned out to be a true piece of art — even better than what I had imagined. Clear from every angle, detailed down to the smallest thing, and you could tell how much heart and effort went into it. Thank you for your time, your effort, and your patience until the project reached this polished, professional look. I really value your hard work and your skill.",
//   },
//   {
//     id: 5,
//     name: "Client",
//     role: "Development Project",
//     quote:
//       "When it comes to the work, it was really smooth and professional — everything was perfect and organized exactly as we expected, even better. Very attentive to the smallest details, and the whole experience of working together was honest and straightforward. Never worried that anything would be late. Thank you so much.",
//   },
//   {
//     id: 6,
//     name: "Client",
//     role: "web project",
//     quote:
//       "The work was perfect, thank you. Everything was neat and organized, exactly as I asked for. Working with you was great, and the project turned out very well organized. Impressive — good luck to you.",
//   },
//   {
//     id: 7,
//     name: "Client",
//     role: "Website Project",
//     quote:
//       "Honestly, I'm really happy you helped me. The work you did on the website was nice and well done, and you fixed the issues quickly and cleanly. Dealing with you was really easy and comfortable, and your help made a big difference. What I appreciated the most was your attitude — you were always responsive, patient, and willing to explain everything clearly. Thank you so much, the result was better than I expected.",
//   },
//   {
//   id: 8,
//   name: "Client",
//   role: "Website Project",
//   quote:
//     "Thank you for your service and your credibility. The website was professional, easy to use, and everything worked smoothly. I truly appreciate the effort you put into making the registration process simple through the QR code—it made the entire process fast, organized, and effortless. Every detail was handled professionally, and your reliability, attention to detail, and willingness to help made the whole experience stress-free. Thank you, Ali. Highly recommended.",
// },
// {
//   id: 9,
//   name: "Client",
//   role: "Client Feedback",
//   quote:
//     "You're the best. Keep trusting yourself and trust the process. Your professionalism, commitment, and quality of work speak for themselves. Wishing you continued success.",
// },

// ];

// export default testimonials;