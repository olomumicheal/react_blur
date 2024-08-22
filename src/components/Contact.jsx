import  {useState} from "react";

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")



    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`my full name is ${name} and my email address is ${email} `);
    }
    return (
        <div className="container">
            <div className="row text-center">
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quaerat placeat nostrum dolorem iste quod dolore perspiciatis autem ratione dolor non obcaecati eum fugiat consequatur veniam eveniet commodi, ipsum ducimus?</p>
            </div>


            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="full name" 
                    value = {name}
                    onChange={ (e) => setName(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" 
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-danger" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;