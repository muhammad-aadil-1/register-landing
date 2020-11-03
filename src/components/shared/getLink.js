const getLink = (str) => {
    if(!str)
      return '/';
    const tmp = str.split('/');
    return tmp[ tmp.length - 1 ]
}

export default getLink;