const Contact = ({ contact }) => {
    let message = "Message is created at Contact.jsx and being called at App.jsx"
    contact(message);
    return <div className="bg-green-700">Indian</div>
}
export default Contact;