const Templates=(props)=>{
    return <div className="templates">
       {props.templates.map((template, index) => (
            <div key={template.id} className="template" 
           onClick={()=>props.setMeme(template)} style={{backgroundImage:`url(${template.url})`}}/>
          ))}
    </div>
    }
    
    export default Templates