import "./Notification.css";

const Notification = ({message, type}) => {

    return (
        <section className={`alert ${type === "success" ? "success" : "error"}`}>
            <p className="text">{message}</p>
        </section>
    )
}

export default Notification