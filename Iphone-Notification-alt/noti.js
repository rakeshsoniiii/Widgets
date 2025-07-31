import { createSpring, createTimeline, utils } from "https://esm.sh/animejs";

const pop = utils.$("#pop")[0];
pop.volume = 0.5;

const noti = utils.$(".notification");
const text = utils.$(".notification em")[0];

const inOut = createTimeline({
  defaults: { duration: 5000 },
  loop: true,
  loopDelay: 1000,
  onBegin: () => {
    setTimeout(() => pop.play(), 600);
  },
  onLoop: () => {
    setTimeout(() => pop.play(), 600);
    text.innerText = randomText() + "...";
  },
  onComplete: () => {
    pop.stop();
  }
});

inOut.add(noti, {
  "--height": [
    { from: "0px", to: "8px", ease: "out(3)", duration: 800 },
    {
      to: "48px",
      ease: createSpring({ stiffness: 500, mass: 1, velocity: 25, damping: 15 })
    }
  ],
  "--rounded": [
    { from: "0px", to: "6px", ease: "out(3)", duration: 800 },
    {
      to: "18px",
      ease: createSpring({
        stiffness: 200,
        mass: 0.5,
        velocity: 20,
        damping: 8
      })
    }
  ],
  "--rounded-out-radius-base": [
    { from: "0px", to: "6px", ease: "out(3)", duration: 800 },
    {
      to: "18px",
      ease: createSpring({
        stiffness: 200,
        mass: 0.5,
        velocity: 20,
        damping: 8
      })
    }
  ],
  "--translate": [
    {
      from: "-50%",
      to: "0%",
      delay: 800,
      ease: createSpring({ stiffness: 300, mass: 1, velocity: 25, damping: 20 })
    }
  ],
  "--scale": [
    { from: "0.5", to: "1", delay: 800, duration: 300, ease: "out(3)" }
  ],
  "--opacity": [
    {
      from: 0,
      to: 1,
      delay: 800,
      ease: createSpring({ stiffness: 300, mass: 1, velocity: 25, damping: 20 })
    }
  ],
  "--blur": [
    { from: "5px", to: "0px", delay: 860, duration: 360, ease: "out(3)" }
  ]
});

inOut.add(noti, {
  "--height": [{ to: "0px", delay: 2100 }],
  "--rounded": [{ to: "4px", delay: 2100 }],
  "--rounded-out-radius-base": [{ to: "0px", delay: 2100 }],
  "--translate": "-50%",
  "--opacity": 0,
  "--scale": 0.5,
  duration: 600,
  delay: 2000,
  ease: "inOutExpo"
});

let n = 0;
const randomText = () => {
  const strings = [
    "I need you to need me",
    "I'm empty, you feed me",
    "So refreshing",
    "My little soda pop",
    "You're all I can think of",
    "Every drop I drink up",
    "You're my soda pop",
    "My little soda pop"
  ];
  if (n > strings.length - 1) n = 0;
  return strings[n++];
};
