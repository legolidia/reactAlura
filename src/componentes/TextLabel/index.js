import './txtLabel.css'

const TextLabel = (props) => {
    return (
        <div className="text-label">" 
           <label>
                {props.label}
            </label>

            <input placeholder={props.placeholder} type="text" name="name" />
            
        </div>
    )
}

export default TextLabel