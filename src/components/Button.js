
const Button = ({text,onClick,showAdd}) => {
    return (
        <div className="col-2 m-auto">
            <button className={`add btn ${showAdd?"btn-dark":"btn-success"}`} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button;