function Contact() {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with value: ${inputValue}`);
    };

    return (
        <div>
            <h1>CONTACT US</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(e) =>
            setInputValue(e.target.value)} />
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;