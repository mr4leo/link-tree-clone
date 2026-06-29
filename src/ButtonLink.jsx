const ButtonLink = ({text, url})=>{

  return (
    <a target="_blank" rel="noopener" className="btn" href={url}>{text}</a>

  )
  
}

export default ButtonLink;