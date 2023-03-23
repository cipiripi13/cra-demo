export const MainContent = (props) => {

  const url = 'https://shoppermotion.com/wp-content/uploads/2019/06/store-layout-floorplan-1537008-1.jpg';
  const dimensions = '200px';
  const myFunc = () => {
    alert('Cao...')
  }
  const myFunc2 = (e) => {
    alert(`Kliknuli ste na ${e.target}`)
    console.log(e.target);
    console.log(e);
  }


  return (
    <main>
      <p style={{ color: 'red', cursor: 'pointer' }} onClick={myFunc2}>Main Content</p>
      <img onClick={myFunc} src={url} alt="layout" width={dimensions} style={{ margin: '10px', cursor: 'pointer' }} />
      <img src="https://shoppermotion.com/wp-content/uploads/2019/06/store-layout-floorplan-1537008-1.jpg" width={dimensions} alt='layout' />
      <div>
      <button onClick={props.onClick}>Click</button>
      </div>

    </main>
  )
}