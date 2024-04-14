const TextInput = (props) => {
    return (
        <div>
            <label>{props.children}</label>
            <input
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                type="text"
            />
        </div>
    );
};

export default TextInput;