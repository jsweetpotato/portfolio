export const animate = (target, value) => {
  target.animate([
    {
      height: 0
    },
    {
      height: value + "px"
    }
  ], {
    duration: 500
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