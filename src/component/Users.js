import { useEffect, useState } from "react"

export const Users = () => {
    //1.hook area
    const [id, setId] = useState();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const [using, setUsing] = useState([{
        id: 1,
        username: 'Sumuk S',
        password: 'abcd0987',
        name: 'sumuk'
    }])

    //useEffect() call the API after page load
    useEffect(() => {
        //whatever you write here will execute afer the page load/component rendered
        fetch(`https://localhost:7205/api/users`)
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                console.log(data);
                let newobj = data.map((cv, idx, arr) => {
                    return {
                        id: cv.id,
                        username: cv.username,
                        password: cv.password,
                        name: cv.name
                    }
                });
                setUsing(newobj);
            })
            .catch();
    }, [])
    //2.function definition area
    let submitData = () => {
        console.log(id);
        console.log(username);
        console.log(password);
        console.log(name);

        let payload = {
            "id": id,
            "username": username,
            "password": password,
            "name": name
        }
        console.log(payload);

        fetch(`https://localhost:7205/api/adduser`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then((res) => { return res.json() })
            .then((data) => { console.log(data); })
            .catch((err) => { })
    }
    //3.return area
    return (
        <>
            <div className="container">
                <form className="w-25 offset-4">
                    <h1>Add Users</h1>
                    <div className="mb-3">
                        <label htmlFor="id" className="form-label">Id</label>
                        <input type="id" name="username" placeholder="id" className="form-control" onChange={(e)=>{setId(e.target.value)}} id="id" aria-describedby="id" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">User Name</label>
                        <input type="text" name="username" className="form-control" onChange={(e)=>{setUserName(e.target.value)}} id="username" aria-describedby="username" />
                    </div>                    
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" onChange={(e)=>{setPassword(e.target.value)}} id="password" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name="email" className="form-control" id="name" onChange={(e)=>{setName(e.target.value)}} aria-describedby="name" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={submitData} >Add Users</button>
                </form>
                {/* <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputId" className="form-label">Id</label>
                        <input type="id"  className="form-control" onChange={(e)=>{setId(e.target.value)}} id="exampleInputId" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">User Name  </label>
                        <input type="username"  className="form-control" onChange={(e)=>{setUserName(e.target.value)}} id="exampleInputUserName" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password"  className="form-control" onChange={(e)=>{setPassword(e.target.value)}}id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">Name</label>
                        <input type="name"  className="form-control" onChange={(e)=>{setName(e.target.value)}}id="exampleInputName" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={submitData} >Submit</button>
                </form> */}
                <br />
                <hr />
                <hr />
                <br />
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">User Name</th>
                            <th scope="col">Password</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            using.map((cv, idx, arr) => {
                                return <tr>
                                    <td>{cv.id}</td>
                                    <td>{cv.username}</td>
                                    <td>{cv.password}</td>
                                    <td>{cv.name}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}