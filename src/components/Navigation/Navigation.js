export const Navigation = () =>{
    // const navItem = [
        
    //     'Home',
    //     'About',
    //     'Aboout Us'
    // ];

    const navItem = [
        {name: 'Home', link: '/'},
        {name: 'About us', link: '/'},
        {name: 'Contact', link: '/'},
    ]

    return (
        <nav>
            <p>Header</p>
           {
           navItem.map((item) =>{
            return <a href={item.link}>{(item.name)}</a>
            })
           } 
        </nav>
    );
   
};