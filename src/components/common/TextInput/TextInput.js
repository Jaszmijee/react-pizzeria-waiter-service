const TextInput = (props) => {
    return (
        <form>
            <label>{props.children}</label>
            <input
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                type="text"
            />
        </form>
    );
};
export default TextInput;