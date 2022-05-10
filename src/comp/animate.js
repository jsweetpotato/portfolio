export const animate = (target, value) => {
  target.animate(
    [
      {
        height: 0,
        opacity: 0,
      },
      {
        height: value + "px",
        opacity: 1,
      },
    ],
    {
      duration: 600,
      delay: 250,
      easing: "cubic-bezier(0.19, 1, 0.22, 1)",
    }
  );
};

export const animate2 = (target, value) => {
  target.animate(
    [
      {
        height: value + "px",
      },
      {
        height: 0,
      },
    ],
    {
      duration: 500,
    }
  );
};
