import ButtonLink from './ButtonLink.jsx'

const LinkCard = ({subTitle, titleLine1, titleLine2, handle, link1Text, link1Url, link2Text, link2Url, profileImg})=>{

  return (

  <main>
  
  
  <div className="card">

    <div className="inner">

      <div className="photo-container" style={{background: `url('${profileImg}') center/cover no-repeat`}}>
        <div className="title">
          <span className="sub-hdr">{subTitle}</span>
          <h1 className="h1">{titleLine1}<br></br>{titleLine2}</h1>
        </div>
      </div>

      <div className="btn-con">
        <div className="btn-group">
          <span className="handle">{handle}</span>
          <div className="btns">
            <ButtonLink text={link1Text} url={link1Url}/>
            <ButtonLink text={link2Text} url={link2Url}/>
          </div>
        </div>
      </div>

    </div>
  </div>


    </main>
  )
}

export default LinkCard;

