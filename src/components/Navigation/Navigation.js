export const Navigation = () => { // NAMED EXPORT
  // const navItem = [

  //     'Home',
  //     'About',
  //     'Aboout Us'
  // ];

  const navItem = [
    { name: 'Home', link: '/' },
    { name: 'About us', link: '/' },
    { name: 'Contact', link: '/' },
  ]

  return (
    <nav>
      <p>Header</p>
      {
        navItem.map((item, index) => {
          return <a href={item.link} key={index}>{(item.name)}</a>
        })
      }
    </nav>
  );

};