import Button from './Button';

const Header = ({title,onAdd,showAdd}) => {

    return (
        <header className="row m-auto py-2">
            <h1 className="col-5">{title}</h1>
            <Button text={showAdd?"Close":"Add"} onClick={onAdd} showAdd={showAdd}/>
        </header>
    )
}
export default Header;