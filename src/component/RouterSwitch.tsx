
export const Switch = (name: string): string => {
  
  switch (name) {
    case "/":
      return name
      break;
    case "/students":
      return name
      break;
    case "/teacher":
      return name
      break;
    case "/manager":
      return name
      break;
    case "/about":
      return name
      break;
    case "/login":
      return name
      break;
    case "/notes":
      return name
      break;
    case "/library":
      return name
      break;
    case "/teacher/del":
      return name
      break;

    default:
      return 'Invalid route'
      break;
  }
}
