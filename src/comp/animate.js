export const animate = (target, value) => {
  target.animate([
    {
      height: 0
    },
    {
      height: value + "px"
    }
  ], {
    duration: 600,
    easing: "cubic-bezier(0.19, 1, 0.22, 1)"
  })
}

export const animate2 = (target, value) => {
  target.animate([
    {
      height: value + "px"
    },
    {
      height: 0
    }
  ], {
    duration: 500
  })
}