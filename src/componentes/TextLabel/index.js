import './txtLabel.css'

const TextLabel = (props) => {
    const modifiedPlaceholder = `{${props.placeholder}...`
    return (
        <div className="text-label">
        <p>
           <label>
                {props.label}
            </label>
        </p>
            <input placeholder={modifiedPlaceholder} type="text" name="name" />
            
        </div>
    )
}

export default TextLabel